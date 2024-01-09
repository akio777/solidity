import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { TransactionReceipt } from "web3"
import { getSigners } from "../utils/signers"
import { getBalance, parseEther } from "../utils/useful"
import { deploySpawn } from "../scripts/deployments/deploy-spawn"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { ERC20, IERC20Metadata, IERC20Modify, Spawn } from "../types"
import chai, { expect } from 'chai';
import { ISpawn } from "../types/ISpawn"
import { ethers } from "hardhat"
import { solidity } from 'ethereum-waffle';
import { IERC20 } from "../typechain-types"

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
    let tempToken: string
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
        // console.log("DEPLOYER : ", await getBalance(deployer.address))
    })
    it('Deployer should have 21M "SPAWN" TOKEN', async () => {
        const spawnToken: IERC20Metadata = await ethers.getContractAt("IERC20Metadata", await iSpawn.token())
        const totalSupply = await spawnToken.totalSupply()
        expect(totalSupply).to.be.eql(BigNumber.from("21000000000000000000000000"))
        const deployerSpawnBalance = await spawnToken.balanceOf(deployer.address)
        expect(deployerSpawnBalance).to.be.eql(BigNumber.from("21000000000000000000000000"))
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
            tempToken = res.events![res.events?.length! - 1].args![1]
            const after = await getBalance(signers[1].address)
            expect(before).to.be.gt(after)
        })
        it('totalMint and mintedToken should update and exists, MUST valid', async () => {
            const currentTotalMint = await spawn.totalMint()
            const currentMintedToken = await iSpawn.mintedToken(currentTotalMint)
            expect(currentMintedToken).to.be.gt(BigNumber.from(1))
            expect(currentMintedToken).to.eq(tempToken)
        })
    })


})
