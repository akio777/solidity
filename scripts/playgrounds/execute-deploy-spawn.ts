import { BigNumber } from "ethers"
import { getSigners } from "../../utils/signers"
import { getBalance, parseEther } from "../../utils/useful"
import { deploySpawn } from "../deployments/deploy-spawn"

export async function main() {
    const signers = await getSigners()
    const deployer = signers[0]
    // console.log(await getBalance(deployer.address))
    const defaultMintFee: BigNumber = parseEther(1)
    const spawn = await deploySpawn(defaultMintFee, BigNumber.from(33))

}

main()
    .then(() => { })
    .catch((err) => {
        console.log(err)
    })