'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.StandardArbERC20__factory = void 0
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
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
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
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
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
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Address',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'bridgeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Address',
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
    name: 'l2Gateway',
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
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
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
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
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
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
const _bytecode =
  '0x60806040523480156200001157600080fd5b50600054610100900460ff1680620000375750620000376001600160e01b03620000dc16565b8062000046575060005460ff16155b620000835760405162461bcd60e51b815260040180806020018281038252602e815260200180620024ea602e913960400191505060405180910390fd5b600054610100900460ff16158015620000af576000805460ff1961ff0019909116610100171660011790555b8015620000c2576000805461ff00191690555b5060cd805460ff60a01b1916600160a01b17905562000100565b6000620000f430620000fa60201b62000e2d1760201c565b15905090565b3b151590565b6123da80620001106000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806370a08231116100b857806395d89b411161007c57806395d89b41146104da578063a457c2d7146104e2578063a9059cbb1461050e578063c2eeeebd1461053a578063d505accf14610542578063dd62ed3e1461059357610137565b806370a082311461041257806374f4f547146104385780637ecebe00146104645780638c2a993e1461048a5780638fa74a0e146104b657610137565b8063313ce567116100ff578063313ce567146102ff5780633644e5151461031d57806339509351146103255780634000aea0146103515780636f791d291461040a57610137565b806306fdde031461013c578063095ea7b3146101b957806318160ddd146101f9578063189db7d21461021357806323b872dd146102c9575b600080fd5b6101446105c1565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017e578181015183820152602001610166565b50505050905090810190601f1680156101ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101e5600480360360408110156101cf57600080fd5b506001600160a01b0381351690602001356105e7565b604080519115158252519081900360200190f35b610201610604565b60408051918252519081900360200190f35b6102c76004803603604081101561022957600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561025357600080fd5b82018360208201111561026557600080fd5b803590602001918460018302840111600160201b8311171561028657600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061060a945050505050565b005b6101e5600480360360608110156102df57600080fd5b506001600160a01b038135811691602081013590911690604001356108c2565b61030761094f565b6040805160ff9092168252519081900360200190f35b61020161096a565b6101e56004803603604081101561033b57600080fd5b506001600160a01b038135169060200135610974565b6101e56004803603606081101561036757600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561039657600080fd5b8201836020820111156103a857600080fd5b803590602001918460018302840111600160201b831117156103c957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109c8945050505050565b6101e5610aa3565b6102016004803603602081101561042857600080fd5b50356001600160a01b0316610ab3565b6102c76004803603604081101561044e57600080fd5b506001600160a01b038135169060200135610ace565b6102016004803603602081101561047a57600080fd5b50356001600160a01b0316610b2a565b6102c7600480360360408110156104a057600080fd5b506001600160a01b038135169060200135610b51565b6104be610ba9565b604080516001600160a01b039092168252519081900360200190f35b610144610bb8565b6101e5600480360360408110156104f857600080fd5b506001600160a01b038135169060200135610bd9565b6101e56004803603604081101561052457600080fd5b506001600160a01b038135169060200135610c47565b6104be610c5b565b6102c7600480360360e081101561055857600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610c6a565b610201600480360360408110156105a957600080fd5b506001600160a01b0381358116916020013516610e02565b60ce54606090610100900460ff16156105d957600080fd5b6105e1610e33565b90505b90565b60006105fb6105f4610ec9565b8484610ecd565b50600192915050565b60355490565b606080606083806020019051606081101561062457600080fd5b8101908080516040519392919084600160201b82111561064357600080fd5b90830190602082018581111561065857600080fd5b8251600160201b81118282018810171561067157600080fd5b82525081516020918201929091019080838360005b8381101561069e578181015183820152602001610686565b50505050905090810190601f1680156106cb5780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b8211156106ed57600080fd5b90830190602082018581111561070257600080fd5b8251600160201b81118282018810171561071b57600080fd5b82525081516020918201929091019080838360005b83811015610748578181015183820152602001610730565b50505050905090810190601f1680156107755780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b82111561079757600080fd5b9083019060208201858111156107ac57600080fd5b8251600160201b8111828201881017156107c557600080fd5b82525081516020918201929091019080838360005b838110156107f25781810151838201526020016107da565b50505050905090810190601f16801561081f5780820380516001836020036101000a031916815260200191505b506040525050509250925092506000606061083985610fb9565b915091506000606061084a86610fb9565b9150915060008061085a876111c5565b9150915061086b858483338f611218565b506040805160608101825291158083529515602083018190529315910181905260ce805460ff191690951761ff0019166101009093029290921762ff00001916620100009092029190911790925550505050505050565b60006108cf8484846112f4565b610945846108db610ec9565b610940856040518060600160405280602881526020016122ce602891396001600160a01b038a16600090815260346020526040812090610919610ec9565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61144b16565b610ecd565b5060019392505050565b60ce5460009060ff161561096257600080fd5b6105e16114e2565b60006105e16114eb565b60006105fb610981610ec9565b846109408560346000610992610ec9565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61151e16565b60006109d48484610c47565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610a4f578181015183820152602001610a37565b50505050905090810190601f168015610a7c5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3610a9384610e2d565b156109455761094584848461157f565b60cd54600160a01b900460ff1690565b6001600160a01b031660009081526033602052604090205490565b60cc546001600160a01b03163314610b1c576040805162461bcd60e51b815260206004820152600c60248201526b4f4e4c595f4741544557415960a01b604482015290519081900360640190fd5b610b268282611659565b5050565b6001600160a01b0381166000908152609960205260408120610b4b9061174f565b92915050565b60cc546001600160a01b03163314610b9f576040805162461bcd60e51b815260206004820152600c60248201526b4f4e4c595f4741544557415960a01b604482015290519081900360640190fd5b610b268282611753565b60cc546001600160a01b031681565b60ce5460609062010000900460ff1615610bd157600080fd5b6105e161183f565b60006105fb610be6610ec9565b84610940856040518060600160405280602581526020016123806025913960346000610c10610ec9565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61144b16565b60006105fb610c54610ec9565b84846112f4565b60cd546001600160a01b031681565b83421115610cbf576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a54888888610cf4609960008e6001600160a01b03166001600160a01b0316815260200190815260200160002061174f565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e0909101909152805191012090506000610d52826118a0565b90506000610d62828787876118ec565b9050896001600160a01b0316816001600160a01b031614610dca576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a166000908152609960205260409020610deb90611a57565b610df68a8a8a610ecd565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3b151590565b60368054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610ebf5780601f10610e9457610100808354040283529160200191610ebf565b820191906000526020600020905b815481529060010190602001808311610ea257829003601f168201915b5050505050905090565b3390565b6001600160a01b038316610f125760405162461bcd60e51b815260040180806020018281038252602481526020018061235c6024913960400191505060405180910390fd5b6001600160a01b038216610f575760405162461bcd60e51b81526004018080602001828103825260228152602001806121706022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60006060825160001415610fd057600091506111c0565b8251602014156110f65782516000908490601f908110610fec57fe5b01602001516001600160f81b0319161461100957600091506111c0565b6001915060205b600081118015611041575083516000908590600019840190811061103057fe5b01602001516001600160f81b031916145b1561104f5760001901611010565b60608167ffffffffffffffff8111801561106857600080fd5b506040519080825280601f01601f191660200182016040528015611093576020820181803683370190505b50905060005b828160ff1610156110ec57858160ff16815181106110b357fe5b602001015160f81c60f81b828260ff16815181106110cd57fe5b60200101906001600160f81b031916908160001a905350600101611099565b5091506111c09050565b6001915082806020019051602081101561110f57600080fd5b8101908080516040519392919084600160201b82111561112e57600080fd5b90830190602082018581111561114357600080fd5b8251600160201b81118282018810171561115c57600080fd5b82525081516020918201929091019080838360005b83811015611189578181015183820152602001611171565b50505050905090810190601f1680156111b65780820380516001836020036101000a031916815260200191505b5060405250505090505b915091565b60008082516020146111dc575060009050806111c0565b60008380602001905160208110156111f357600080fd5b5051905060ff81111561120d5750600091508190506111c0565b600192509050915091565b6001600160a01b038216611265576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4741544557415960881b604482015290519081900360640190fd5b60cc546001600160a01b0316156112b2576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b60cc80546001600160a01b038085166001600160a01b03199283161790925560cd8054928416929091169190911790556112ed858585611a60565b5050505050565b6001600160a01b0383166113395760405162461bcd60e51b81526004018080602001828103825260258152602001806123376025913960400191505060405180910390fd5b6001600160a01b03821661137e5760405162461bcd60e51b815260040180806020018281038252602381526020018061212b6023913960400191505060405180910390fd5b611389838383611b21565b6113cc81604051806060016040528060268152602001612192602691396001600160a01b038616600090815260336020526040902054919063ffffffff61144b16565b6001600160a01b038085166000908152603360205260408082209390935590841681522054611401908263ffffffff61151e16565b6001600160a01b0380841660008181526033602090815260409182902094909455805185815290519193928716926000805160206122f683398151915292918290030190a3505050565b600081848411156114da5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561149f578181015183820152602001611487565b50505050905090810190601f1680156114cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60385460ff1690565b60006105e1604051808061227c6052913960520190506040518091039020611511611b26565b611519611b2c565b611b32565b600082820183811015611578576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604051635260769b60e11b815233600482018181526024830185905260606044840190815284516064850152845187946001600160a01b0386169463a4c0ed369490938993899360840190602085019080838360005b838110156115ed5781810151838201526020016115d5565b50505050905090810190601f16801561161a5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561163b57600080fd5b505af115801561164f573d6000803e3d6000fd5b5050505050505050565b6001600160a01b03821661169e5760405162461bcd60e51b81526004018080602001828103825260218152602001806123166021913960400191505060405180910390fd5b6116aa82600083611b21565b6116ed8160405180606001604052806022815260200161214e602291396001600160a01b038516600090815260336020526040902054919063ffffffff61144b16565b6001600160a01b038316600090815260336020526040902055603554611719908263ffffffff611b8816565b6035556040805182815290516000916001600160a01b038516916000805160206122f68339815191529181900360200190a35050565b5490565b6001600160a01b0382166117ae576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6117ba60008383611b21565b6035546117cd908263ffffffff61151e16565b6035556001600160a01b0382166000908152603360205260409020546117f9908263ffffffff61151e16565b6001600160a01b03831660008181526033602090815260408083209490945583518581529351929391926000805160206122f68339815191529281900390910190a35050565b60378054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610ebf5780601f10610e9457610100808354040283529160200191610ebf565b60006118aa6114eb565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b038211156119435760405162461bcd60e51b81526004018080602001828103825260228152602001806121b86022913960400191505060405180910390fd5b8360ff16601b148061195857508360ff16601c145b6119935760405162461bcd60e51b815260040180806020018281038252602281526020018061225a6022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa1580156119eb573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611a4e576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b600054610100900460ff1680611a795750611a79611be5565b80611a87575060005460ff16155b611ac25760405162461bcd60e51b815260040180806020018281038252602e81526020018061222c602e913960400191505060405180910390fd5b600054610100900460ff16158015611aed576000805460ff1961ff0019909116610100171660011790555b611af684611bf6565b611b008484611ccc565b611b0982611d81565b8015611b1b576000805461ff00191690555b50505050565b505050565b60655490565b60665490565b6000838383611b3f611d97565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b600082821115611bdf576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000611bf030610e2d565b15905090565b600054610100900460ff1680611c0f5750611c0f611be5565b80611c1d575060005460ff16155b611c585760405162461bcd60e51b815260040180806020018281038252602e81526020018061222c602e913960400191505060405180910390fd5b600054610100900460ff16158015611c83576000805460ff1961ff0019909116610100171660011790555b611c8b611d9b565b611cae82604051806040016040528060018152602001603160f81b815250611e3d565b611cb782611efd565b8015610b26576000805461ff00191690555050565b600054610100900460ff1680611ce55750611ce5611be5565b80611cf3575060005460ff16155b611d2e5760405162461bcd60e51b815260040180806020018281038252602e81526020018061222c602e913960400191505060405180910390fd5b600054610100900460ff16158015611d59576000805460ff1961ff0019909116610100171660011790555b611d61611d9b565b611d6b8383611fba565b8015611b21576000805461ff0019169055505050565b6038805460ff191660ff92909216919091179055565b4690565b600054610100900460ff1680611db45750611db4611be5565b80611dc2575060005460ff16155b611dfd5760405162461bcd60e51b815260040180806020018281038252602e81526020018061222c602e913960400191505060405180910390fd5b600054610100900460ff16158015611e28576000805460ff1961ff0019909116610100171660011790555b8015611e3a576000805461ff00191690555b50565b600054610100900460ff1680611e565750611e56611be5565b80611e64575060005460ff16155b611e9f5760405162461bcd60e51b815260040180806020018281038252602e81526020018061222c602e913960400191505060405180910390fd5b600054610100900460ff16158015611eca576000805460ff1961ff0019909116610100171660011790555b82516020808501919091208351918401919091206065919091556066558015611b21576000805461ff0019169055505050565b600054610100900460ff1680611f165750611f16611be5565b80611f24575060005460ff16155b611f5f5760405162461bcd60e51b815260040180806020018281038252602e81526020018061222c602e913960400191505060405180910390fd5b600054610100900460ff16158015611f8a576000805460ff1961ff0019909116610100171660011790555b6040518060526121da8239604051908190036052019020609a55508015610b26576000805461ff00191690555050565b600054610100900460ff1680611fd35750611fd3611be5565b80611fe1575060005460ff16155b61201c5760405162461bcd60e51b815260040180806020018281038252602e81526020018061222c602e913960400191505060405180910390fd5b600054610100900460ff16158015612047576000805460ff1961ff0019909116610100171660011790555b825161205a906036906020860190612092565b50815161206e906037906020850190612092565b506038805460ff191660121790558015611b21576000805461ff0019169055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106120d357805160ff1916838001178555612100565b82800160010185558215612100579182015b828111156121005782518255916020019190600101906120e5565b5061210c929150612110565b5090565b6105e491905b8082111561210c576000815560010161211656fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c75655065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220e9f97e83f1af9b3b2fdd91b218645e9dd6d00c47cc5a6d6494e6cdcbd94d3fb364736f6c634300060b0033496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564'
const isSuperArgs = xs => xs.length > 1
class StandardArbERC20__factory extends ethers_1.ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = 'StandardArbERC20'
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
exports.StandardArbERC20__factory = StandardArbERC20__factory
StandardArbERC20__factory.bytecode = _bytecode
StandardArbERC20__factory.abi = _abi
