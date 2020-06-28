const relayHub = '0xD216153c06E857cD7f72665E0aF1d7D82172F494'
const stakeManager = require('../build/gsn/StakeManager.json').address
const paymaster = require('../build/gsn/Paymaster.json').address
const contractAddress = require('../public/assets/build/LongNight.json')
	.networks[15001].address

module.exports = {
	config: {
		contract: contractAddress,
		relayHub,
		stakeManager,
		paymaster,
	},
}
