import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { Spawn, Spawn__factory } from "../../types";
import { parseEther } from "../../utils/useful";

export async function deploySpawn(
    mintFee: BigNumber,
    multiple = BigNumber.from(1),
): Promise<Spawn> {

    const spawnFactory: Spawn__factory = await ethers.getContractFactory("Spawn");
    const spawn: Spawn = await spawnFactory.deploy(
        mintFee,
        multiple
    )
    await spawn.deployed
    console.log(`spawn was deployed, address is : ${spawn.address}`)
    return spawn
}