/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AssetGatewayTemplate,
  AssetGatewayTemplateInterface,
} from "../AssetGatewayTemplate";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wrapNativeTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "wrapNativeTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161012738038061012783398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6095806100926000396000f3fe608060405260043610601d5760003560e01c806361f3403514602557005b36602357005b005b348015603057600080fd5b506000546043906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f3fea264697066735822122040a3acd158bbc3baaee8b5be2ce7fbae0dc0d399e2f756f3da7adb129b518ec064736f6c634300080f0033";

type AssetGatewayTemplateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetGatewayTemplateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetGatewayTemplate__factory extends ContractFactory {
  constructor(...args: AssetGatewayTemplateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetGatewayTemplate";
  }

  deploy(
    _wrapNativeTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AssetGatewayTemplate> {
    return super.deploy(
      _wrapNativeTokenAddress,
      overrides || {}
    ) as Promise<AssetGatewayTemplate>;
  }
  getDeployTransaction(
    _wrapNativeTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_wrapNativeTokenAddress, overrides || {});
  }
  attach(address: string): AssetGatewayTemplate {
    return super.attach(address) as AssetGatewayTemplate;
  }
  connect(signer: Signer): AssetGatewayTemplate__factory {
    return super.connect(signer) as AssetGatewayTemplate__factory;
  }
  static readonly contractName: "AssetGatewayTemplate";
  public readonly contractName: "AssetGatewayTemplate";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetGatewayTemplateInterface {
    return new utils.Interface(_abi) as AssetGatewayTemplateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetGatewayTemplate {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetGatewayTemplate;
  }
}
