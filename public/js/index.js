const socket = io('http://localhost:5000')

// window.onload = () => {
// 	createGame('denny')
// }
console.log(socket.id)

socket.on('someone-joined', (data) => {
	console.log('Log: data', data)
})

function createGame(userAddres) {
	socket.emit('create-game', userAddres)
}

function joinGame(room, userAddress) {
	socket.emit('join-game', { room, userAddress })
}

function leaveGame() {}

function answerQuiz() {}
