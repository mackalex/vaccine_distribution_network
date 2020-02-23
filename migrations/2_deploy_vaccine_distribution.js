const VaccineDistribution = artifacts.require("VaccineDistribution");

module.exports = function(deployer) {
  deployer.deploy(VaccineDistribution);
};
