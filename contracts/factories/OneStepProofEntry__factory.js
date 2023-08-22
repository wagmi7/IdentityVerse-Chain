'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.OneStepProofEntry__factory = void 0
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require('ethers')
const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IOneStepProver',
        name: 'prover0_',
        type: 'address',
      },
      {
        internalType: 'contract IOneStepProver',
        name: 'proverMem_',
        type: 'address',
      },
      {
        internalType: 'contract IOneStepProver',
        name: 'proverMath_',
        type: 'address',
      },
      {
        internalType: 'contract IOneStepProver',
        name: 'proverHostIo_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'maxInboxMessagesRead',
            type: 'uint256',
          },
          {
            internalType: 'contract IBridge',
            name: 'bridge',
            type: 'address',
          },
        ],
        internalType: 'struct ExecutionContext',
        name: 'execCtx',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'machineStep',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'beforeHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
    ],
    name: 'proveOneStep',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'afterHash',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'prover0',
    outputs: [
      {
        internalType: 'contract IOneStepProver',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proverHostIo',
    outputs: [
      {
        internalType: 'contract IOneStepProver',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proverMath',
    outputs: [
      {
        internalType: 'contract IOneStepProver',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proverMem',
    outputs: [
      {
        internalType: 'contract IOneStepProver',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162002378380380620023788339810160408190526200003491620000a5565b600080546001600160a01b039586166001600160a01b031991821617909155600180549486169482169490941790935560028054928516928416929092179091556003805491909316911617905562000102565b80516001600160a01b0381168114620000a057600080fd5b919050565b60008060008060808587031215620000bc57600080fd5b620000c78562000088565b9350620000d76020860162000088565b9250620000e76040860162000088565b9150620000f76060860162000088565b905092959194509250565b61226680620001126000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631f128bc01461005c57806330a5509f1461008c5780635d3adcfb1461009f5780635f52fd7c146100c057806366e5d9c3146100d3575b600080fd5b60015461006f906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60005461006f906001600160a01b031681565b6100b26100ad3660046117fb565b6100e6565b604051908152602001610083565b60035461006f906001600160a01b031681565b60025461006f906001600160a01b031681565b60006100f06116f7565b6100f8611769565b6040805160208101909152606081526040805180820190915260008082526020820152600061012888888361069c565b9095509050886101378661086b565b1461017f5760405162461bcd60e51b815260206004820152601360248201527209a828690929c8abe848a8c9ea48abe9082a69606b1b60448201526064015b60405180910390fd5b60008551600381111561019457610194611896565b146101ae576101a28561086b565b95505050505050610693565b650800000000006101c08b60016118c2565b14156101d357600285526101a28561086b565b6101de888883610a5a565b90945090506101ee888883610b06565b809250819450505084610100015161021b8660a0015163ffffffff168686610be09092919063ffffffff16565b146102575760405162461bcd60e51b815260206004820152600c60248201526b1353d115531154d7d493d3d560a21b6044820152606401610176565b6040805160208101909152606081526040805160208101909152606081526102808a8a85610c29565b90945092506102908a8a85610b06565b9350915061029f8a8a85610b06565b809450819250505060006102c88860e0015163ffffffff168685610c839092919063ffffffff16565b905060006102eb8960c0015163ffffffff168385610cc99092919063ffffffff16565b9050876060015181146103355760405162461bcd60e51b815260206004820152601260248201527110905117d1955390d51253d394d7d493d3d560721b6044820152606401610176565b506103489250899150839050818b6118da565b975097505060008460a0015163ffffffff16905060018560e00181815161036f9190611904565b63ffffffff1690525081516000602861ffff8316108015906103965750603561ffff831611155b806103b65750603661ffff8316108015906103b65750603e61ffff831611155b806103c5575061ffff8216603f145b806103d4575061ffff82166040145b156103eb57506001546001600160a01b03166105e0565b61ffff821660451480610402575061ffff82166050145b806104305750604661ffff83161080159061043057506104246009604661192c565b61ffff168261ffff1611155b8061045e5750606761ffff83161080159061045e57506104526002606761192c565b61ffff168261ffff1611155b8061047e5750606a61ffff83161080159061047e5750607861ffff831611155b806104ac5750605161ffff8316108015906104ac57506104a06009605161192c565b61ffff168261ffff1611155b806104da5750607961ffff8316108015906104da57506104ce6002607961192c565b61ffff168261ffff1611155b806104fa5750607c61ffff8316108015906104fa5750608a61ffff831611155b80610509575061ffff821660a7145b80610526575061ffff821660ac1480610526575061ffff821660ad145b80610546575060c061ffff831610801590610546575060c461ffff831611155b80610566575060bc61ffff831610801590610566575060bf61ffff831611155b1561057d57506002546001600160a01b03166105e0565b61801061ffff831610801590610599575061801361ffff831611155b806105bb575061802061ffff8316108015906105bb575061802261ffff831611155b156105d257506003546001600160a01b03166105e0565b506000546001600160a01b03165b806001600160a01b031663da78e7d18e8989888f8f6040518763ffffffff1660e01b815260040161061696959493929190611a8b565b60006040518083038186803b15801561062e57600080fd5b505afa158015610642573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261066a9190810190612042565b909750955061067a858488610be0565b6101008801526106898761086b565b9750505050505050505b95945050505050565b6106a46116f7565b816000806106b3878785610d3e565b9350905060ff81166106c85760009150610745565b8060ff16600114156106dd5760019150610745565b8060ff16600214156106f25760029150610745565b8060ff16600314156107075760039150610745565b60405162461bcd60e51b8152602060048201526013602482015272554e4b4e4f574e5f4d4143485f53544154555360681b6044820152606401610176565b5061074e6117ba565b6107566117ba565b60008060008061077760408051808201909152606081526000602082015290565b60006107848e8e8c610d74565b9a5097506107938e8e8c610d74565b9a5096506107a28e8e8c610e73565b9a5091506107b18e8e8c610f9b565b9a5095506107c08e8e8c610fb7565b9a5094506107cf8e8e8c610fb7565b9a5093506107de8e8e8c610fb7565b9a5092506107ed8e8e8c610f9b565b809b5081925050506040518061012001604052808a600381111561081357610813611896565b81526020018981526020018881526020018381526020018781526020018663ffffffff1681526020018563ffffffff1681526020018463ffffffff168152602001828152509a50505050505050505050935093915050565b6000808251600381111561088157610881611896565b141561095057610894826020015161101b565b6108a1836040015161101b565b6108ae84606001516110a0565b608085015160a086015160c087015160e0808901516101008a01516040516f26b0b1b434b73290393ab73734b7339d60811b602082015260308101999099526050890197909752607088019590955260908701939093526001600160e01b031991831b821660b0870152821b811660b486015291901b1660b883015260bc82015260dc015b604051602081830303815290604052805190602001209050919050565b60018251600381111561096557610965611896565b141561099d5760808201516040517026b0b1b434b732903334b734b9b432b21d60791b60208201526031810191909152605101610933565b6002825160038111156109b2576109b2611896565b14156109dc576040516f26b0b1b434b7329032b93937b932b21d60811b6020820152603001610933565b6003825160038111156109f1576109f1611896565b1415610a1b576040516f26b0b1b434b732903a37b7903330b91d60811b6020820152603001610933565b60405162461bcd60e51b815260206004820152600f60248201526e4241445f4d4143485f53544154555360881b6044820152606401610176565b919050565b610a62611769565b604080516060810182526000808252602082018190529181018290528391906000806000610a918a8a88610f9b565b96509450610aa08a8a88611139565b96509350610aaf8a8a88610f9b565b96509250610abe8a8a88610f9b565b96509150610acd8a8a88610fb7565b6040805160a08101825297885260208801969096529486019390935250606084015263ffffffff16608083015290969095509350505050565b604080516020810190915260608152816000610b23868684610d3e565b92509050600060ff82166001600160401b03811115610b4457610b44611c19565b604051908082528060200260200182016040528015610b6d578160200160208202803683370190505b50905060005b8260ff168160ff161015610bc457610b8c888886610f9b565b838360ff1681518110610ba157610ba1612164565b602002602001018196508281525050508080610bbc9061217a565b915050610b73565b5060405180602001604052808281525093505050935093915050565b6000610c218484610bf0856111b4565b6040518060400160405280601381526020017226b7b23ab6329036b2b935b632903a3932b29d60691b815250611221565b949350505050565b604080518082019091526000808252602082015281600080610c4c8787856112f3565b93509150610c5b87878561134c565b6040805180820190915261ffff90941684526020840191909152919791965090945050505050565b6000610c218484610c93856113a1565b6040518060400160405280601881526020017724b739ba393ab1ba34b7b71036b2b935b632903a3932b29d60411b815250611221565b60405168233ab731ba34b7b71d60b91b602082015260298101829052600090819060490160405160208183030381529060405280519060200120905061069385858360405180604001604052806015815260200174233ab731ba34b7b71036b2b935b632903a3932b29d60591b815250611221565b600081848482818110610d5357610d53612164565b919091013560f81c9250819050610d698161219a565b915050935093915050565b610d7c6117ba565b816000610d8a868684610f9b565b925090506000610d9b87878561134c565b935090506000816001600160401b03811115610db957610db9611c19565b604051908082528060200260200182016040528015610dfe57816020015b6040805180820190915260008082526020820152815260200190600190039081610dd75790505b50905060005b8151811015610e4c57610e188989876113eb565b838381518110610e2a57610e2a612164565b6020026020010181975082905250508080610e449061219a565b915050610e04565b50604080516060810182529081019182529081526020810192909252509590945092505050565b604080518082019091526060815260006020820152816000610e96868684610f9b565b925090506060868684818110610eae57610eae612164565b909101356001600160f81b031916159050610f365782610ecd8161219a565b604080516001808252818301909252919550909150816020015b610eef6117d8565b815260200190600190039081610ee7579050509050610f0f8787856114e7565b82600081518110610f2257610f22612164565b602002602001018195508290525050610f7a565b82610f408161219a565b60408051600080825260208201909252919550909150610f76565b610f636117d8565b815260200190600190039081610f5b5790505b5090505b60405180604001604052808281526020018381525093505050935093915050565b60008181610faa86868461134c565b9097909650945050505050565b600081815b60048110156110125760088363ffffffff16901b9250858583818110610fe457610fe4612164565b919091013560f81c93909317925081610ffc8161219a565b925050808061100a9061219a565b915050610fbc565b50935093915050565b60208101518151515160005b818110156110995783516110449061103f9083611580565b6115b8565b6040516b2b30b63ab29039ba30b1b59d60a11b6020820152602c810191909152604c8101849052606c0160405160208183030381529060405280519060200120925080806110919061219a565b915050611027565b5050919050565b602081015160005b825151811015611133576110d8836000015182815181106110cb576110cb612164565b60200260200101516115d5565b6040517129ba30b1b590333930b6b29039ba30b1b59d60711b6020820152603281019190915260528101839052607201604051602081830303815290604052805190602001209150808061112b9061219a565b9150506110a8565b50919050565b60408051606081018252600080825260208201819052918101919091528160008080611166888886611645565b94509250611175888886611645565b94509150611184888886610f9b565b604080516060810182526001600160401b0396871681529490951660208501529383015250969095509350505050565b600081600001516111c883602001516116a3565b6040848101516060860151608087015192516626b7b23ab6329d60c91b6020820152602781019590955260478501939093526067840152608783019190915260e01b6001600160e01b03191660a782015260ab01610933565b8160005b8551518110156112ea57600185166112865782828760000151838151811061124f5761124f612164565b6020026020010151604051602001611269939291906121b5565b6040516020818303038152906040528051906020012091506112d1565b828660000151828151811061129d5761129d612164565b6020026020010151836040516020016112b8939291906121b5565b6040516020818303038152906040528051906020012091505b60019490941c93806112e28161219a565b915050611225565b50949350505050565b600081815b60028110156110125760088361ffff16901b925085858381811061131e5761131e612164565b919091013560f81c939093179250816113368161219a565b92505080806113449061219a565b9150506112f8565b600081815b602081101561101257600883901b925085858381811061137357611373612164565b919091013560f81c9390931792508161138b8161219a565b92505080806113999061219a565b915050611351565b6000816000015182602001516040516020016109339291906b24b739ba393ab1ba34b7b71d60a11b815260f09290921b6001600160f01b031916600c830152600e820152602e0190565b604080518082019091526000808252602082015281600085858381811061141457611414612164565b919091013560f81c915082905061142a8161219a565b925050611435600690565b600681111561144657611446611896565b60ff168160ff16111561148c5760405162461bcd60e51b815260206004820152600e60248201526d4241445f56414c55455f5459504560901b6044820152606401610176565b600061149987878561134c565b809450819250505060405180604001604052808360ff1660068111156114c1576114c1611896565b60068111156114d2576114d2611896565b81526020018281525093505050935093915050565b6114ef6117d8565b8161150a604080518082019091526000808252602082015290565b600080600061151a8989876113eb565b95509350611529898987610f9b565b95509250611538898987610fb7565b95509150611547898987610fb7565b60408051608081018252968752602087019590955263ffffffff9384169486019490945290911660608401525090969095509350505050565b604080518082019091526000808252602082015282518051839081106115a8576115a8612164565b6020026020010151905092915050565b6000816000015182602001516040516020016109339291906121fb565b60006115e482600001516115b8565b602080840151604080860151606087015191516b29ba30b1b590333930b6b29d60a11b94810194909452602c840194909452604c8301919091526001600160e01b031960e093841b8116606c840152921b9091166070820152607401610933565b600081815b6008811015611012576008836001600160401b0316901b925085858381811061167557611675612164565b919091013560f81c9390931792508161168d8161219a565b925050808061169b9061219a565b91505061164a565b805160208083015160408085015190516626b2b6b7b93c9d60c91b938101939093526001600160c01b031960c094851b811660278501529190931b16602f8201526037810191909152600090605701610933565b60408051610120810190915280600081526020016117136117ba565b81526020016117206117ba565b815260200161174060408051808201909152606081526000602082015290565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b6040805160a08101909152600081526020810161179f604080516060810182526000808252602082018190529181019190915290565b81526000602082018190526040820181905260609091015290565b60408051606080820183529181019182529081526000602082015290565b6040805160c0810190915260006080820181815260a0830191909152819061179f565b600080600080600085870360a081121561181457600080fd5b604081121561182257600080fd5b50859450604086013593506060860135925060808601356001600160401b038082111561184e57600080fd5b818801915088601f83011261186257600080fd5b81358181111561187157600080fd5b89602082850101111561188357600080fd5b9699959850939650602001949392505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156118d5576118d56118ac565b500190565b600080858511156118ea57600080fd5b838611156118f757600080fd5b5050820193919092039150565b600063ffffffff808316818516808303821115611923576119236118ac565b01949350505050565b600061ffff808316818516808303821115611923576119236118ac565b6004811061195957611959611896565b9052565b80516007811061196f5761196f611896565b8252602090810151910152565b805160408084529051602084830181905281516060860181905260009392820191849160808801905b808410156119cc576119b882865161195d565b9382019360019390930192908501906119a5565b509581015196019590955250919392505050565b8051604080845281518482018190526000926060916020918201918388019190865b82811015611a4b578451611a1785825161195d565b80830151858901528781015163ffffffff90811688870152908701511660808501529381019360a090930192600101611a02565b509687015197909601969096525093949350505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8635815260006101a060208901356001600160a01b038116808214611aaf57600080fd5b8060208601525050806040840152611aca8184018951611949565b5060208701516101206101c0840152611ae76102c084018261197c565b9050604088015161019f1980858403016101e0860152611b07838361197c565b925060608a01519150808584030161020086015250611b2682826119e0565b915050608088015161022084015260a0880151611b4c61024085018263ffffffff169052565b5060c088015163ffffffff81166102608501525060e088015163ffffffff8116610280850152506101008801516102a0840152611be160608401888051825260208101516001600160401b0380825116602085015280602083015116604085015250604081015160608401525060408101516080830152606081015160a083015263ffffffff60808201511660c08301525050565b855161ffff166101408401526020860151610160840152828103610180840152611c0c818587611a62565b9998505050505050505050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715611c5157611c51611c19565b60405290565b604051602081016001600160401b0381118282101715611c5157611c51611c19565b604051608081016001600160401b0381118282101715611c5157611c51611c19565b60405160a081016001600160401b0381118282101715611c5157611c51611c19565b604051606081016001600160401b0381118282101715611c5157611c51611c19565b60405161012081016001600160401b0381118282101715611c5157611c51611c19565b604051601f8201601f191681016001600160401b0381118282101715611d2a57611d2a611c19565b604052919050565b805160048110610a5557600080fd5b60006001600160401b03821115611d5a57611d5a611c19565b5060051b60200190565b600060408284031215611d7657600080fd5b611d7e611c2f565b9050815160078110611d8f57600080fd5b808252506020820151602082015292915050565b60006040808385031215611db657600080fd5b611dbe611c2f565b915082516001600160401b0380821115611dd757600080fd5b81850191506020808388031215611ded57600080fd5b611df5611c57565b835183811115611e0457600080fd5b80850194505087601f850112611e1957600080fd5b83519250611e2e611e2984611d41565b611d02565b83815260069390931b84018201928281019089851115611e4d57600080fd5b948301945b84861015611e7357611e648a87611d64565b82529486019490830190611e52565b8252508552948501519484019490945250909392505050565b805163ffffffff81168114610a5557600080fd5b60006040808385031215611eb357600080fd5b611ebb611c2f565b915082516001600160401b03811115611ed357600080fd5b8301601f81018513611ee457600080fd5b80516020611ef4611e2983611d41565b82815260a09283028401820192828201919089851115611f1357600080fd5b948301945b84861015611f7c5780868b031215611f305760008081fd5b611f38611c79565b611f428b88611d64565b815287870151858201526060611f59818901611e8c565b89830152611f6960808901611e8c565b9082015283529485019491830191611f18565b50808752505080860151818601525050505092915050565b80516001600160401b0381168114610a5557600080fd5b600081830360e0811215611fbe57600080fd5b611fc6611c9b565b8351815291506060601f1982011215611fde57600080fd5b50611fe7611cbd565b611ff360208401611f94565b815261200160408401611f94565b602082015260608301516040820152806020830152506080820151604082015260a0820151606082015261203760c08301611e8c565b608082015292915050565b60008061010080848603121561205757600080fd5b83516001600160401b038082111561206e57600080fd5b90850190610120828803121561208357600080fd5b61208b611cdf565b61209483611d32565b81526020830151828111156120a857600080fd5b6120b489828601611da3565b6020830152506040830151828111156120cc57600080fd5b6120d889828601611da3565b6040830152506060830151828111156120f057600080fd5b6120fc89828601611ea0565b6060830152506080830151608082015261211860a08401611e8c565b60a082015261212960c08401611e8c565b60c082015261213a60e08401611e8c565b60e082015283830151848201528095505050505061215b8460208501611fab565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b600060ff821660ff811415612191576121916118ac565b60010192915050565b60006000198214156121ae576121ae6118ac565b5060010190565b6000845160005b818110156121d657602081880181015185830152016121bc565b818111156121e5576000828501525b5091909101928352506020820152604001919050565b652b30b63ab29d60d11b815260006007841061221957612219611896565b5060f89290921b600683015260078201526027019056fea2646970667358221220419e1894332073c7b9bf24be7b2d1eece0fddfd7b88d0132fafaad53aff7f04764736f6c63430008090033'
const isSuperArgs = xs => xs.length > 1
class OneStepProofEntry__factory extends ethers_1.ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = 'OneStepProofEntry'
  }
  deploy(prover0_, proverMem_, proverMath_, proverHostIo_, overrides) {
    return super.deploy(
      prover0_,
      proverMem_,
      proverMath_,
      proverHostIo_,
      overrides || {}
    )
  }
  getDeployTransaction(
    prover0_,
    proverMem_,
    proverMath_,
    proverHostIo_,
    overrides
  ) {
    return super.getDeployTransaction(
      prover0_,
      proverMem_,
      proverMath_,
      proverHostIo_,
      overrides || {}
    )
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
exports.OneStepProofEntry__factory = OneStepProofEntry__factory
OneStepProofEntry__factory.bytecode = _bytecode
OneStepProofEntry__factory.abi = _abi
