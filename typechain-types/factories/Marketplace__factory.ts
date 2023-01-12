/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Marketplace, MarketplaceInterface } from "../Marketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_platformFee",
        type: "uint96",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metaDataURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "forSale",
        type: "bool",
      },
    ],
    name: "MarketItemCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "MarketItemRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "MarketItemSold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MARKETPLACE_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "newPlatformFee",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "newPayoutAddress",
        type: "address",
      },
    ],
    name: "changeFeeAndPayoutAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "createMarketItem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "createMarketSale",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "idToMarketItem",
    outputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "forSale",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "deleted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payoutAddress",
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
    inputs: [],
    name: "platformFeeBasisPoint",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "removeFromSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ae738038062001ae7833981016040819052620000349162000290565b6001600255620000657f4e9617a5e2ee64b49ea666eb545a00a6f26df1c8ca519835eb93aac8d788949233620000e0565b620000917f4e9617a5e2ee64b49ea666eb545a00a6f26df1c8ca519835eb93aac8d788949280620000f0565b600580546001600160a01b0316600160a01b6001600160601b03841602179055620000b93390565b600580546001600160a01b0319166001600160a01b039290921691909117905550620002c2565b620000ec82826200013b565b5050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200015282826200017e60201b62000e6f1760201c565b60008281526001602090815260409091206200017991839062000ef36200021e821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000ec576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001da3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000235836001600160a01b0384166200023e565b90505b92915050565b6000818152600183016020526040812054620002875750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000238565b50600062000238565b600060208284031215620002a357600080fd5b81516001600160601b0381168114620002bb57600080fd5b9392505050565b61181580620002d26000396000f3fe6080604052600436106100fe5760003560e01c80635b8d02d711610095578063b2a4eea011610064578063b2a4eea0146102e4578063c23b139e14610318578063ca15c8731461032b578063d547741f1461034b578063e61a70c01461036b57600080fd5b80635b8d02d7146102575780639010d07c1461028f57806391d14854146102af578063a217fddf146102cf57600080fd5b806336568abe116100d157806336568abe146101b85780633738b55a146101d857806358eb2df5146101f85780635a9cd0331461021857600080fd5b806301ffc9a7146101035780631361a3b614610138578063248a9ca31461015a5780632f2ff15d14610198575b600080fd5b34801561010f57600080fd5b5061012361011e3660046113e8565b610429565b60405190151581526020015b60405180910390f35b34801561014457600080fd5b50610158610153366004611412565b610454565b005b34801561016657600080fd5b5061018a610175366004611412565b60009081526020819052604090206001015490565b60405190815260200161012f565b3480156101a457600080fd5b506101586101b3366004611440565b6105be565b3480156101c457600080fd5b506101586101d3366004611440565b6105e8565b3480156101e457600080fd5b506101586101f3366004611470565b610666565b34801561020457600080fd5b5061018a6102133660046114aa565b6106bb565b34801561022457600080fd5b5060055461023f90600160a01b90046001600160601b031681565b6040516001600160601b03909116815260200161012f565b34801561026357600080fd5b50600554610277906001600160a01b031681565b6040516001600160a01b03909116815260200161012f565b34801561029b57600080fd5b506102776102aa3660046114df565b610ab4565b3480156102bb57600080fd5b506101236102ca366004611440565b610ad3565b3480156102db57600080fd5b5061018a600081565b3480156102f057600080fd5b5061018a7f4e9617a5e2ee64b49ea666eb545a00a6f26df1c8ca519835eb93aac8d788949281565b610158610326366004611501565b610afc565b34801561033757600080fd5b5061018a610346366004611412565b610e33565b34801561035757600080fd5b50610158610366366004611440565b610e4a565b34801561037757600080fd5b506103dd610386366004611412565b6006602081905260009182526040909120805460018201546002830154600384015460048501546005860154959096015493956001600160a01b039384169592949184169316919060ff8082169161010090041688565b604080519889526001600160a01b0397881660208a015288019590955292851660608701529316608085015260a084019290925290151560c0830152151560e08201526101000161012f565b60006001600160e01b03198216635a05180f60e01b148061044e575061044e82610f08565b92915050565b60008181526006602052604090206003015481906001600160a01b031633146104db5760405162461bcd60e51b815260206004820152602e60248201527f4d61726b6574706c6163653a2053656e646572206973206e6f742073656c6c6560448201526d72206f662074686973206974656d60901b60648201526084015b60405180910390fd5b600082815260066020526040908190206001810154600382015460029092015492516323b872dd60e01b81523060048201526001600160a01b039283166024820152604481019390935216906323b872dd90606401600060405180830381600087803b15801561054a57600080fd5b505af115801561055e573d6000803e3d6000fd5b50505060008381526006602081905260409182902001805461ff001916610100179055517fd371e668750cb458fa9a55e99ade07ce913d63ab733d6e30fe303723e106cf9691506105b29084815260200190565b60405180910390a15050565b6000828152602081905260409020600101546105d981610f3d565b6105e38383610f4a565b505050565b6001600160a01b03811633146106585760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016104d2565b6106628282610f6c565b5050565b7f4e9617a5e2ee64b49ea666eb545a00a6f26df1c8ca519835eb93aac8d788949261069081610f3d565b506001600160a01b03166001600160601b03909116600160a01b026001600160a01b03191617600555565b6040516331a9108f60e11b8152600481018390526000908490849033906001600160a01b03841690636352211e90602401602060405180830381865afa158015610709573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072d919061152d565b6001600160a01b0316146107955760405162461bcd60e51b815260206004820152602960248201527f4d61726b6574706c6163653a2053656e64657220646f6573206e6f74206f776e60448201526820746865206974656d60b81b60648201526084016104d2565b600084116107f75760405162461bcd60e51b815260206004820152602960248201527f4d61726b6574706c6163653a205072696365206d757374206265206174206c6560448201526861737420312077656960b81b60648201526084016104d2565b610805600380546001019055565b600061081060035490565b9050604051806101000160405280828152602001886001600160a01b03168152602001878152602001336001600160a01b0316815260200160006001600160a01b0316815260200186815260200160011515815260200160001515815250600660008381526020019081526020016000206000820151816000015560208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506040820151816002015560608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060808201518160040160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060a0820151816005015560c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548160ff021916908315150217905550905050866001600160a01b03166323b872dd3330896040518463ffffffff1660e01b81526004016109b8939291906001600160a01b039384168152919092166020820152604081019190915260600190565b600060405180830381600087803b1580156109d257600080fd5b505af11580156109e6573d6000803e3d6000fd5b505060405163c87b56dd60e01b815260048101899052600092506001600160a01b038a16915063c87b56dd90602401600060405180830381865afa158015610a32573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a5a9190810190611584565b905086886001600160a01b0316837fd39071221960ab18bca34a3fb540f0da19655735105a97ecd89dc2482dc4f857843360008c6001604051610aa195949392919061165d565b60405180910390a4509695505050505050565b6000828152600160205260408120610acc9083610f8e565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610b04610f9a565b600081815260066020819052604090912001548190610100900460ff1615610b7d5760405162461bcd60e51b815260206004820152602660248201527f4d61726b6574706c6163653a204d61726b6574206974656d20646f65736e277460448201526508195e1a5cdd60d21b60648201526084016104d2565b60008281526006602081905260409091200154829060ff161515600114610bf75760405162461bcd60e51b815260206004820152602860248201527f4d61726b6574706c6163653a204d61726b6574206974656d206973206e6f7420604482015267666f722073616c6560c01b60648201526084016104d2565b60008381526006602052604090206005810154600290910154348214610c745760405162461bcd60e51b815260206004820152602c60248201527f4d61726b6574706c6163653a20506179204d61726b657420507269636520746f60448201526b08189d5e481d1a194813919560a21b60648201526084016104d2565b6040516323b872dd60e01b8152306004820152336024820152604481018290526001600160a01b038716906323b872dd90606401600060405180830381600087803b158015610cc257600080fd5b505af1158015610cd6573d6000803e3d6000fd5b5050600554349250600091506103e890610d0090600160a01b90046001600160601b0316846116b5565b610d0a91906116cc565b90506000610d1882846116ee565b6000898152600660205260408082206003015490519293506001600160a01b03169183156108fc0291849190818181858888f19350505050158015610d61573d6000803e3d6000fd5b506005546040516001600160a01b039091169083156108fc029084906000818181858888f19350505050158015610d9c573d6000803e3d6000fd5b506000888152600660208190526040909120600480820180546001600160a01b031916331790559101805460ff19169055610dda9080546001019055565b604080513381526020810187905285916001600160a01b038c16918b917f9789d8d6748e7f3e6c12fe6b244e2765b7e805f6b4b65a2474cad0ca8e788408910160405180910390a4505050505050506106626001600255565b600081815260016020526040812061044e90610ff1565b600082815260208190526040902060010154610e6581610f3d565b6105e38383610f6c565b610e798282610ad3565b610662576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610eaf3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610acc836001600160a01b038416610ffb565b60006001600160e01b03198216637965db0b60e01b148061044e57506301ffc9a760e01b6001600160e01b031983161461044e565b610f47813361104a565b50565b610f548282610e6f565b60008281526001602052604090206105e39082610ef3565b610f7682826110a3565b60008281526001602052604090206105e39082611108565b6000610acc838361111d565b6002805403610feb5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104d2565b60028055565b600061044e825490565b60008181526001830160205260408120546110425750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561044e565b50600061044e565b6110548282610ad3565b6106625761106181611147565b61106c836020611159565b60405160200161107d929190611701565b60408051601f198184030181529082905262461bcd60e51b82526104d291600401611776565b6110ad8282610ad3565b15610662576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610acc836001600160a01b0384166112f5565b600082600001828154811061113457611134611789565b9060005260206000200154905092915050565b606061044e6001600160a01b03831660145b606060006111688360026116b5565b61117390600261179f565b67ffffffffffffffff81111561118b5761118b61154a565b6040519080825280601f01601f1916602001820160405280156111b5576020820181803683370190505b509050600360fc1b816000815181106111d0576111d0611789565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106111ff576111ff611789565b60200101906001600160f81b031916908160001a90535060006112238460026116b5565b61122e90600161179f565b90505b60018111156112a6576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061126257611262611789565b1a60f81b82828151811061127857611278611789565b60200101906001600160f81b031916908160001a90535060049490941c9361129f816117b2565b9050611231565b508315610acc5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104d2565b600081815260018301602052604081205480156113de5760006113196001836116ee565b855490915060009061132d906001906116ee565b905081811461139257600086600001828154811061134d5761134d611789565b906000526020600020015490508087600001848154811061137057611370611789565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806113a3576113a36117c9565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061044e565b600091505061044e565b6000602082840312156113fa57600080fd5b81356001600160e01b031981168114610acc57600080fd5b60006020828403121561142457600080fd5b5035919050565b6001600160a01b0381168114610f4757600080fd5b6000806040838503121561145357600080fd5b8235915060208301356114658161142b565b809150509250929050565b6000806040838503121561148357600080fd5b82356001600160601b038116811461149a57600080fd5b915060208301356114658161142b565b6000806000606084860312156114bf57600080fd5b83356114ca8161142b565b95602085013595506040909401359392505050565b600080604083850312156114f257600080fd5b50508035926020909101359150565b6000806040838503121561151457600080fd5b823561151f8161142b565b946020939093013593505050565b60006020828403121561153f57600080fd5b8151610acc8161142b565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561157b578181015183820152602001611563565b50506000910152565b60006020828403121561159657600080fd5b815167ffffffffffffffff808211156115ae57600080fd5b818401915084601f8301126115c257600080fd5b8151818111156115d4576115d461154a565b604051601f8201601f19908116603f011681019083821181831017156115fc576115fc61154a565b8160405282815287602084870101111561161557600080fd5b611626836020830160208801611560565b979650505050505050565b60008151808452611649816020860160208601611560565b601f01601f19169290920160200192915050565b60a08152600061167060a0830188611631565b6001600160a01b0396871660208401529490951660408201526060810192909252151560809091015292915050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761044e5761044e61169f565b6000826116e957634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561044e5761044e61169f565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611739816017850160208801611560565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161176a816028840160208801611560565b01602801949350505050565b602081526000610acc6020830184611631565b634e487b7160e01b600052603260045260246000fd5b8082018082111561044e5761044e61169f565b6000816117c1576117c161169f565b506000190190565b634e487b7160e01b600052603160045260246000fdfea264697066735822122039c5bf57f5bb3de8afb389fabf1f05759c8d6026573727434d6ecb90bc8f3c4964736f6c63430008110033";

type MarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Marketplace__factory extends ContractFactory {
  constructor(...args: MarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Marketplace";
  }

  deploy(
    _platformFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Marketplace> {
    return super.deploy(_platformFee, overrides || {}) as Promise<Marketplace>;
  }
  getDeployTransaction(
    _platformFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_platformFee, overrides || {});
  }
  attach(address: string): Marketplace {
    return super.attach(address) as Marketplace;
  }
  connect(signer: Signer): Marketplace__factory {
    return super.connect(signer) as Marketplace__factory;
  }
  static readonly contractName: "Marketplace";
  public readonly contractName: "Marketplace";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceInterface {
    return new utils.Interface(_abi) as MarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Marketplace {
    return new Contract(address, _abi, signerOrProvider) as Marketplace;
  }
}
