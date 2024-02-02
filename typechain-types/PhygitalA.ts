/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface PhygitalAInterface extends utils.Interface {
  contractName: "PhygitalA";
  functions: {
    "accessMasterAddress()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "burnAsset(uint256)": FunctionFragment;
    "calculateRequiredPrice(uint256)": FunctionFragment;
    "delegateMint(address,uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "maxMint()": FunctionFragment;
    "maxSupply()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "nftPrice()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "phygitalAssets(uint256)": FunctionFragment;
    "phygitalIdCheck(bytes)": FunctionFragment;
    "registerAssetId(uint256,bytes)": FunctionFragment;
    "rentables(uint256)": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setItemStatus(uint256,uint8)": FunctionFragment;
    "setMaxMint(uint16)": FunctionFragment;
    "setNFTPrice(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "tradeHub()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "userBalance(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accessMasterAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "burnAsset",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRequiredPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateMint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "maxMint", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxSupply", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nftPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "phygitalAssets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "phygitalIdCheck",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAssetId",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rentables",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setItemStatus",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxMint",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setNFTPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tradeHub", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "userBalance", values: [string]): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "accessMasterAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateRequiredPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "phygitalAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "phygitalIdCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAssetId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rentables", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setItemStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMaxMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setNFTPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tradeHub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "AssetRegistered(address,uint256,bytes,uint256)": EventFragment;
    "ConsecutiveTransfer(uint256,uint256,address,address)": EventFragment;
    "FundTransferred(address,address,uint256)": EventFragment;
    "PhygitalAAssetCreated(uint256,uint256,address)": EventFragment;
    "PhygitalAAssetDestroyed(uint256,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "UpdateAssetMaxMint(address,uint256)": EventFragment;
    "UpdateAssetPrice(address,uint256)": EventFragment;
    "UpdateAssetStatus(address,uint256,uint8,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConsecutiveTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PhygitalAAssetCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PhygitalAAssetDestroyed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateAssetMaxMint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateAssetPrice"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateAssetStatus"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; approved: string; tokenId: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  { owner: string; operator: string; approved: boolean }
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export type AssetRegisteredEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  { user: string; tokenId: BigNumber; uuid: string; time: BigNumber }
>;

export type AssetRegisteredEventFilter = TypedEventFilter<AssetRegisteredEvent>;

export type ConsecutiveTransferEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  { fromTokenId: BigNumber; toTokenId: BigNumber; from: string; to: string }
>;

export type ConsecutiveTransferEventFilter =
  TypedEventFilter<ConsecutiveTransferEvent>;

export type FundTransferredEvent = TypedEvent<
  [string, string, BigNumber],
  { sender: string; reciepient: string; amount: BigNumber }
>;

export type FundTransferredEventFilter = TypedEventFilter<FundTransferredEvent>;

export type PhygitalAAssetCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  { currentIndex: BigNumber; quantity: BigNumber; creator: string }
>;

export type PhygitalAAssetCreatedEventFilter =
  TypedEventFilter<PhygitalAAssetCreatedEvent>;

export type PhygitalAAssetDestroyedEvent = TypedEvent<
  [BigNumber, string],
  { tokenId: BigNumber; ownerOrApproved: string }
>;

export type PhygitalAAssetDestroyedEventFilter =
  TypedEventFilter<PhygitalAAssetDestroyedEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; tokenId: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export type UpdateAssetMaxMintEvent = TypedEvent<
  [string, BigNumber],
  { user: string; updatedMaxMint: BigNumber }
>;

export type UpdateAssetMaxMintEventFilter =
  TypedEventFilter<UpdateAssetMaxMintEvent>;

export type UpdateAssetPriceEvent = TypedEvent<
  [string, BigNumber],
  { user: string; updatedPrice: BigNumber }
>;

export type UpdateAssetPriceEventFilter =
  TypedEventFilter<UpdateAssetPriceEvent>;

export type UpdateAssetStatusEvent = TypedEvent<
  [string, BigNumber, number, BigNumber],
  { user: string; tokenId: BigNumber; assetStatus: number; time: BigNumber }
>;

export type UpdateAssetStatusEventFilter =
  TypedEventFilter<UpdateAssetStatusEvent>;

export interface PhygitalA extends BaseContract {
  contractName: "PhygitalA";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PhygitalAInterface;

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
    accessMasterAddress(overrides?: CallOverrides): Promise<[string]>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnAsset(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateRequiredPrice(
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    delegateMint(
      reciever: string,
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxMint(overrides?: CallOverrides): Promise<[number]>;

    maxSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nftPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    phygitalAssets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, number] & {
        registerTime: BigNumber;
        phygitalId: string;
        status: number;
      }
    >;

    phygitalIdCheck(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    registerAssetId(
      tokenId: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber] & {
        isRentable: boolean;
        user: string;
        expires: BigNumber;
        hourlyRate: BigNumber;
      }
    >;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setItemStatus(
      tokenId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxMint(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNFTPrice(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    tradeHub(overrides?: CallOverrides): Promise<[string]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userBalance(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    version(overrides?: CallOverrides): Promise<[number]>;
  };

  accessMasterAddress(overrides?: CallOverrides): Promise<string>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnAsset(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateRequiredPrice(
    quantity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  delegateMint(
    reciever: string,
    quantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxMint(overrides?: CallOverrides): Promise<number>;

  maxSupply(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    quantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nftPrice(overrides?: CallOverrides): Promise<BigNumber>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  phygitalAssets(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, number] & {
      registerTime: BigNumber;
      phygitalId: string;
      status: number;
    }
  >;

  phygitalIdCheck(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  registerAssetId(
    tokenId: BigNumberish,
    _phygitalID: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rentables(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber, BigNumber] & {
      isRentable: boolean;
      user: string;
      expires: BigNumber;
      hourlyRate: BigNumber;
    }
  >;

  royaltyInfo(
    _tokenId: BigNumberish,
    _salePrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setItemStatus(
    tokenId: BigNumberish,
    _status: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxMint(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNFTPrice(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  tradeHub(overrides?: CallOverrides): Promise<string>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  version(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    accessMasterAddress(overrides?: CallOverrides): Promise<string>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    burnAsset(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    calculateRequiredPrice(
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegateMint(
      reciever: string,
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxMint(overrides?: CallOverrides): Promise<number>;

    maxSupply(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    name(overrides?: CallOverrides): Promise<string>;

    nftPrice(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    phygitalAssets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, number] & {
        registerTime: BigNumber;
        phygitalId: string;
        status: number;
      }
    >;

    phygitalIdCheck(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerAssetId(
      tokenId: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber] & {
        isRentable: boolean;
        user: string;
        expires: BigNumber;
        hourlyRate: BigNumber;
      }
    >;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setItemStatus(
      tokenId: BigNumberish,
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxMint(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setNFTPrice(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    tradeHub(overrides?: CallOverrides): Promise<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    userBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "AssetRegistered(address,uint256,bytes,uint256)"(
      user?: null,
      tokenId?: null,
      uuid?: null,
      time?: null
    ): AssetRegisteredEventFilter;
    AssetRegistered(
      user?: null,
      tokenId?: null,
      uuid?: null,
      time?: null
    ): AssetRegisteredEventFilter;

    "ConsecutiveTransfer(uint256,uint256,address,address)"(
      fromTokenId?: BigNumberish | null,
      toTokenId?: null,
      from?: string | null,
      to?: string | null
    ): ConsecutiveTransferEventFilter;
    ConsecutiveTransfer(
      fromTokenId?: BigNumberish | null,
      toTokenId?: null,
      from?: string | null,
      to?: string | null
    ): ConsecutiveTransferEventFilter;

    "FundTransferred(address,address,uint256)"(
      sender?: null,
      reciepient?: null,
      amount?: null
    ): FundTransferredEventFilter;
    FundTransferred(
      sender?: null,
      reciepient?: null,
      amount?: null
    ): FundTransferredEventFilter;

    "PhygitalAAssetCreated(uint256,uint256,address)"(
      currentIndex?: null,
      quantity?: null,
      creator?: string | null
    ): PhygitalAAssetCreatedEventFilter;
    PhygitalAAssetCreated(
      currentIndex?: null,
      quantity?: null,
      creator?: string | null
    ): PhygitalAAssetCreatedEventFilter;

    "PhygitalAAssetDestroyed(uint256,address)"(
      tokenId?: BigNumberish | null,
      ownerOrApproved?: null
    ): PhygitalAAssetDestroyedEventFilter;
    PhygitalAAssetDestroyed(
      tokenId?: BigNumberish | null,
      ownerOrApproved?: null
    ): PhygitalAAssetDestroyedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;

    "UpdateAssetMaxMint(address,uint256)"(
      user?: null,
      updatedMaxMint?: null
    ): UpdateAssetMaxMintEventFilter;
    UpdateAssetMaxMint(
      user?: null,
      updatedMaxMint?: null
    ): UpdateAssetMaxMintEventFilter;

    "UpdateAssetPrice(address,uint256)"(
      user?: null,
      updatedPrice?: null
    ): UpdateAssetPriceEventFilter;
    UpdateAssetPrice(
      user?: null,
      updatedPrice?: null
    ): UpdateAssetPriceEventFilter;

    "UpdateAssetStatus(address,uint256,uint8,uint256)"(
      user?: null,
      tokenId?: null,
      assetStatus?: null,
      time?: null
    ): UpdateAssetStatusEventFilter;
    UpdateAssetStatus(
      user?: null,
      tokenId?: null,
      assetStatus?: null,
      time?: null
    ): UpdateAssetStatusEventFilter;
  };

  estimateGas: {
    accessMasterAddress(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnAsset(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateRequiredPrice(
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegateMint(
      reciever: string,
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxMint(overrides?: CallOverrides): Promise<BigNumber>;

    maxSupply(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nftPrice(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phygitalAssets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phygitalIdCheck(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerAssetId(
      tokenId: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setItemStatus(
      tokenId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxMint(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNFTPrice(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    tradeHub(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accessMasterAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnAsset(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateRequiredPrice(
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegateMint(
      reciever: string,
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    phygitalAssets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    phygitalIdCheck(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerAssetId(
      tokenId: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setItemStatus(
      tokenId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxMint(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNFTPrice(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tradeHub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
