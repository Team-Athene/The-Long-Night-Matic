const socket = io('http://localhost:5000')
contractAddress = contractABI.networks['5777'].address
const contractAbi = contractABI.abi

createGame = async (userAddres) => {
	try {
		console.log('TCL: createGame -> LN.methods', LN.methods)
		const create_res = await LN.methods.admin().call()
		if (create_res.status) {
			alert('greetings')
		}

		socket.emit('create-game', userAddres)
	} catch (error) {
		console.log('Log: createGame -> error', error)
	}
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
