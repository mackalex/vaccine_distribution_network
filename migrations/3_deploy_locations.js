const Locations = artifacts.require("Locations");

module.exports = function(deployer) {
  deployer.deploy(Locations);
};
