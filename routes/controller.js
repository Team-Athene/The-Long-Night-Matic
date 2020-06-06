// const redis = require('../middlewares/redis')
// const socket = require('../middlewares/socket'),
// 	io = socket.io
// exports.newGame = async (req, res, next) => {
// 	try {
// 		const { userAddress } = req.body
// 		const room = Math.floor(100000 + Math.random() * 900000)
// 		await redis.lpush(`${room}`, userAddress)
// 		return res.json({
// 			success: true,
// 			message: 'New Game Created successfully',
// 			data: { room },
// 		})
// 	} catch (err) {
// 		console.log('err', err)
// 		return res.status(500).json({
// 			success: false,
// 			message: err.toString(),
// 		})
// 	}
// }
// exports.joinGame = async (req, res, next) => {
// 	try {
// 		const { room, userAddress } = req.body

// 		if ((await redis.llen(`${room}`)) == 2) {
// 			return res.status(422).json({
// 				success: false,
// 				message: 'Room Full',
// 			})
// 		}
// 		if ((await redis.llen(`${room}`)) == 1) {
// 			await redis.lpush(`${room}`, userAddress)

// 			io.emit('someone-joined', {
// 				userAddress,
// 			})
// 			return res.json({
// 				success: true,
// 				message: 'Game joined successfully',
// 				data: { room },
// 			})
// 		} else {
// 			return res.json({
// 				success: true,
// 				message: 'No game found',
// 				data: { room },
// 			})
// 		}
// 	} catch (err) {
// 		console.log('err', err)
// 		return res.status(500).json({
// 			success: false,
// 			message: err.toString(),
// 		})
// 	}
// }
