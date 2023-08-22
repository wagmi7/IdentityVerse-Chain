'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.UpgradeableProxy__factory = void 0
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require('ethers')
const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_logic',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]
const _bytecode =
  '0x608060405260405161073d38038061073d8339818101604052604081101561002657600080fd5b81516020830180516040519294929383019291908464010000000082111561004d57600080fd5b90830190602082018581111561006257600080fd5b825164010000000081118282018810171561007c57600080fd5b82525081516020918201929091019080838360005b838110156100a9578181015183820152602001610091565b50505050905090810190601f1680156100d65780820380516001836020036101000a031916815260200191505b5060408181527f656970313936372e70726f78792e696d706c656d656e746174696f6e0000000082525190819003601c01902060008051602061069a83398151915260001990910114925061012a91505057fe5b61013c826001600160e01b0361016016565b8051156101595761015782826101c060201b6100311760201c565b505b50506103b5565b610173816101f560201b61005d1760201c565b6101ae5760405162461bcd60e51b81526004018080602001828103825260368152602001806106e16036913960400191505060405180910390fd5b60008051602061069a83398151915255565b60606101ee83836040518060600160405280602781526020016106ba602791396001600160e01b036101fb16565b9392505050565b3b151590565b606061020f846001600160e01b036101f516565b61024a5760405162461bcd60e51b81526004018080602001828103825260268152602001806107176026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106102885780518252601f199092019160209182019101610269565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146102e8576040519150601f19603f3d011682016040523d82523d6000602084013e6102ed565b606091505b5090925090506103078282866001600160e01b0361031116565b9695505050505050565b606083156103205750816101ee565b8251156103305782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561037a578181015183820152602001610362565b50505050905090810190601f1680156103a75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6102d6806103c46000396000f3fe60806040523661001357610011610017565b005b6100115b61001f61002f565b61002f61002a610063565b610088565b565b60606100568383604051806060016040528060278152602001610254602791396100ac565b9392505050565b3b151590565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156100a7573d6000f35b3d6000fd5b60606100b78461005d565b6100f25760405162461bcd60e51b815260040180806020018281038252602681526020018061027b6026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106101305780518252601f199092019160209182019101610111565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610190576040519150601f19603f3d011682016040523d82523d6000602084013e610195565b606091505b50915091506101a58282866101af565b9695505050505050565b606083156101be575081610056565b8251156101ce5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610218578181015183820152602001610200565b50505050905090810190601f1680156102455780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374a2646970667358221220dd70074360463f119fb28594af9212d0824a08aff74744c8a304f8ee1bbb573a64736f6c634300060b0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65645570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374'
const isSuperArgs = xs => xs.length > 1
class UpgradeableProxy__factory extends ethers_1.ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = 'UpgradeableProxy'
  }
  deploy(_logic, _data, overrides) {
    return super.deploy(_logic, _data, overrides || {})
  }
  getDeployTransaction(_logic, _data, overrides) {
    return super.getDeployTransaction(_logic, _data, overrides || {})
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
exports.UpgradeableProxy__factory = UpgradeableProxy__factory
UpgradeableProxy__factory.bytecode = _bytecode
UpgradeableProxy__factory.abi = _abi
