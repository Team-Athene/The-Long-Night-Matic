const socket = io('http://localhost:5000')
let account
let LN, LongNight
let netId

window.addEventListener('load', async () => {
	if (typeof window.ethereum !== 'undefined') {
		window.web3 = new Web3(ethereum)
		const accounts = await ethereum.enable()
		ethereum.autoRefreshOnNetworkChange = false
		account = accounts[0]
		console.log('Log: account', account)
	}
	LN = new window.web3.eth.Contract(
		contractABI.abi,
		contractABI.networks['5777'].address
	)
})
ethereum.on('accountsChanged', function (accounts) {
	// Time to reload your interface with accounts[0]!
	account = accounts[0]
	console.log('Log: account', account)
})

createGame = async (userAddres) => {
	try {
		console.log('Log: createGame -> account', account)
		// console.log('Log: createGame -> LN.methods', LN.methods)
		const create_res = await LN.methods
			.create_game()
			.send({ from: account, gas: 8000000, value: 800000000 })
		// const create_res = await LN.methods.id().call({ from: account })
		console.log('Log: createGame -> create_res', create_res)

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
