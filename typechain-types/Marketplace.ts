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

export interface MarketplaceInterface extends utils.Interface {
  contractName: "Marketplace";
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "MARKETPLACE_ADMIN_ROLE()": FunctionFragment;
    "acceptBidAndEndAuction(uint256)": FunctionFragment;
    "bids(uint256,address)": FunctionFragment;
    "buyItem(uint256)": FunctionFragment;
    "concludeAuction(uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "highestBidder(uint256)": FunctionFragment;
    "idToMarketItem(uint256)": FunctionFragment;
    "listItem(address,uint256,uint256,bool,uint256)": FunctionFragment;
    "marketplacePayoutAddress()": FunctionFragment;
    "placeBid(uint256)": FunctionFragment;
    "platformFeeBasisPoint()": FunctionFragment;
    "removeItem(uint256)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "startAuction(address,uint256,uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateAuctionTime(uint256,uint256)": FunctionFragment;
    "updatePrice(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MARKETPLACE_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptBidAndEndAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bids",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "buyItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "concludeAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "highestBidder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "idToMarketItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listItem",
    values: [string, BigNumberish, BigNumberish, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "marketplacePayoutAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "placeBid",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "platformFeeBasisPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startAuction",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAuctionTime",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePrice",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MARKETPLACE_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptBidAndEndAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bids", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "concludeAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "highestBidder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "idToMarketItem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketplacePayoutAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "placeBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platformFeeBasisPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removeItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAuctionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePrice",
    data: BytesLike
  ): Result;

  events: {
    "AuctionEnded(uint256,address,address)": EventFragment;
    "AuctionStarted(uint256,uint256,uint256,address)": EventFragment;
    "BidPlaced(uint256,uint256,address)": EventFragment;
    "ItemRemoved(uint256,address,uint256,string,address)": EventFragment;
    "ItemSold(uint256,address,uint256,string,address,address,uint256)": EventFragment;
    "PriceUpdated(uint256,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "SaleStarted(uint256,address,uint256,string,address,uint256)": EventFragment;
    "TimeUpdated(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BidPlaced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemSold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TimeUpdated"): EventFragment;
}

export type AuctionEndedEvent = TypedEvent<
  [BigNumber, string, string],
  { auctionId: BigNumber; auctioneer: string; highestBidder: string }
>;

export type AuctionEndedEventFilter = TypedEventFilter<AuctionEndedEvent>;

export type AuctionStartedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string],
  {
    auctionId: BigNumber;
    basePrice: BigNumber;
    time: BigNumber;
    auctioneer: string;
  }
>;

export type AuctionStartedEventFilter = TypedEventFilter<AuctionStartedEvent>;

export type BidPlacedEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  { itemId: BigNumber; amount: BigNumber; bidder: string }
>;

export type BidPlacedEventFilter = TypedEventFilter<BidPlacedEvent>;

export type ItemRemovedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string],
  {
    itemId: BigNumber;
    nftContract: string;
    tokenId: BigNumber;
    metaDataURI: string;
    seller: string;
  }
>;

export type ItemRemovedEventFilter = TypedEventFilter<ItemRemovedEvent>;

export type ItemSoldEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string, string, BigNumber],
  {
    itemId: BigNumber;
    nftContract: string;
    tokenId: BigNumber;
    metadataURI: string;
    seller: string;
    buyer: string;
    price: BigNumber;
  }
>;

export type ItemSoldEventFilter = TypedEventFilter<ItemSoldEvent>;

export type PriceUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { itemId: BigNumber; updatedPrice: BigNumber }
>;

export type PriceUpdatedEventFilter = TypedEventFilter<PriceUpdatedEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export type SaleStartedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string, BigNumber],
  {
    itemId: BigNumber;
    nftContract: string;
    tokenId: BigNumber;
    metaDataURI: string;
    seller: string;
    price: BigNumber;
  }
>;

export type SaleStartedEventFilter = TypedEventFilter<SaleStartedEvent>;

export type TimeUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { itemId: BigNumber; updatedTime: BigNumber }
>;

export type TimeUpdatedEventFilter = TypedEventFilter<TimeUpdatedEvent>;

