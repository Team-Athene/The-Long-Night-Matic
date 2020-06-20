const LongNight = artifacts.require('LongNight');
const TrustedForwarder = require('../build/gsn/Forwarder.json').address;
module.exports = async function (deployer, network, accounts) {
  // deployer
  // 	.deploy(PayMaster, {
  // 		from: accounts[0]
  // 	})
  // 	.then(instance => {
  // 		PayInstance = instance;
  // 		return
  deployer
    .deploy(LongNight, TrustedForwarder, {
      from: accounts[0],
      // });
    })
    .then((instance) => {
      // LongInstance = instance;
      // PayInstance.setRelayHub(RelayHUb);
      // PayInstance.send(1e18);
      // PayInstance.setTarget(LongInstance.address);
    });
};
