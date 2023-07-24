/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CyberMavenRegistry,
  CyberMavenRegistryInterface,
} from "../CyberMavenRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InitializationFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "AccountCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "account",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accounts",
    outputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "walletAccount",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
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
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "initData",
        type: "bytes",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "init",
        type: "bytes",
      },
    ],
    name: "intiateWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "setImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userAccount",
    outputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "walletAccount",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userBalance",
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
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052601260809081527143796265724d6176656e526567697374727960701b60a0526000906200003390826200016b565b5060006001556003805460ff60a01b1916600160a01b1790553480156200005957600080fd5b5060405162000e5938038062000e598339810160408190526200007c9162000237565b600280546001600160a01b0319166001600160a01b0383161790556200009f3390565b600380546001600160a01b0319166001600160a01b03929092169190911790555062000269565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000f157607f821691505b6020821081036200011257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200016657600081815260208120601f850160051c81016020861015620001415750805b601f850160051c820191505b8181101562000162578281556001016200014d565b5050505b505050565b81516001600160401b03811115620001875762000187620000c6565b6200019f81620001988454620000dc565b8462000118565b602080601f831160018114620001d75760008415620001be5750858301515b600019600386901b1c1916600185901b17855562000162565b600085815260208120601f198616915b828110156200020857888601518255948401946001909101908401620001e7565b5085821015620002275787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200024a57600080fd5b81516001600160a01b03811681146200026257600080fd5b9392505050565b610be080620002796000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806361bc221a1161006657806361bc221a14610151578063a0edbcd51461015a578063d784d426146101c9578063da7323b3146101dc578063f2a40db8146101ef57600080fd5b80630103c92b146100a357806306fdde03146100d65780633f2c8034146100eb57806354fd4d50146101005780635e9bc53614610126575b600080fd5b6100c36100b1366004610830565b60056020526000908152604090205481565b6040519081526020015b60405180910390f35b6100de610229565b6040516100cd919061086f565b6100fe6100f93660046108a2565b6102b7565b005b60035461011490600160a01b900460ff1681565b60405160ff90911681526020016100cd565b610139610134366004610929565b610354565b6040516001600160a01b0390911681526020016100cd565b6100c360015481565b61019f610168366004610977565b60046020908152600092835260408084209091529082529020805460018201546002909201546001600160a01b0391821692911683565b604080516001600160a01b03948516815260208101939093529216918101919091526060016100cd565b6100fe6101d7366004610830565b610383565b6101396101ea3660046109b7565b610404565b61019f6101fd366004610aa5565b6006602052600090815260409020805460018201546002909201546001600160a01b0391821692911683565b6000805461023690610abe565b80601f016020809104026020016040519081016040528092919081815260200182805461026290610abe565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b505050505081565b604080514660208201526001600160a01b038616918101919091526060810184905260009060800160408051601f198184030181528282528051602080830191909120600254601f8801839004830286018301909452868552919450909261034b926001600160a01b03169146918a918a9187918b908b908190840183828082843760009201919091525061040492505050565b50505050505050565b6000806103648787878787610669565b8051602090910120905061037883826106d2565b979650505050505050565b6003546001600160a01b031633146103e25760405162461bcd60e51b815260206004820152601c60248201527f4163636f756e745265676973747279203a204e6f74206f776e6572210000000060448201526064015b60405180910390fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000806104148888888888610669565b9050600061042c8560001b83805190602001206106d2565b905061043a600086846106e6565b905083516000146104c5576000816001600160a01b03168560405161045f9190610af8565b6000604051808303816000865af19150503d806000811461049c576040519150601f19603f3d011682016040523d82523d6000602084013e6104a1565b606091505b50509050806104c357604051630337323560e31b815260040160405180910390fd5b505b600180549060006104d583610b14565b91905055506040518060600160405280886001600160a01b03168152602001878152602001826001600160a01b0316815250600460006105123390565b6001600160a01b03908116825260208083019390935260409182016000908120600180548352908552838220865181549085166001600160a01b031991821617825595870151818301559590930151600290950180549590921694909316939093179092559054906005906105843390565b6001600160a01b03908116825260208083019390935260409182016000908120949094558151606080820184528c83168083528286018d8152888516848701818152600180548b5260068a5299889020955186549088166001600160a01b031991821617875592519986019990995597516002909401805494861694909116939093179092558351958652918e16938501939093529083018b90528201526080810187905260a081018690527f07fba7bba1191da7ee1155dcfa0030701c9c9a9cc34a93b991fc6fd0c9268d8f9060c00160405180910390a198975050505050505050565b60408051602081018390529081018590526001600160a01b0384166060828101919091526080820184905290869060a00160408051601f19818403018152908290526106b89291602001610b3b565b604051602081830303815290604052905095945050505050565b60006106df8383306107ea565b9392505050565b6000834710156107385760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e636500000060448201526064016103d9565b81516000036107895760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f60448201526064016103d9565b8282516020840186f590506001600160a01b0381166106df5760405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f790000000000000060448201526064016103d9565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b80356001600160a01b038116811461082b57600080fd5b919050565b60006020828403121561084257600080fd5b6106df82610814565b60005b8381101561086657818101518382015260200161084e565b50506000910152565b602081526000825180602084015261088e81604085016020870161084b565b601f01601f19169190910160400192915050565b600080600080606085870312156108b857600080fd5b6108c185610814565b935060208501359250604085013567ffffffffffffffff808211156108e557600080fd5b818701915087601f8301126108f957600080fd5b81358181111561090857600080fd5b88602082850101111561091a57600080fd5b95989497505060200194505050565b600080600080600060a0868803121561094157600080fd5b61094a86610814565b94506020860135935061095f60408701610814565b94979396509394606081013594506080013592915050565b6000806040838503121561098a57600080fd5b61099383610814565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60008060008060008060c087890312156109d057600080fd5b6109d987610814565b9550602087013594506109ee60408801610814565b9350606087013592506080870135915060a087013567ffffffffffffffff80821115610a1957600080fd5b818901915089601f830112610a2d57600080fd5b813581811115610a3f57610a3f6109a1565b604051601f8201601f19908116603f01168101908382118183101715610a6757610a676109a1565b816040528281528c6020848701011115610a8057600080fd5b8260208601602083013760006020848301015280955050505050509295509295509295565b600060208284031215610ab757600080fd5b5035919050565b600181811c90821680610ad257607f821691505b602082108103610af257634e487b7160e01b600052602260045260246000fd5b50919050565b60008251610b0a81846020870161084b565b9190910192915050565b600060018201610b3457634e487b7160e01b600052601160045260246000fd5b5060010190565b733d60ad80600a3d3981f3363d3d373d3d3d363d7360601b8152606083901b6bffffffffffffffffffffffff191660148201526e5af43d82803e903d91602b57fd5bf360881b60288201528151600090610b9c81603785016020870161084b565b91909101603701939250505056fea26469706673582212205d664ea01bfd1dd7768bfe1a5e520a067174c474f98a06fb865894897bfee11a64736f6c63430008110033";

type CyberMavenRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CyberMavenRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CyberMavenRegistry__factory extends ContractFactory {
  constructor(...args: CyberMavenRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CyberMavenRegistry";
  }

  deploy(
    contractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CyberMavenRegistry> {
    return super.deploy(
      contractAddr,
      overrides || {}
    ) as Promise<CyberMavenRegistry>;
  }
  getDeployTransaction(
    contractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(contractAddr, overrides || {});
  }
  attach(address: string): CyberMavenRegistry {
    return super.attach(address) as CyberMavenRegistry;
  }
  connect(signer: Signer): CyberMavenRegistry__factory {
    return super.connect(signer) as CyberMavenRegistry__factory;
  }
  static readonly contractName: "CyberMavenRegistry";
  public readonly contractName: "CyberMavenRegistry";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CyberMavenRegistryInterface {
    return new utils.Interface(_abi) as CyberMavenRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CyberMavenRegistry {
    return new Contract(address, _abi, signerOrProvider) as CyberMavenRegistry;
  }
}
