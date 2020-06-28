window.socket = window.io('http://localhost:5000')
let account
let LN, LongNight
let netId
import Web3 from 'web3'
import { config } from './config'
const Gsn = require('@opengsn/gsn/dist/src/relayclient/')
const contractABI = require('../public/assets/build/LongNight.json')
const configureGSN = require('@opengsn/gsn/dist/src/relayclient/GSNConfigurator')
	.configureGSN
const { GSNProvider } = require('@openzeppelin/gsn-provider')
const RelayProvider = Gsn.RelayProvider
window.addEventListener('load', async () => {
	if (typeof window.ethereum !== 'undefined') {
		window.web3 = new Web3(ethereum)
		const accounts = await ethereum.enable()
		ethereum.autoRefreshOnNetworkChange = false
		account = accounts[0]
		console.log('Log: account', account)
		// const gsnConfig = configureGSN({
		// 	relayHubAddress: config.relayHub,
		// 	methodSuffix: '_v4',
		// 	jsonStringifyRequest: true,
		// 	chainId: 15001,
		// })
		// var provider = new RelayProvider(
		// 	'https://testnetv3.matic.network',
		// 	gsnConfig
		// )
		//web3.setProvider(new GSNProvider('https://testnetv3.matic.network'))
	}
	LN = new window.web3.eth.Contract(contractABI.abi, config.contract)
})
window.ethereum.on('accountsChanged', function (accounts) {
	// Time to reload your interface with accounts[0]!
	account = accounts[0]
	console.log('Log: account', account)
})

window.createGame = async (userAddres) => {
	try {
		console.log('Log: createGame -> account', account)
		// console.log('Log: createGame -> LN.methods', LN.methods)
		const create_res = await LN.methods.create_game().send({
			from: account,
		})
		// const create_res = await LN.methods.id().call({ from: account })
		console.log('Log: createGame -> create_res', create_res)
		if (create_res.status) {
			window.socket.emit('create-game', {
				userAddres,
				GameId: create_res.events.GameId.returnValues.id,
			})
		}
	} catch (error) {
		console.log('Log: createGame -> error', error)
	}
}

window.joinGame = async (room, userAddress) => {
	window.socket.emit('join-game', {
		room,
		userAddress,
	})

	console.log('Log: window.joinGame -> join_res', join_res)
}

window.closeGame = (room) => {
	window.socket.emit('close-quiz', {
		room,
	})
}

// window.socket.on('ans-and-next-quiz', (data) => {
//     if (data.currentAns === true) {

//     } else {

//    }
// })

window.claimAmount = async (data) => {
	console.log('Log: window.claimAmount -> data', data)
	const close_game_res = await LN.methods.close_game().send({
		from: account,
	})
}

window.checkAnswer = (data) => {
	window.socket.emit('check-quiz', data)
}
