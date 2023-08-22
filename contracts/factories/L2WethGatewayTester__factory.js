'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.L2WethGatewayTester__factory = void 0
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require('ethers')
const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_l2ToL1Id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalInitiated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Weth',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Weth',
        type: 'address',
      },
    ],
    name: 'setL2WethAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'triggerTxToL1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]
const _bytecode =
  '0x608060405234801561001057600080fd5b50611987806100206000396000f3fe6080604052600436106100c15760003560e01c806395fcea781161006f57806395fcea781461031d578063a0c76a9614610332578063a7e28d481461040b578063b8f41ee41461043e578063d2ce7d6514610453578063f887ea40146104ed578063f8c8765e14610502576100c8565b8063015234ab146100cd578063146bf4b1146100f45780631a4f733514610125578063247b27681461015a5780632db09c1c1461016f5780632e567b36146101845780637b3a3c8b1461021a576100c8565b366100c857005b600080fd5b3480156100d957600080fd5b506100e261054d565b60408051918252519081900360200190f35b34801561010057600080fd5b50610109610553565b604080516001600160a01b039092168252519081900360200190f35b34801561013157600080fd5b506101586004803603602081101561014857600080fd5b50356001600160a01b0316610562565b005b34801561016657600080fd5b50610109610584565b34801561017b57600080fd5b50610109610593565b610158600480360360a081101561019a57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156101dc57600080fd5b8201836020820111156101ee57600080fd5b803590602001918460018302840111600160201b8311171561020f57600080fd5b5090925090506105a2565b6102a86004803603608081101561023057600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561026a57600080fd5b82018360208201111561027c57600080fd5b803590602001918460018302840111600160201b8311171561029d57600080fd5b50909250905061084c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102e25781810151838201526020016102ca565b50505050905090810190601f16801561030f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561032957600080fd5b50610158610868565b34801561033e57600080fd5b506102a8600480360360a081101561035557600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561039757600080fd5b8201836020820111156103a957600080fd5b803590602001918460018302840111600160201b831117156103ca57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108c5945050505050565b34801561041757600080fd5b506101096004803603602081101561042e57600080fd5b50356001600160a01b03166109bd565b34801561044a57600080fd5b506101586109f0565b6102a8600480360360c081101561046957600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156104af57600080fd5b8201836020820111156104c157600080fd5b803590602001918460018302840111600160201b831117156104e257600080fd5b509092509050610bd1565b3480156104f957600080fd5b50610109610e2b565b34801561050e57600080fd5b506101586004803603608081101561052557600080fd5b506001600160a01b038135811691602081013582169160408201358116916060013516610e3a565b60035481565b6004546001600160a01b031681565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6005546001600160a01b031681565b6001546001600160a01b031681565b6001546001600160a01b03163314806105d657506001546001600160a01b03166105cb33610f0c565b6001600160a01b0316145b610622576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60608061062f8484610f1b565b91509150805160001461064d57506040805160208101909152600081525b6000610658896109bd565b905061066c816001600160a01b0316611045565b6106935760006106808a838b8b8b8961104b565b905080156106915750505050610844565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b602083106106f95780518252601f1990920191602091820191016106da565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610759576040519150601f19603f3d011682016040523d82523d6000602084013e61075e565b606091505b50915091506000821580610773575060208251105b15610780575060016107af565b600061078d83600c611077565b90508c6001600160a01b0316816001600160a01b0316146107ad57600191505b505b80156107dd576107d18c308d8c604051806020016040528060008152506110d7565b50505050505050610844565b5050506107eb818888611157565b866001600160a01b0316886001600160a01b03168a6001600160a01b03167fc7f2e9c55c40a50fbc217dfc70cd39a222940dfa62145aa0ca49eb9535d4fcb2896040518082815260200191505060405180910390a45050505b505050505050565b606061085e8686866000808888610bd1565b9695505050505050565b60006108726111c6565b9050336001600160a01b038216146108c2576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b6060632e567b3660e01b868686866108df600354886111eb565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b8381101561094a578181015183820152602001610932565b50505050905090810190601f1680156109775780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6004546000906001600160a01b038381169116146109dd575060006109eb565b506005546001600160a01b03165b919050565b6000805481906000198101908110610a0457fe5b6000918252602091829020600391909102018054600180830154600280850180546040805161010096831615969096026000190190911692909204601f81018890048802850188019092528184529496506001600160a01b039093169490936060939091830182828015610ab95780601f10610a8e57610100808354040283529160200191610ab9565b820191906000526020600020905b815481529060010190602001808311610a9c57829003601f168201915b505050505090506000805480610acb57fe5b60008281526020812060036000199093019283020180546001600160a01b03191681556001810182905590610b036002830182611848565b5050905560006060846001600160a01b031684846040518082805190602001908083835b60208310610b465780518252601f199092019160209182019101610b27565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610ba8576040519150601f19603f3d011682016040523d82523d6000602084013e610bad565b606091505b50915091508160008114610bc057610bc8565b815160208301fd5b50505050505050565b60603415610c11576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610c1e3361127e565b15610c3757610c2d8585611292565b9092509050610c74565b33915084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b805115610cbe576040805162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b604482015290519081900360640190fd5b600080610cca8c6109bd565b9050610cde816001600160a01b0316611045565b610d24576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b8b6001600160a01b0316816001600160a01b031663c2eeeebd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d6757600080fd5b505afa158015610d7b573d6000803e3d6000fd5b505050506040513d6020811015610d9157600080fd5b50516001600160a01b031614610de6576040805162461bcd60e51b81526020600482015260156024820152742727aa2fa2ac2822a1aa22a22fa618afaa27a5a2a760591b604482015290519081900360640190fd5b610df181858c6112d0565b9950610e008c858d8d876110d7565b6040805160208082019390935281518082039093018352810190529c9b505050505050505050505050565b6002546001600160a01b031681565b610e448484611345565b6001600160a01b038216610e90576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9862ae8aa8960931b604482015290519081900360640190fd5b6001600160a01b038116610edc576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9864ae8aa8960931b604482015290519081900360640190fd5b600480546001600160a01b039384166001600160a01b031991821617909155600580549290931691161790555050565b61111061111160901b01190190565b60608083836040811015610f2e57600080fd5b810190602081018135600160201b811115610f4857600080fd5b820183602082011115610f5a57600080fd5b803590602001918460018302840111600160201b83111715610f7b57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b811115610fcd57600080fd5b820183602082011115610fdf57600080fd5b803590602001918460018302840111600160201b8311171561100057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b3b151590565b600061106987308786604051806020016040528060008152506110d7565b506001979650505050505050565b600081601401835110156110c7576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b600354600090816110f587866110f08b838b848b6108c5565b61139b565b604080516001600160a01b038b811682526020820186905281830189905291519293508392828a16928b16917f3073a74ecb728d10be779fe19a74a1428e20468f5b4d167bf9c73d9067847d73919081900360600190a4979650505050505050565b826001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561119257600080fd5b505af11580156111a6573d6000803e3d6000fd5b506111c1935050506001600160a01b038516905083836113c0565b505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b606082826040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561123557818101518382015260200161121d565b50505050905090810190601f1680156112625780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052979650505050505050565b6002546001600160a01b0390811691161490565b60006060838360408110156112a657600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610fcd57600080fd5b604080516374f4f54760e01b81526001600160a01b0384811660048301526024820184905291516000928616916374f4f547916044808301928692919082900301818387803b15801561132257600080fd5b505af1158015611336573d6000803e3d6000fd5b505050508190505b9392505050565b61134f8282611412565b6001600160a01b038116611397576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b5050565b6001546000906113b890849086906001600160a01b0316856114de565b949350505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526111c19084906114f5565b6001600160a01b038216611463576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6001546001600160a01b0316156114b0576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055565b60006114ec858585856115a6565b95945050505050565b606061154a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661167e9092919063ffffffff16565b8051909150156111c15780806020019051602081101561156957600080fd5b50516111c15760405162461bcd60e51b815260040180806020018281038252602a815260200180611928602a913960400191505060405180910390fd5b604080516060810182526001600160a01b03848116825260208083018881529383018581526000805460018101825581805285517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563600390920291820180546001600160a01b0319169190961617855595517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564870155905180519195611673937f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5659091019291019061188c565b505050949350505050565b60606113b884846000858561169285611045565b6116e3576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106117225780518252601f199092019160209182019101611703565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611784576040519150601f19603f3d011682016040523d82523d6000602084013e611789565b606091505b50915091506117998282866117a4565b979650505050505050565b606083156117b357508161133e565b8251156117c35782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561180d5781810151838201526020016117f5565b50505050905090810190601f16801561183a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50805460018160011615610100020316600290046000825580601f1061186e57506108c2565b601f0160209004906000526020600020908101906108c2919061190a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106118cd57805160ff19168380011785556118fa565b828001600101855582156118fa579182015b828111156118fa5782518255916020019190600101906118df565b5061190692915061190a565b5090565b61192491905b808211156119065760008155600101611910565b9056fe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212205c6dd32a6ae9a068b057d5b56d4294329f36117fde1eebce76d91e20882682c864736f6c634300060b0033'
const isSuperArgs = xs => xs.length > 1
class L2WethGatewayTester__factory extends ethers_1.ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = 'L2WethGatewayTester'
  }
  deploy(overrides) {
    return super.deploy(overrides || {})
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address) {
    return super.attach(address)
  }
  connect(signer) {
    return super.connect(signer)
  }
  static createInterface() {
    return new ethers_1.utils.Interface(_abi)
  }
  static connect(address, signerOrProvider) {
    return new ethers_1.Contract(address, _abi, signerOrProvider)
  }
}
exports.L2WethGatewayTester__factory = L2WethGatewayTester__factory
L2WethGatewayTester__factory.bytecode = _bytecode
L2WethGatewayTester__factory.abi = _abi
