const socket = io('http://localhost:5000')

// window.onload = () => {
// 	createGame('denny')
// }
console.log(socket.id)

function createGame(userAddres) {
	socket.emit('create-game', userAddres)
}

function joinGame(room, userAddress) {
	socket.emit('join-game', { room, userAddress })
}
function closeGame(room) {
	socket.emit('close-quiz', { room })
}

function leaveGame() {}

function answerQuiz() {}
