const relayHub = require('../build/gsn/RelayHub.json').address;
const stakeManager = require('../build/gsn/StakeManager.json').address;
const paymaster = require('../build/gsn/Paymaster.json').address;
module.exports = {
  config: {
    contract: '0xAB08E3d885608fDF1f6C7306803CA19a90b16B90',
    relayHub,
    stakeManager,
    paymaster,
  },
};