export interface Marketplace extends BaseContract {
  contractName: "Marketplace";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

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
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MARKETPLACE_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    acceptBidAndEndAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bids(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    buyItem(
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    concludeAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    highestBidder(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        number
      ] & {
        itemId: BigNumber;
        nftContract: string;
        tokenId: BigNumber;
        seller: string;
        price: BigNumber;
        auctioneEndTime: BigNumber;
        highestBid: BigNumber;
        status: number;
      }
    >;

    listItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      forAuction: boolean,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    marketplacePayoutAddress(overrides?: CallOverrides): Promise<[string]>;

    placeBid(
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    platformFeeBasisPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeItem(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    startAuction(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateAuctionTime(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePrice(
      itemId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MARKETPLACE_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  acceptBidAndEndAuction(
    itemId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bids(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  buyItem(
    itemId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  concludeAuction(
    itemId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  highestBidder(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  idToMarketItem(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      number
    ] & {
      itemId: BigNumber;
      nftContract: string;
      tokenId: BigNumber;
      seller: string;
      price: BigNumber;
      auctioneEndTime: BigNumber;
      highestBid: BigNumber;
      status: number;
    }
  >;

  listItem(
    nftContract: string,
    tokenId: BigNumberish,
    price: BigNumberish,
    forAuction: boolean,
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  marketplacePayoutAddress(overrides?: CallOverrides): Promise<string>;

  placeBid(
    itemId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  platformFeeBasisPoint(overrides?: CallOverrides): Promise<BigNumber>;

  removeItem(
    itemId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  royaltyInfo(
    _tokenId: BigNumberish,
    _salePrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  startAuction(
    nftContract: string,
    tokenId: BigNumberish,
    price: BigNumberish,
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateAuctionTime(
    itemId: BigNumberish,
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePrice(
    itemId: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    MARKETPLACE_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    acceptBidAndEndAuction(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bids(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyItem(itemId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    concludeAuction(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    highestBidder(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        number
      ] & {
        itemId: BigNumber;
        nftContract: string;
        tokenId: BigNumber;
        seller: string;
        price: BigNumber;
        auctioneEndTime: BigNumber;
        highestBid: BigNumber;
        status: number;
      }
    >;

    listItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      forAuction: boolean,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketplacePayoutAddress(overrides?: CallOverrides): Promise<string>;

    placeBid(itemId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    platformFeeBasisPoint(overrides?: CallOverrides): Promise<BigNumber>;

    removeItem(itemId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    startAuction(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateAuctionTime(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updatePrice(
      itemId: BigNumberish,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "AuctionEnded(uint256,address,address)"(
      auctionId?: null,
      auctioneer?: string | null,
      highestBidder?: string | null
    ): AuctionEndedEventFilter;
    AuctionEnded(
      auctionId?: null,
      auctioneer?: string | null,
      highestBidder?: string | null
    ): AuctionEndedEventFilter;

    "AuctionStarted(uint256,uint256,uint256,address)"(
      auctionId?: null,
      basePrice?: null,
      time?: null,
      auctioneer?: string | null
    ): AuctionStartedEventFilter;
    AuctionStarted(
      auctionId?: null,
      basePrice?: null,
      time?: null,
      auctioneer?: string | null
    ): AuctionStartedEventFilter;

    "BidPlaced(uint256,uint256,address)"(
      itemId?: null,
      amount?: null,
      bidder?: string | null
    ): BidPlacedEventFilter;
    BidPlaced(
      itemId?: null,
      amount?: null,
      bidder?: string | null
    ): BidPlacedEventFilter;

    "ItemRemoved(uint256,address,uint256,string,address)"(
      itemId?: null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      seller?: null
    ): ItemRemovedEventFilter;
    ItemRemoved(
      itemId?: null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      seller?: null
    ): ItemRemovedEventFilter;

    "ItemSold(uint256,address,uint256,string,address,address,uint256)"(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metadataURI?: null,
      seller?: null,
      buyer?: null,
      price?: null
    ): ItemSoldEventFilter;
    ItemSold(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metadataURI?: null,
      seller?: null,
      buyer?: null,
      price?: null
    ): ItemSoldEventFilter;

    "PriceUpdated(uint256,uint256)"(
      itemId?: null,
      updatedPrice?: null
    ): PriceUpdatedEventFilter;
    PriceUpdated(itemId?: null, updatedPrice?: null): PriceUpdatedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "SaleStarted(uint256,address,uint256,string,address,uint256)"(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      seller?: null,
      price?: null
    ): SaleStartedEventFilter;
    SaleStarted(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      seller?: null,
      price?: null
    ): SaleStartedEventFilter;

    "TimeUpdated(uint256,uint256)"(
      itemId?: null,
      updatedTime?: null
    ): TimeUpdatedEventFilter;
    TimeUpdated(itemId?: null, updatedTime?: null): TimeUpdatedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MARKETPLACE_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    acceptBidAndEndAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bids(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyItem(
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    concludeAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    highestBidder(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      forAuction: boolean,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    marketplacePayoutAddress(overrides?: CallOverrides): Promise<BigNumber>;

    placeBid(
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    platformFeeBasisPoint(overrides?: CallOverrides): Promise<BigNumber>;

    removeItem(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startAuction(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateAuctionTime(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePrice(
      itemId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MARKETPLACE_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acceptBidAndEndAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bids(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyItem(
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    concludeAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    highestBidder(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      forAuction: boolean,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    marketplacePayoutAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    placeBid(
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    platformFeeBasisPoint(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeItem(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startAuction(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateAuctionTime(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePrice(
      itemId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
