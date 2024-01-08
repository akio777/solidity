import { task, HardhatUserConfig } from "hardhat/config";
import 'hardhat-deploy';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';

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
  version: '0.8.22',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
});




const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: '0.8.15' },
      { version: '0.8.22' }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
    overrides: {
      'contracts/src/spawn/Spawn.sol': optimizedForDeployment(),
      'contracts/src/spawn/ERC20.sol': optimizedForDeployment(),
    }
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: process.env.MNEMONIC
      },
      allowUnlimitedContractSize: true,
      blockGasLimit: 1_000_000_000,
      gas: 25_000_000,
      chainId: 1337
    }
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },

  gasReporter: {
    enabled: false
  },

  mocha: {
    timeout: 0,
  },

  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
};



export default config;

