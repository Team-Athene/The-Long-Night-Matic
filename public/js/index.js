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

async function createGame(userAddres) {
	console.log("TCL: createGame -> LN.methods", LongNight)
	const userDetails = await LongNight.create_game().send( { from: account, gas: 5000000, value: 10000000000000000000  } )
    console.log("TCL: createGame -> userDetails", userDetails)
	socket.emit('create-game', userAddres)
}

function joinGame(room, userAddress) {
	socket.emit('join-game', { room, userAddress })
}
function closeGame(room) {
	socket.emit('close-quiz', { room })
}

function claimAmount() {}

function checkAnswer(data) {
	socket.emit('check-quiz', data)
}
