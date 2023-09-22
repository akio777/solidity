import { task, HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-deploy';
import 'hardhat-gas-reporter';
import 'hardhat-deploy-ethers';
import 'hardhat-contract-sizer';

import 'solidity-coverage';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, './.env') });

task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  console.log(args);

  for (const account of accounts) {
    console.log(account.address);
  }
});

const optimizedForDeployment = (runs = 1000) => ({
  version: '0.8.15',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
});



const config: HardhatUserConfig = {
  // solidity: "0.8.15",
  solidity: {
    compilers: [
      { version: '0.8.15' }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
    overrides: {
      'contracts/src/...': optimizedForDeployment(),
    }
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: process.env.MNEMONIC
      },
      allowUnlimitedContractSize: true,
      gas: 33_333_333,
      chainId: 1337
    }
  }
};



export default config;

