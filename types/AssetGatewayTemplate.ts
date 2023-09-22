/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface AssetGatewayTemplateInterface extends utils.Interface {
  contractName: "AssetGatewayTemplate";
  functions: {
    "wrapNativeTokenAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "wrapNativeTokenAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "wrapNativeTokenAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AssetGatewayTemplate extends BaseContract {
  contractName: "AssetGatewayTemplate";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssetGatewayTemplateInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    wrapNativeTokenAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  wrapNativeTokenAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    wrapNativeTokenAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    wrapNativeTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    wrapNativeTokenAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
