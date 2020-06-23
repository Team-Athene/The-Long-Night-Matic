const relayHub = require('../build/gsn/RelayHub.json').address
const stakeManager = require('../build/gsn/StakeManager.json').address
const paymaster = require('../build/gsn/Paymaster.json').address
module.exports = {
	config: {
		contract: '0xb214D868d7DBFbAa56e179432c8B14B00b1c2ec9',
		relayHub,
		stakeManager,
		paymaster,
	},
}
