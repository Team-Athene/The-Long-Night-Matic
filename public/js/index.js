const socket = io('http://localhost:5000')
let account
let LN, LongNight
let netId
// contractAddress = contractABI.networks['5777'].address
// const contractAbi = contractABI.abi
window.addEventListener('load', async () => {
	if (typeof window.ethereum !== 'undefined') {
		console.log('MetaMask is installed!')
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
	account = accounts[0]
	console.log('Log: account', account)
	// Time to reload your interface with accounts[0]!
})
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
