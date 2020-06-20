const relayHub = require('../build/gsn/RelayHub.json').address;
const stakeManager = require('../build/gsn/StakeManager.json').address;
const paymaster = require('../build/gsn/Paymaster.json').address;
module.exports = {
  config: {
    contract: '0xAA60eA72c8270fc6674dd8c968Db9E67936c5c12',
    relayHub,
    stakeManager,
    paymaster,
  },
};