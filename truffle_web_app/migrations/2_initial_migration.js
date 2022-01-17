const testContract = artifacts.require("testContract");

module.exports = function (deployer) {
  deployer.deploy(testContract);
};
