let account
let LN, LongNight
let netId
window.addEventListener('load', async () => {
	// Modern dapp browsers...
	if (window.ethereum) {
        console.log("TCL: window.ethereum", window.ethereum)
		window.web3 = new Web3(ethereum);
		try {
		  // Request account access if needed
		  let a = await ethereum.enable();
    	  account = a[0]
		  // Acccounts now exposed
		  web3.eth.sendTransaction({/* ... */});
		} catch (error) {
		  // User denied account access...
		}
	  }
	  // Legacy dapp browsers...
	  else if (window.web3) {
   		console.log("TCL: window.web3", window.web3)
		window.web3 = new Web3(web3.currentProvider);
		// Acccounts always exposed
		web3.eth.sendTransaction({/* ... */});
	  }
	  // Non-dapp browsers...
	  else {
		console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
	  }

	// SPKJSON = require('../../../../build/SpecKart.json')
	netId = await web3.eth.net.getId()
	// web3.eth.net.getId((err, netId) => {
		console.log("TCL: netId", netId)
		switch (netId) {
			case '1':
				console.log('This is mainnet')
				break
			case '2':
				console.log('This is the deprecated Morden test network.')
				break
			case '3':
				console.log('This is the ropsten test network.')
				break
			case '4':
				console.log('This is the Rinkeby test network.')
				break
			case '42':
				console.log('This is the Kovan test network.')
				break
			default:
				console.log('This is an unknown network.')
		}
	// })
	// acc = await web3.eth.getAccounts()
	// account = acc[0]
	console.log('Log: account', account)
	// const accountInterval = setInterval(function () {
	// 	if (web3.eth.accounts[0] !== account) {
	// 		account = web3.eth.accounts[0]
	// 		location.reload(true)
	// 	}
	// }, 100)
	LN = new window.web3.eth.Contract(contractAbi, contractAddress)
	LongNight = LN.methods
    console.log("TCL: LN", LN.methods)
})