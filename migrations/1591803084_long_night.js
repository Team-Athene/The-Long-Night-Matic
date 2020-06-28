const LongNight = artifacts.require('LongNight')
const TrustedForwarder = require('../build/gsn/Forwarder.json').address
const HDWalletProvider = require('truffle-hdwallet-provider')
const mnemonic =
	'brass bar head behind predict pass final staff twist state purchase next'
const Web3 = require('web3')
const { fundRecipient } = require('@openzeppelin/gsn-helpers')

module.exports = async function (deployer, network, accounts) {
	// deployer
	// 	.deploy(PayMaster, {
	// 		from: accounts[0]
	// 	})
	// 	.then(instance => {
	// 		PayInstance = instance;
	// 		return
	deployer
		.deploy(LongNight, {
			from: accounts[0],
			// });
		})
		.then(async (instance) => {
			const provider = new HDWalletProvider(
				mnemonic,
				'https://testnetv3.matic.network'
			)
			const web3 = new Web3(provider)

			await fundRecipient(web3, {
				recipient: instance.address,
				relayHubAddress: '0xD216153c06E857cD7f72665E0aF1d7D82172F494',
				amount: web3.utils.toWei('1', 'ether'),
				from: accounts[0], // enter your account address (must have enough balance to fund!)
			})
			await instance.initialize()
			// LongInstance = instance;
			// PayInstance.setRelayHub(RelayHUb);
			// PayInstance.send(1e18);
			// PayInstance.setTarget(LongInstance.address);
		})
}
