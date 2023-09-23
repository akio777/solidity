import { ethers } from "hardhat";
import { ERC20Mintable, ERC20Mintable__factory } from "../../types";

export async function deployERC20(
    name: string,
    symbol: string,
): Promise<ERC20Mintable> {

    let TOKEN_FACTORY: ERC20Mintable__factory = await ethers.getContractFactory("ERC20Mintable")
    let TOKEN: ERC20Mintable = await TOKEN_FACTORY.deploy(name, symbol)
    await TOKEN.deployed()
    console.log(`token ${symbol} was deployed, address is : ${TOKEN.address}`)
    return TOKEN
}