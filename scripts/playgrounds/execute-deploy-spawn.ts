import { BigNumber } from "ethers"
import { parseEther } from "../../utils/useful"
import { deploySpawn } from "../deployments/deploy-spawn"

export async function main() {
    const defaultMintFee: BigNumber = parseEther(1)
    const spawn = await deploySpawn(defaultMintFee)

}

main()
    .then(() => { })
    .catch((err) => {
        console.log(err)
    })