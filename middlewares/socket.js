const socket_io = require('socket.io')
const io = socket_io()
const socketApi = {}
const redis = require('./redis')
socketApi.io = io

io.on('connection', (socket) => {
	// socket_functions(socket)
	console.log(socket.id)
	socket.on('create-game', async (userAddress) => {
		const user1 = { id: socket.id, userAddress }
		const room = Math.floor(100000 + Math.random() * 900000)
		socket.join(room)
		await redis.lpush(`${room}`, JSON.stringify(user1))
		socket.emit('game-created', room)
	})
	socket.on('join-game', async (user) => {
		console.log('Log: user', user)
		const user2 = { id: socket.id, userAddress: user.userAddress }
		console.log('Log: user2', user2)
		if ((await redis.llen(`${user.room}`)) == 1) {
			socket.join(user.room)
			await redis.lpush(`${user.room}`, JSON.stringify(user2))
			io.in(user.room).emit('user-joined', {
				userAddress: user.userAddress,
			})
		}
	})
})

// socketApi.sendNotification = function () {
// 	io.sockets.emit('hello', { msg: 'Hello World!' })
// }

module.exports = socketApi
