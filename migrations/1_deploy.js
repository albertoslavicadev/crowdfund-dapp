const CROWDSALE = artifacts.require("CrowdFund");

module.exports = async function (deployer) {
    await deployer.deploy(CROWDSALE, "(add here the token you want to crowdsale)" );
    const crowdSale = await CROWDSALE.deployed();

};
