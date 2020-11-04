var VSHVCoin = artifacts.require("./VSHVCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(VSHVCoin, {gas: 4700000});
};
