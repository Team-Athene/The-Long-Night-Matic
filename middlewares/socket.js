const socket_io = require('socket.io')
const io = socket_io()
const socketApi = {}
const redis = require('./redis')
socketApi.io = io
const quiz = require('../public/assets/quiz.json')
io.on('connection', async (socket) => {
	console.log(socket.id)
	socket.on('create-game', async (data) => {
		const user1 = {
			user: 1,
			id: socket.id,
			userAddress: data.userAddress,
			score: 3,
			GameId: data.GameId,
		}
		const room = Math.floor(100000 + Math.random() * 900000)
		socket.join(room)
		await redis.lpush(`${room}`, JSON.stringify(user1))
		socket.emit('game-created', { room, GameId: data.GameId })
	})
	socket.on('join-game', async (user) => {
		if ((await redis.llen(`${user.room}`)) == 1) {
			const user1 = JSON.parse(await redis.lrange(`${user.room}`, 0, 0))
			const user2 = {
				user: 2,
				id: socket.id,
				userAddress: user.userAddress,
				score: 3,
				GameId: user1.GameId,
			}
			socket.join(user.room)
			await redis.lpush(`${user.room}`, JSON.stringify(user2))
			await redis.lpush(`${user.room}`, JSON.stringify(quiz))
			let q = JSON.parse(await redis.lrange(`${user.room}`, 0, 0))
			let qId = Math.floor(Math.random() * q.length)
			let newQuiz = q.filter((item) => item !== q[qId])
			await redis.lpop(`${user.room}`)
			await redis.lpush(`${user.room}`, JSON.stringify(newQuiz))
			// console.log('Log: q[qId]', q[qId])
			delete q[qId].ans
			const users = await redis.lrange(`${user.room}`, 1, -1)
			console.log('TCL: users', users)
			io.in(user.room).emit('user-joined', {
				userAddress: user.userAddress,
				quiz: q[qId],
				qId,
				users,
				GameId: user1.GameId,
			})
		}
	})
	socket.on('check-quiz', async (data) => {
		console.log('TCL: data', data)
		let currentAns = quiz[data.id].ans
		let q = JSON.parse(await redis.lrange(`${data.room}`, 0, 0))
		let qid = Math.floor(Math.random() * q.length)
		let newQuiz = quiz.filter((item) => item !== q[qid])
		await redis.lpop(`${data.room}`)
		await redis.lpush(`${data.room}`, JSON.stringify(newQuiz))
		delete q[qid].ans
		if (currentAns == data.ans) {
			io.in(data.room).emit('ans-and-next-quiz', {
				currentAns: true,
				quiz: q[qid],
				qid,
			})
		} else {
			io.in(data.room).emit('ans-and-next-quiz', {
				currentAns: false,
				quiz: q[qid],
				qid,
			})
		}
	})
	socket.on('leave', async (room) => {
		console.log('Log: room', room)
		socket.leave(room)
		await redis.del(`${room}`)
	})
})

// socketApi.sendNotification = function () {
// 	io.sockets.emit('hello', { msg: 'Hello World!' })
// }

module.exports = socketApi
