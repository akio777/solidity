import { ethers } from 'hardhat';
import chai, { expect } from 'chai';
import { ERC20Mintable } from '../types';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { deployERC20 } from '../scripts/deployments/deploy-erc20-mintable';
import { getSigners } from '../utils/signers';
import { parseEther } from '../utils/useful';
import { BigNumber } from 'ethers';
import { solidity } from 'ethereum-waffle';

chai.use(solidity);


describe('Testing ERC20Mintable', () => {
    let token: ERC20Mintable
    let signers: SignerWithAddress[];
    let deployer: SignerWithAddress;
    let tokenDecimals: number
    let defaultAmount: number


    before(async () => {
        token = await deployERC20("testing token", "TOKEN")
        signers = await getSigners()
        deployer = signers[0]
        tokenDecimals = await token.decimals()
        defaultAmount = 1_000_000
    });

    it('Owner can token', async () => {
        let balanceBefore = await token.balanceOf(deployer.address)
        let mintAmount = parseEther(defaultAmount, tokenDecimals)
        let tx = token.connect(deployer).mint(deployer.address, mintAmount)
        await expect(tx).to.be.not.reverted
        let balanceAfter = await token.balanceOf(deployer.address)
        expect(balanceAfter).to.be.gt(balanceBefore)
        expect(balanceAfter).to.be.eq(mintAmount)
    })
    it('Not owner must cant mint token', async () => {
        let mintAmount = parseEther(defaultAmount, tokenDecimals)
        let tx = token.connect(signers[1]).mint(signers[1].address, mintAmount)
        await expect(tx).to.be.revertedWith("Ownable: caller is not the owner")
    })
})

