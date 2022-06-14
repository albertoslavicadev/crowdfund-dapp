const CROWDSALE = artifacts.require("CrowdFund");

module.exports = async function (deployer) {
    await deployer.deploy(CROWDSALE, "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7" );
    const crowdSale = await CROWDSALE.deployed();

};
