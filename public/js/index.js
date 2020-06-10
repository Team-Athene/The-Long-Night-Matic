const socket = io('http://localhost:5000')

// window.onload = () => {
// 	createGame('denny')
// }
console.log(socket.id)
console.log(contractABI)
contractAddress = contractABI.networks['5777'].address
console.log('Log: contractAddress', contractAddress)
const contractAbi = contractABI.abi
console.log('Log: contractAbi', contractAbi)
LN = new web3.eth.Contract(contractAbi, contractAddress)
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

function checkAnswer(data) {
	socket.emit('check-quiz', data)
}
