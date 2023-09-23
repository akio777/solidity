import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";

export async function getSigners(): Promise<SignerWithAddress[]> {
    return await ethers.getSigners()
}