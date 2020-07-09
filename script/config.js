const relayHub = require('../build/gsn/RelayHub.json').address
const stakeManager = require('../build/gsn/StakeManager.json').address
const contractAddress = require('../public/assets/build/LongNight.json')
	.networks[80001].address

module.exports = {
	config: {
		contract: contractAddress,
		relayHub,
		stakeManager,
		paymaster,
	},
}