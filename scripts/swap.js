const { ethers } = require("hardhat");

async function main() {
    const Swap = await ethers.getContractFactory("Swap");

    const swap = Swap.attach(process.env.SWAP_ADDRESS);

    const overrides = {
        value: '10000000000',
    };

    await swap.swap('0x79ADC6A4b41C5dc4E429094B387f133cbE89f174', '10000000000', '69690060800000', [
        '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
        '0x55111f7CB96f554746b6aE13270905792C242E7B'
    ], '0x05262B75ae78c26E6008608681B6bd1bF391DF5B', 9999999999, overrides);
}

main();
