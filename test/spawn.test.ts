import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { TransactionReceipt } from "web3"
import { getSigners } from "../utils/signers"
import { getBalance, parseEther } from "../utils/useful"
import { deploySpawn } from "../scripts/deployments/deploy-spawn"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { Spawn } from "../types"
import chai, { expect } from 'chai';
import { ISpawn } from "../types/ISpawn"
import { ethers } from "hardhat"
import { solidity } from 'ethereum-waffle';

chai.use(solidity);

describe('Testing ERC20Mintable', () => {
    let signers: SignerWithAddress[];
    let deployer: SignerWithAddress;
    let spawn: Spawn;
    let iSpawn: ISpawn;
    let tokenDecimals: number
    let defaultAmount: number
    let tx: ContractTransaction
    let res: ContractReceipt
    const defaultMintFee: BigNumber = parseEther(1)

    before(async () => {
        spawn = await deploySpawn(defaultMintFee)
        iSpawn = await ethers.getContractAt("ISpawn", spawn.address);
        signers = await getSigners()
        deployer = signers[0]
        defaultAmount = 1_000_000
    });

    it('mint fee should > 0 and equal default mintFee', async () => {
        const mintFee = await spawn.mintFee()
        expect(mintFee).to.be.eql(defaultMintFee)
        console.log("DEPLOYER : ", await getBalance(deployer.address))
    })
    context('situation : user1 mint token 1 M', async () => {
        it('user1 balance should decrease', async () => {
            const before = await getBalance(signers[1].address)
            tx = await spawn.connect(signers[1]).spawnToken(
                "LNWZA",
                "LNWZA",
                parseEther(1_000_000),
                18,
                { value: defaultMintFee }
            )
            res = await tx.wait(1)
            const after = await getBalance(signers[1].address)
            expect(before).to.be.gt(after)
        })
        it('totalMint and mintedToken should update and exists', async () => {
            const currentTotalMint = await spawn.totalMint()
            console.log(`currentTotalMint : `, currentTotalMint)
            const currentMintedToken = await iSpawn.mintedToken(currentTotalMint)
            console.log(`currentMintedToken : ${currentMintedToken}`)
        console.log("DEPLOYER : ", await getBalance(deployer.address))

        })
    })

})
