let account
let LN, LongNight
let netId
window.addEventListener('load', async () => {
	// Modern dapp browsers...
	if (window.ethereum) {
		console.log('TCL: window.ethereum', window.ethereum)
		window.web3 = new Web3(ethereum)
		try {
			// Request account access if needed
			await ethereum.enable()
			// Acccounts now exposed
			web3.eth.sendTransaction({
				/* ... */
			})
		} catch (error) {
			// User denied account access...
		}
	}
	// Legacy dapp browsers...
	else if (window.web3) {
		console.log('TCL: window.web3', window.web3)
		window.web3 = new Web3(web3.currentProvider)
		// Acccounts always exposed
		web3.eth.sendTransaction({
			/* ... */
		})
	}
	// Non-dapp browsers...
	else {
		console.log(
			'Non-Ethereum browser detected. You should consider trying MetaMask!'
		)
	}
	account = web3.eth.accounts[0]
	console.log('Log: account', account)
	// const accountInterval = setInterval(function () {
	// 	if (web3.eth.accounts[0] !== account) {
	// 		account = web3.eth.accounts[0]
	// 		location.reload(true)
	// 	}
	// }, 100)
	LN = new window.web3.eth.Contract(contractAbi, contractAddress)
	console.log('TCL: LN', LN)
})
