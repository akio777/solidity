/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IWrapERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWrapERC20__factory>;
    getContractFactory(
      name: "IWrapNative",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWrapNative__factory>;
    getContractFactory(
      name: "ERC20Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mintable__factory>;
    getContractFactory(
      name: "IERC20Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Mintable__factory>;
    getContractFactory(
      name: "WBNB",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WBNB__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;
    getContractFactory(
      name: "AssetGatewayTemplate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetGatewayTemplate__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IWrapERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWrapERC20>;
    getContractAt(
      name: "IWrapNative",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWrapNative>;
    getContractAt(
      name: "ERC20Mintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Mintable>;
    getContractAt(
      name: "IERC20Mintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Mintable>;
    getContractAt(
      name: "WBNB",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WBNB>;
    getContractAt(
      name: "Lock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;
    getContractAt(
      name: "AssetGatewayTemplate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetGatewayTemplate>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
