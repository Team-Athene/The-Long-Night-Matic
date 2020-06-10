var contractABI = {
  "contractName": "LongNight",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "id",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "long_night",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "first_user",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "second_user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "bet_amount",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "winner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "star",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "create_game",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "join_game",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_winner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_star",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_status",
          "type": "uint256"
        }
      ],
      "name": "close_game",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.8+commit.0bbfe453\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"admin\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"_winner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_star\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_status\",\"type\":\"uint256\"}],\"name\":\"close_game\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"create_game\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"id\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"join_game\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"long_night\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"first_user\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"second_user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"bet_amount\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"winner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"star\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/denny/Desktop/Code/Other/Hackathon/Game/The-Long-Night-Ethereum/contracts/LongNight.sol\":\"LongNight\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/denny/Desktop/Code/Other/Hackathon/Game/The-Long-Night-Ethereum/contracts/LongNight.sol\":{\"keccak256\":\"0x13b721eb1080002c1e6270ddae252de3a5bb857c8b3958b223699de6323475e8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://784dc3e498dbbee8e727150c4b802c50e7cde8de1ea4693ee223e4c4d50cd61e\",\"dweb:/ipfs/QmPGSGEL63VGQVJBoygisBHnhsffANXMbzY8W6fr8CE4Tv\"]}},\"version\":1}",
  "bytecode": "0x6080604052600160025534801561001557600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108ba806100656000396000f3fe6080604052600436106100555760003560e01c806342909a9e1461005a5780634a7b26ec14610064578063af640d0f14610092578063d3f62aac146100bd578063f5d12a621461012c578063f851a4401461021b575b600080fd5b610062610272565b005b6100906004803603602081101561007a57600080fd5b81019080803590602001909291905050506102fa565b005b34801561009e57600080fd5b506100a7610352565b6040518082815260200191505060405180910390f35b3480156100c957600080fd5b5061012a600480360360808110156100e057600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610358565b005b34801561013857600080fd5b506101656004803603602081101561014f57600080fd5b81019080803590602001909291905050506107c9565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019550505050505060405180910390f35b34801561022757600080fd5b5061023061085f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3360016000600254815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503460016000600254815260200190815260200160002060020181905550600260008154809291906001019190505550565b336001600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60025481565b826001600086815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160016000868152602001908152602001600020600401819055506000811415610469576001600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc60016000878152602001908152602001600020600201549081150290604051600060405180830381858888f19350505050158015610463573d6000803e3d6000fd5b506107c3565b60018114156107c257600182141561058d578273ffffffffffffffffffffffffffffffffffffffff166108fc603260646001600089815260200190815260200160002060020154816104b757fe5b04026001600088815260200190815260200160002060020154019081150290604051600060405180830381858888f193505050501580156104fc573d6000803e3d6000fd5b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6032606460016000898152602001908152602001600020600201548161055a57fe5b04029081150290604051600060405180830381858888f19350505050158015610587573d6000803e3d6000fd5b506107c1565b60028214156106a8578273ffffffffffffffffffffffffffffffffffffffff166108fc604660646001600089815260200190815260200160002060020154816105d257fe5b04026001600088815260200190815260200160002060020154019081150290604051600060405180830381858888f19350505050158015610617573d6000803e3d6000fd5b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc601e606460016000898152602001908152602001600020600201548161067557fe5b04029081150290604051600060405180830381858888f193505050501580156106a2573d6000803e3d6000fd5b506107c0565b60038214156107bf578273ffffffffffffffffffffffffffffffffffffffff166108fc605a60646001600089815260200190815260200160002060020154816106ed57fe5b04026001600088815260200190815260200160002060020154019081150290604051600060405180830381858888f19350505050158015610732573d6000803e3d6000fd5b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600a606460016000898152602001908152602001600020600201548161079057fe5b04029081150290604051600060405180830381858888f193505050501580156107bd573d6000803e3d6000fd5b505b5b5b5b5b50505050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040154905085565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea26469706673582212203771948c0bbb0223da244974b59cf2fa52205e1ca2f7c47aecf9d80c3dd9b5cf64736f6c63430006080033",
  "deployedBytecode": "0x6080604052600436106100555760003560e01c806342909a9e1461005a5780634a7b26ec14610064578063af640d0f14610092578063d3f62aac146100bd578063f5d12a621461012c578063f851a4401461021b575b600080fd5b610062610272565b005b6100906004803603602081101561007a57600080fd5b81019080803590602001909291905050506102fa565b005b34801561009e57600080fd5b506100a7610352565b6040518082815260200191505060405180910390f35b3480156100c957600080fd5b5061012a600480360360808110156100e057600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610358565b005b34801561013857600080fd5b506101656004803603602081101561014f57600080fd5b81019080803590602001909291905050506107c9565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019550505050505060405180910390f35b34801561022757600080fd5b5061023061085f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3360016000600254815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503460016000600254815260200190815260200160002060020181905550600260008154809291906001019190505550565b336001600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60025481565b826001600086815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160016000868152602001908152602001600020600401819055506000811415610469576001600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc60016000878152602001908152602001600020600201549081150290604051600060405180830381858888f19350505050158015610463573d6000803e3d6000fd5b506107c3565b60018114156107c257600182141561058d578273ffffffffffffffffffffffffffffffffffffffff166108fc603260646001600089815260200190815260200160002060020154816104b757fe5b04026001600088815260200190815260200160002060020154019081150290604051600060405180830381858888f193505050501580156104fc573d6000803e3d6000fd5b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6032606460016000898152602001908152602001600020600201548161055a57fe5b04029081150290604051600060405180830381858888f19350505050158015610587573d6000803e3d6000fd5b506107c1565b60028214156106a8578273ffffffffffffffffffffffffffffffffffffffff166108fc604660646001600089815260200190815260200160002060020154816105d257fe5b04026001600088815260200190815260200160002060020154019081150290604051600060405180830381858888f19350505050158015610617573d6000803e3d6000fd5b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc601e606460016000898152602001908152602001600020600201548161067557fe5b04029081150290604051600060405180830381858888f193505050501580156106a2573d6000803e3d6000fd5b506107c0565b60038214156107bf578273ffffffffffffffffffffffffffffffffffffffff166108fc605a60646001600089815260200190815260200160002060020154816106ed57fe5b04026001600088815260200190815260200160002060020154019081150290604051600060405180830381858888f19350505050158015610732573d6000803e3d6000fd5b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600a606460016000898152602001908152602001600020600201548161079057fe5b04029081150290604051600060405180830381858888f193505050501580156107bd573d6000803e3d6000fd5b505b5b5b5b5b50505050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040154905085565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea26469706673582212203771948c0bbb0223da244974b59cf2fa52205e1ca2f7c47aecf9d80c3dd9b5cf64736f6c63430006080033",
  "immutableReferences": {},
  "sourceMap": "57:1539:0:-:0;;;417:1;400:18;;115:55;5:9:-1;2:2;;;27:1;24;17:12;2:2;115:55:0;153:10;145:5;;:18;;;;;;;;;;;;;;;;;;57:1539;;;;;;",
  "deployedSourceMap": "57:1539:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;429:153:0;;;:::i;:::-;;587:99;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;587:99:0;;;;;;;;;;;;;;;;;:::i;:::-;;400:18;;5:9:-1;2:2;;;27:1;24;17:12;2:2;400:18:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;691:903;;5:9:-1;2:2;;;27:1;24;17:12;2:2;691:903:0;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;691:903:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;357:36;;5:9:-1;2:2;;;27:1;24;17:12;2:2;357:36:0;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;357:36:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;81:28;;5:9:-1;2:2;;;27:1;24;17:12;2:2;81:28:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;429:153;504:10;476;:14;487:2;;476:14;;;;;;;;;;;:25;;;:38;;;;;;;;;;;;;;;;;;552:9;524:10;:14;535:2;;524:14;;;;;;;;;;;:25;;:37;;;;571:2;;:4;;;;;;;;;;;;;429:153::o;587:99::-;669:10;640;:15;651:3;640:15;;;;;;;;;;;:26;;;:39;;;;;;;;;;;;;;;;;;587:99;:::o;400:18::-;;;;:::o;691:903::-;811:7;786:10;:15;797:3;786:15;;;;;;;;;;;:22;;;:32;;;;;;;;;;;;;;;;;;851:5;828:10;:15;839:3;828:15;;;;;;;;;;;:20;;:28;;;;880:1;869:7;:12;866:721;;;896:10;:15;907:3;896:15;;;;;;;;;;;:26;;;;;;;;;;;;:35;;:63;932:10;:15;943:3;932:15;;;;;;;;;;;:26;;;896:63;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;896:63:0;866:721;;;987:1;978:7;:10;975:612;;;1015:1;1006:5;:10;1003:574;;;1031:7;:16;;:84;1110:2;1105:3;1078:10;:15;1089:3;1078:15;;;;;;;;;;;:26;;;:30;;;;;;1077:35;1049:10;:15;1060:3;1049:15;;;;;;;;;;;:26;;;:64;1031:84;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1031:84:0;1129:5;;;;;;;;;;;:14;;:51;1177:2;1172:3;1145:10;:15;1156:3;1145:15;;;;;;;;;;;:26;;;:30;;;;;;1144:35;1129:51;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1129:51:0;1003:574;;;1208:1;1199:5;:10;1196:381;;;1224:7;:16;;:84;1303:2;1298:3;1271:10;:15;1282:3;1271:15;;;;;;;;;;;:26;;;:30;;;;;;1270:35;1242:10;:15;1253:3;1242:15;;;;;;;;;;;:26;;;:64;1224:84;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1224:84:0;1322:5;;;;;;;;;;;:14;;:51;1370:2;1365:3;1338:10;:15;1349:3;1338:15;;;;;;;;;;;:26;;;:30;;;;;;1337:35;1322:51;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1322:51:0;1196:381;;;1401:1;1392:5;:10;1389:188;;;1417:7;:16;;:84;1496:2;1491:3;1464:10;:15;1475:3;1464:15;;;;;;;;;;;:26;;;:30;;;;;;1463:35;1435:10;:15;1446:3;1435:15;;;;;;;;;;;:26;;;:64;1417:84;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1417:84:0;1515:5;;;;;;;;;;;:14;;:51;1563:2;1558:3;1531:10;:15;1542:3;1531:15;;;;;;;;;;;:26;;;:30;;;;;;1530:35;1515:51;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1515:51:0;1389:188;1196:381;1003:574;975:612;866:721;691:903;;;;:::o;357:36::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;81:28::-;;;;;;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.6.8;\n\ncontract LongNight{\n    address payable public admin;\n    constructor() public{\n        admin = msg.sender;\n    }\n    \n    struct Game{\n        address payable first_user;\n        address payable second_user;\n        uint bet_amount;\n        address payable winner;\n        uint star;\n    }\n    \n    mapping(uint=>Game)public long_night ;\n    uint public id = 1;\n    \n    function create_game() public payable{\n        long_night[id].first_user = msg.sender;\n        long_night[id].bet_amount = msg.value;\n        id++;\n    }\n    function join_game(uint _id) public payable{\n        long_night[_id].first_user = msg.sender;\n    }\n    function close_game(uint _id,address payable _winner,uint _star,uint _status) public {\n        long_night[_id].winner = _winner;\n        long_night[_id].star = _star;\n        if(_status == 0){\n            long_night[_id].first_user.transfer(long_night[_id].bet_amount);\n        }else if(_status==1){\n            if(_star == 1){\n            _winner.transfer((long_night[_id].bet_amount+((long_night[_id].bet_amount/100)*50)));\n            admin.transfer((long_night[_id].bet_amount/100)*50);\n        }else if(_star == 2){\n            _winner.transfer((long_night[_id].bet_amount+((long_night[_id].bet_amount/100)*70)));\n            admin.transfer((long_night[_id].bet_amount/100)*30);\n        }else if(_star == 3){\n            _winner.transfer((long_night[_id].bet_amount+((long_night[_id].bet_amount/100)*90)));\n            admin.transfer((long_night[_id].bet_amount/100)*10);\n        }\n        }\n\n    }\n}",
  "sourcePath": "/home/denny/Desktop/Code/Other/Hackathon/Game/The-Long-Night-Ethereum/contracts/LongNight.sol",
  "ast": {
    "absolutePath": "/home/denny/Desktop/Code/Other/Hackathon/Game/The-Long-Night-Ethereum/contracts/LongNight.sol",
    "exportedSymbols": {
      "LongNight": [
        235
      ]
    },
    "id": 236,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".8"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 235,
        "linearizedBaseContracts": [
          235
        ],
        "name": "LongNight",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "f851a440",
            "id": 3,
            "mutability": "mutable",
            "name": "admin",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 235,
            "src": "81:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 2,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "81:15:0",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11,
              "nodeType": "Block",
              "src": "135:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 6,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "145:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 7,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "153:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 8,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "153:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "145:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 10,
                  "nodeType": "ExpressionStatement",
                  "src": "145:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 12,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 4,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "126:2:0"
            },
            "returnParameters": {
              "id": 5,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "135:0:0"
            },
            "scope": 235,
            "src": "115:55:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "canonicalName": "LongNight.Game",
            "id": 23,
            "members": [
              {
                "constant": false,
                "id": 14,
                "mutability": "mutable",
                "name": "first_user",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 23,
                "src": "201:26:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 13,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "201:15:0",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 16,
                "mutability": "mutable",
                "name": "second_user",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 23,
                "src": "237:27:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 15,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "237:15:0",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 18,
                "mutability": "mutable",
                "name": "bet_amount",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 23,
                "src": "274:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 17,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "274:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 20,
                "mutability": "mutable",
                "name": "winner",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 23,
                "src": "299:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 19,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "299:15:0",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 22,
                "mutability": "mutable",
                "name": "star",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 23,
                "src": "331:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 21,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "331:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Game",
            "nodeType": "StructDefinition",
            "scope": 235,
            "src": "180:167:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "f5d12a62",
            "id": 27,
            "mutability": "mutable",
            "name": "long_night",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 235,
            "src": "357:36:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
              "typeString": "mapping(uint256 => struct LongNight.Game)"
            },
            "typeName": {
              "id": 26,
              "keyType": {
                "id": 24,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "365:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "357:19:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                "typeString": "mapping(uint256 => struct LongNight.Game)"
              },
              "valueType": {
                "contractScope": null,
                "id": 25,
                "name": "Game",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 23,
                "src": "371:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Game_$23_storage_ptr",
                  "typeString": "struct LongNight.Game"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "af640d0f",
            "id": 30,
            "mutability": "mutable",
            "name": "id",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 235,
            "src": "400:18:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 28,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "400:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31",
              "id": 29,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "417:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 52,
              "nodeType": "Block",
              "src": "466:116:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 33,
                          "name": "long_night",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "476:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                            "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                          }
                        },
                        "id": 35,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 34,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30,
                          "src": "487:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "476:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Game_$23_storage",
                          "typeString": "struct LongNight.Game storage ref"
                        }
                      },
                      "id": 36,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "first_user",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14,
                      "src": "476:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 37,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "504:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 38,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "504:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "476:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 40,
                  "nodeType": "ExpressionStatement",
                  "src": "476:38:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 47,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 41,
                          "name": "long_night",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "524:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                            "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                          }
                        },
                        "id": 43,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 42,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30,
                          "src": "535:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "524:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Game_$23_storage",
                          "typeString": "struct LongNight.Game storage ref"
                        }
                      },
                      "id": 44,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "bet_amount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 18,
                      "src": "524:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "552:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 46,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "552:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "524:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 48,
                  "nodeType": "ExpressionStatement",
                  "src": "524:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 50,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "571:4:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 49,
                      "name": "id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30,
                      "src": "571:2:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 51,
                  "nodeType": "ExpressionStatement",
                  "src": "571:4:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "42909a9e",
            "id": 53,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "create_game",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "449:2:0"
            },
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "466:0:0"
            },
            "scope": 235,
            "src": "429:153:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 66,
              "nodeType": "Block",
              "src": "630:56:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 58,
                          "name": "long_night",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "640:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                            "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                          }
                        },
                        "id": 60,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 59,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55,
                          "src": "651:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "640:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Game_$23_storage",
                          "typeString": "struct LongNight.Game storage ref"
                        }
                      },
                      "id": 61,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "first_user",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14,
                      "src": "640:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 62,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "669:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 63,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "669:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "640:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 65,
                  "nodeType": "ExpressionStatement",
                  "src": "640:39:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "4a7b26ec",
            "id": 67,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "join_game",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "mutability": "mutable",
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 67,
                  "src": "606:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "606:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "605:10:0"
            },
            "returnParameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "630:0:0"
            },
            "scope": 235,
            "src": "587:99:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 233,
              "nodeType": "Block",
              "src": "776:818:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 78,
                          "name": "long_night",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "786:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                            "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                          }
                        },
                        "id": 80,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 79,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "797:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "786:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Game_$23_storage",
                          "typeString": "struct LongNight.Game storage ref"
                        }
                      },
                      "id": 81,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "winner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20,
                      "src": "786:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 82,
                      "name": "_winner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71,
                      "src": "811:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "786:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "786:32:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 85,
                          "name": "long_night",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "828:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                            "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                          }
                        },
                        "id": 87,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 86,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "839:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "828:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Game_$23_storage",
                          "typeString": "struct LongNight.Game storage ref"
                        }
                      },
                      "id": 88,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "star",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 22,
                      "src": "828:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 89,
                      "name": "_star",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 73,
                      "src": "851:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "828:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "828:28:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 94,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 92,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "869:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 93,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "880:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "869:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 107,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "978:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "987:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "978:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 231,
                    "nodeType": "IfStatement",
                    "src": "975:612:0",
                    "trueBody": {
                      "id": 230,
                      "nodeType": "Block",
                      "src": "989:598:0",
                      "statements": [
                        {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 112,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 110,
                              "name": "_star",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "1006:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 111,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1015:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1006:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "condition": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 151,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 149,
                                "name": "_star",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 73,
                                "src": "1199:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 150,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1208:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "1199:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseBody": {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 190,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 188,
                                  "name": "_star",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 73,
                                  "src": "1392:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "33",
                                  "id": 189,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1401:1:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_3_by_1",
                                    "typeString": "int_const 3"
                                  },
                                  "value": "3"
                                },
                                "src": "1392:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": null,
                              "id": 227,
                              "nodeType": "IfStatement",
                              "src": "1389:188:0",
                              "trueBody": {
                                "id": 226,
                                "nodeType": "Block",
                                "src": "1403:174:0",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "components": [
                                            {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "id": 208,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                  "argumentTypes": null,
                                                  "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 194,
                                                    "name": "long_night",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27,
                                                    "src": "1435:10:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                      "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                    }
                                                  },
                                                  "id": 196,
                                                  "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 195,
                                                    "name": "_id",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 69,
                                                    "src": "1446:3:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  },
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "nodeType": "IndexAccess",
                                                  "src": "1435:15:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Game_$23_storage",
                                                    "typeString": "struct LongNight.Game storage ref"
                                                  }
                                                },
                                                "id": 197,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "bet_amount",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18,
                                                "src": "1435:26:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "+",
                                              "rightExpression": {
                                                "argumentTypes": null,
                                                "components": [
                                                  {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    },
                                                    "id": 206,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                      "argumentTypes": null,
                                                      "components": [
                                                        {
                                                          "argumentTypes": null,
                                                          "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                          },
                                                          "id": 203,
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "leftExpression": {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                              "argumentTypes": null,
                                                              "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 198,
                                                                "name": "long_night",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 27,
                                                                "src": "1464:10:0",
                                                                "typeDescriptions": {
                                                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                                  "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                                }
                                                              },
                                                              "id": 200,
                                                              "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 199,
                                                                "name": "_id",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 69,
                                                                "src": "1475:3:0",
                                                                "typeDescriptions": {
                                                                  "typeIdentifier": "t_uint256",
                                                                  "typeString": "uint256"
                                                                }
                                                              },
                                                              "isConstant": false,
                                                              "isLValue": true,
                                                              "isPure": false,
                                                              "lValueRequested": false,
                                                              "nodeType": "IndexAccess",
                                                              "src": "1464:15:0",
                                                              "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Game_$23_storage",
                                                                "typeString": "struct LongNight.Game storage ref"
                                                              }
                                                            },
                                                            "id": 201,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "bet_amount",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18,
                                                            "src": "1464:26:0",
                                                            "typeDescriptions": {
                                                              "typeIdentifier": "t_uint256",
                                                              "typeString": "uint256"
                                                            }
                                                          },
                                                          "nodeType": "BinaryOperation",
                                                          "operator": "/",
                                                          "rightExpression": {
                                                            "argumentTypes": null,
                                                            "hexValue": "313030",
                                                            "id": 202,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "1491:3:0",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                              "typeIdentifier": "t_rational_100_by_1",
                                                              "typeString": "int_const 100"
                                                            },
                                                            "value": "100"
                                                          },
                                                          "src": "1464:30:0",
                                                          "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                          }
                                                        }
                                                      ],
                                                      "id": 204,
                                                      "isConstant": false,
                                                      "isInlineArray": false,
                                                      "isLValue": false,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "nodeType": "TupleExpression",
                                                      "src": "1463:32:0",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                      }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "*",
                                                    "rightExpression": {
                                                      "argumentTypes": null,
                                                      "hexValue": "3930",
                                                      "id": 205,
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "kind": "number",
                                                      "lValueRequested": false,
                                                      "nodeType": "Literal",
                                                      "src": "1496:2:0",
                                                      "subdenomination": null,
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_90_by_1",
                                                        "typeString": "int_const 90"
                                                      },
                                                      "value": "90"
                                                    },
                                                    "src": "1463:35:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  }
                                                ],
                                                "id": 207,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "1462:37:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "src": "1435:64:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            }
                                          ],
                                          "id": 209,
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "TupleExpression",
                                          "src": "1434:66:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 191,
                                          "name": "_winner",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 71,
                                          "src": "1417:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                          }
                                        },
                                        "id": 193,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "transfer",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1417:16:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                          "typeString": "function (uint256)"
                                        }
                                      },
                                      "id": 210,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "1417:84:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 211,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1417:84:0"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 223,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "components": [
                                              {
                                                "argumentTypes": null,
                                                "commonType": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                },
                                                "id": 220,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "argumentTypes": null,
                                                  "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                      "argumentTypes": null,
                                                      "id": 215,
                                                      "name": "long_night",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 27,
                                                      "src": "1531:10:0",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                        "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                      }
                                                    },
                                                    "id": 217,
                                                    "indexExpression": {
                                                      "argumentTypes": null,
                                                      "id": 216,
                                                      "name": "_id",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 69,
                                                      "src": "1542:3:0",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                      }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1531:15:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_struct$_Game_$23_storage",
                                                      "typeString": "struct LongNight.Game storage ref"
                                                    }
                                                  },
                                                  "id": 218,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "memberName": "bet_amount",
                                                  "nodeType": "MemberAccess",
                                                  "referencedDeclaration": 18,
                                                  "src": "1531:26:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "/",
                                                "rightExpression": {
                                                  "argumentTypes": null,
                                                  "hexValue": "313030",
                                                  "id": 219,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "1558:3:0",
                                                  "subdenomination": null,
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_100_by_1",
                                                    "typeString": "int_const 100"
                                                  },
                                                  "value": "100"
                                                },
                                                "src": "1531:30:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              }
                                            ],
                                            "id": 221,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1530:32:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "argumentTypes": null,
                                            "hexValue": "3130",
                                            "id": 222,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1563:2:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_10_by_1",
                                              "typeString": "int_const 10"
                                            },
                                            "value": "10"
                                          },
                                          "src": "1530:35:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 212,
                                          "name": "admin",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 3,
                                          "src": "1515:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                          }
                                        },
                                        "id": 214,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "transfer",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1515:14:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                          "typeString": "function (uint256)"
                                        }
                                      },
                                      "id": 224,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "1515:51:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 225,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1515:51:0"
                                  }
                                ]
                              }
                            },
                            "id": 228,
                            "nodeType": "IfStatement",
                            "src": "1196:381:0",
                            "trueBody": {
                              "id": 187,
                              "nodeType": "Block",
                              "src": "1210:174:0",
                              "statements": [
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "components": [
                                          {
                                            "argumentTypes": null,
                                            "commonType": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            "id": 169,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                  "argumentTypes": null,
                                                  "id": 155,
                                                  "name": "long_night",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 27,
                                                  "src": "1242:10:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                    "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                  }
                                                },
                                                "id": 157,
                                                "indexExpression": {
                                                  "argumentTypes": null,
                                                  "id": 156,
                                                  "name": "_id",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 69,
                                                  "src": "1253:3:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1242:15:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_Game_$23_storage",
                                                  "typeString": "struct LongNight.Game storage ref"
                                                }
                                              },
                                              "id": 158,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "bet_amount",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 18,
                                              "src": "1242:26:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                              "argumentTypes": null,
                                              "components": [
                                                {
                                                  "argumentTypes": null,
                                                  "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  },
                                                  "id": 167,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "leftExpression": {
                                                    "argumentTypes": null,
                                                    "components": [
                                                      {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                        },
                                                        "id": 164,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                          "argumentTypes": null,
                                                          "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                              "argumentTypes": null,
                                                              "id": 159,
                                                              "name": "long_night",
                                                              "nodeType": "Identifier",
                                                              "overloadedDeclarations": [],
                                                              "referencedDeclaration": 27,
                                                              "src": "1271:10:0",
                                                              "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                                "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                              }
                                                            },
                                                            "id": 161,
                                                            "indexExpression": {
                                                              "argumentTypes": null,
                                                              "id": 160,
                                                              "name": "_id",
                                                              "nodeType": "Identifier",
                                                              "overloadedDeclarations": [],
                                                              "referencedDeclaration": 69,
                                                              "src": "1282:3:0",
                                                              "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                              }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "1271:15:0",
                                                            "typeDescriptions": {
                                                              "typeIdentifier": "t_struct$_Game_$23_storage",
                                                              "typeString": "struct LongNight.Game storage ref"
                                                            }
                                                          },
                                                          "id": 162,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "memberName": "bet_amount",
                                                          "nodeType": "MemberAccess",
                                                          "referencedDeclaration": 18,
                                                          "src": "1271:26:0",
                                                          "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                          }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "/",
                                                        "rightExpression": {
                                                          "argumentTypes": null,
                                                          "hexValue": "313030",
                                                          "id": 163,
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": true,
                                                          "kind": "number",
                                                          "lValueRequested": false,
                                                          "nodeType": "Literal",
                                                          "src": "1298:3:0",
                                                          "subdenomination": null,
                                                          "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_100_by_1",
                                                            "typeString": "int_const 100"
                                                          },
                                                          "value": "100"
                                                        },
                                                        "src": "1271:30:0",
                                                        "typeDescriptions": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                        }
                                                      }
                                                    ],
                                                    "id": 165,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "1270:32:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  },
                                                  "nodeType": "BinaryOperation",
                                                  "operator": "*",
                                                  "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "3730",
                                                    "id": 166,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1303:2:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_rational_70_by_1",
                                                      "typeString": "int_const 70"
                                                    },
                                                    "value": "70"
                                                  },
                                                  "src": "1270:35:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                }
                                              ],
                                              "id": 168,
                                              "isConstant": false,
                                              "isInlineArray": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "nodeType": "TupleExpression",
                                              "src": "1269:37:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "src": "1242:64:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "id": 170,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "1241:66:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 152,
                                        "name": "_winner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 71,
                                        "src": "1224:7:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      },
                                      "id": 154,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "transfer",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1224:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                        "typeString": "function (uint256)"
                                      }
                                    },
                                    "id": 171,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1224:84:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 172,
                                  "nodeType": "ExpressionStatement",
                                  "src": "1224:84:0"
                                },
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 184,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "components": [
                                            {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "id": 181,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                  "argumentTypes": null,
                                                  "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 176,
                                                    "name": "long_night",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27,
                                                    "src": "1338:10:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                      "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                    }
                                                  },
                                                  "id": 178,
                                                  "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 177,
                                                    "name": "_id",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 69,
                                                    "src": "1349:3:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  },
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "nodeType": "IndexAccess",
                                                  "src": "1338:15:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Game_$23_storage",
                                                    "typeString": "struct LongNight.Game storage ref"
                                                  }
                                                },
                                                "id": 179,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "bet_amount",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18,
                                                "src": "1338:26:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "/",
                                              "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "313030",
                                                "id": 180,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1365:3:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                },
                                                "value": "100"
                                              },
                                              "src": "1338:30:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            }
                                          ],
                                          "id": 182,
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "TupleExpression",
                                          "src": "1337:32:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "hexValue": "3330",
                                          "id": 183,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "1370:2:0",
                                          "subdenomination": null,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_30_by_1",
                                            "typeString": "int_const 30"
                                          },
                                          "value": "30"
                                        },
                                        "src": "1337:35:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 173,
                                        "name": "admin",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3,
                                        "src": "1322:5:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      },
                                      "id": 175,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "transfer",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1322:14:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                        "typeString": "function (uint256)"
                                      }
                                    },
                                    "id": 185,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1322:51:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 186,
                                  "nodeType": "ExpressionStatement",
                                  "src": "1322:51:0"
                                }
                              ]
                            }
                          },
                          "id": 229,
                          "nodeType": "IfStatement",
                          "src": "1003:574:0",
                          "trueBody": {
                            "id": 148,
                            "nodeType": "Block",
                            "src": "1017:174:0",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "components": [
                                        {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 130,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                              "argumentTypes": null,
                                              "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 116,
                                                "name": "long_night",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27,
                                                "src": "1049:10:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                  "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                }
                                              },
                                              "id": 118,
                                              "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 117,
                                                "name": "_id",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 69,
                                                "src": "1060:3:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "nodeType": "IndexAccess",
                                              "src": "1049:15:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Game_$23_storage",
                                                "typeString": "struct LongNight.Game storage ref"
                                              }
                                            },
                                            "id": 119,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "bet_amount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18,
                                            "src": "1049:26:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "+",
                                          "rightExpression": {
                                            "argumentTypes": null,
                                            "components": [
                                              {
                                                "argumentTypes": null,
                                                "commonType": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                },
                                                "id": 128,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "argumentTypes": null,
                                                  "components": [
                                                    {
                                                      "argumentTypes": null,
                                                      "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                      },
                                                      "id": 125,
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                          "argumentTypes": null,
                                                          "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 120,
                                                            "name": "long_night",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 27,
                                                            "src": "1078:10:0",
                                                            "typeDescriptions": {
                                                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                              "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                            }
                                                          },
                                                          "id": 122,
                                                          "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 121,
                                                            "name": "_id",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 69,
                                                            "src": "1089:3:0",
                                                            "typeDescriptions": {
                                                              "typeIdentifier": "t_uint256",
                                                              "typeString": "uint256"
                                                            }
                                                          },
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "nodeType": "IndexAccess",
                                                          "src": "1078:15:0",
                                                          "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Game_$23_storage",
                                                            "typeString": "struct LongNight.Game storage ref"
                                                          }
                                                        },
                                                        "id": 123,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "bet_amount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18,
                                                        "src": "1078:26:0",
                                                        "typeDescriptions": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                        }
                                                      },
                                                      "nodeType": "BinaryOperation",
                                                      "operator": "/",
                                                      "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "313030",
                                                        "id": 124,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1105:3:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                          "typeIdentifier": "t_rational_100_by_1",
                                                          "typeString": "int_const 100"
                                                        },
                                                        "value": "100"
                                                      },
                                                      "src": "1078:30:0",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                      }
                                                    }
                                                  ],
                                                  "id": 126,
                                                  "isConstant": false,
                                                  "isInlineArray": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "nodeType": "TupleExpression",
                                                  "src": "1077:32:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "*",
                                                "rightExpression": {
                                                  "argumentTypes": null,
                                                  "hexValue": "3530",
                                                  "id": 127,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "1110:2:0",
                                                  "subdenomination": null,
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_50_by_1",
                                                    "typeString": "int_const 50"
                                                  },
                                                  "value": "50"
                                                },
                                                "src": "1077:35:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              }
                                            ],
                                            "id": 129,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1076:37:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "src": "1049:64:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "id": 131,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "1048:66:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 113,
                                      "name": "_winner",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 71,
                                      "src": "1031:7:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                      }
                                    },
                                    "id": 115,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "transfer",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1031:16:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                      "typeString": "function (uint256)"
                                    }
                                  },
                                  "id": 132,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1031:84:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 133,
                                "nodeType": "ExpressionStatement",
                                "src": "1031:84:0"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 145,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "components": [
                                          {
                                            "argumentTypes": null,
                                            "commonType": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            "id": 142,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                  "argumentTypes": null,
                                                  "id": 137,
                                                  "name": "long_night",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 27,
                                                  "src": "1145:10:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                    "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                  }
                                                },
                                                "id": 139,
                                                "indexExpression": {
                                                  "argumentTypes": null,
                                                  "id": 138,
                                                  "name": "_id",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 69,
                                                  "src": "1156:3:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1145:15:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_Game_$23_storage",
                                                  "typeString": "struct LongNight.Game storage ref"
                                                }
                                              },
                                              "id": 140,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "bet_amount",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 18,
                                              "src": "1145:26:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "/",
                                            "rightExpression": {
                                              "argumentTypes": null,
                                              "hexValue": "313030",
                                              "id": 141,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "number",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "1172:3:0",
                                              "subdenomination": null,
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_rational_100_by_1",
                                                "typeString": "int_const 100"
                                              },
                                              "value": "100"
                                            },
                                            "src": "1145:30:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "id": 143,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "1144:32:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "hexValue": "3530",
                                        "id": 144,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1177:2:0",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_50_by_1",
                                          "typeString": "int_const 50"
                                        },
                                        "value": "50"
                                      },
                                      "src": "1144:35:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 134,
                                      "name": "admin",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3,
                                      "src": "1129:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                      }
                                    },
                                    "id": 136,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "transfer",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1129:14:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                      "typeString": "function (uint256)"
                                    }
                                  },
                                  "id": 146,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1129:51:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 147,
                                "nodeType": "ExpressionStatement",
                                "src": "1129:51:0"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "id": 232,
                  "nodeType": "IfStatement",
                  "src": "866:721:0",
                  "trueBody": {
                    "id": 106,
                    "nodeType": "Block",
                    "src": "882:88:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 100,
                                  "name": "long_night",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27,
                                  "src": "932:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                    "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                  }
                                },
                                "id": 102,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 101,
                                  "name": "_id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 69,
                                  "src": "943:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "932:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Game_$23_storage",
                                  "typeString": "struct LongNight.Game storage ref"
                                }
                              },
                              "id": 103,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "bet_amount",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 18,
                              "src": "932:26:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 95,
                                  "name": "long_night",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27,
                                  "src": "896:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                    "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                  }
                                },
                                "id": 97,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 96,
                                  "name": "_id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 69,
                                  "src": "907:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "896:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Game_$23_storage",
                                  "typeString": "struct LongNight.Game storage ref"
                                }
                              },
                              "id": 98,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "first_user",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14,
                              "src": "896:26:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "id": 99,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "896:35:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "896:63:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 105,
                        "nodeType": "ExpressionStatement",
                        "src": "896:63:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d3f62aac",
            "id": 234,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "close_game",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "mutability": "mutable",
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "711:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "711:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 71,
                  "mutability": "mutable",
                  "name": "_winner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "720:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:15:0",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 73,
                  "mutability": "mutable",
                  "name": "_star",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "744:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 75,
                  "mutability": "mutable",
                  "name": "_status",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "755:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "710:58:0"
            },
            "returnParameters": {
              "id": 77,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "776:0:0"
            },
            "scope": 235,
            "src": "691:903:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 236,
        "src": "57:1539:0"
      }
    ],
    "src": "32:1564:0"
  },
  "legacyAST": {
    "absolutePath": "/home/denny/Desktop/Code/Other/Hackathon/Game/The-Long-Night-Ethereum/contracts/LongNight.sol",
    "exportedSymbols": {
      "LongNight": [
        235
      ]
    },
    "id": 236,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".8"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 235,
        "linearizedBaseContracts": [
          235
        ],
        "name": "LongNight",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "f851a440",
            "id": 3,
            "mutability": "mutable",
            "name": "admin",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 235,
            "src": "81:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 2,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "81:15:0",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11,
              "nodeType": "Block",
              "src": "135:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 6,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "145:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 7,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "153:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 8,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "153:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "145:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 10,
                  "nodeType": "ExpressionStatement",
                  "src": "145:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 12,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 4,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "126:2:0"
            },
            "returnParameters": {
              "id": 5,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "135:0:0"
            },
            "scope": 235,
            "src": "115:55:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "canonicalName": "LongNight.Game",
            "id": 23,
            "members": [
              {
                "constant": false,
                "id": 14,
                "mutability": "mutable",
                "name": "first_user",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 23,
                "src": "201:26:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 13,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "201:15:0",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 16,
                "mutability": "mutable",
                "name": "second_user",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 23,
                "src": "237:27:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 15,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "237:15:0",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 18,
                "mutability": "mutable",
                "name": "bet_amount",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 23,
                "src": "274:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 17,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "274:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 20,
                "mutability": "mutable",
                "name": "winner",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 23,
                "src": "299:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 19,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "299:15:0",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 22,
                "mutability": "mutable",
                "name": "star",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 23,
                "src": "331:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 21,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "331:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Game",
            "nodeType": "StructDefinition",
            "scope": 235,
            "src": "180:167:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "f5d12a62",
            "id": 27,
            "mutability": "mutable",
            "name": "long_night",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 235,
            "src": "357:36:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
              "typeString": "mapping(uint256 => struct LongNight.Game)"
            },
            "typeName": {
              "id": 26,
              "keyType": {
                "id": 24,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "365:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "357:19:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                "typeString": "mapping(uint256 => struct LongNight.Game)"
              },
              "valueType": {
                "contractScope": null,
                "id": 25,
                "name": "Game",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 23,
                "src": "371:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Game_$23_storage_ptr",
                  "typeString": "struct LongNight.Game"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "af640d0f",
            "id": 30,
            "mutability": "mutable",
            "name": "id",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 235,
            "src": "400:18:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 28,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "400:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31",
              "id": 29,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "417:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 52,
              "nodeType": "Block",
              "src": "466:116:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 33,
                          "name": "long_night",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "476:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                            "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                          }
                        },
                        "id": 35,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 34,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30,
                          "src": "487:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "476:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Game_$23_storage",
                          "typeString": "struct LongNight.Game storage ref"
                        }
                      },
                      "id": 36,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "first_user",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14,
                      "src": "476:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 37,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "504:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 38,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "504:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "476:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 40,
                  "nodeType": "ExpressionStatement",
                  "src": "476:38:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 47,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 41,
                          "name": "long_night",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "524:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                            "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                          }
                        },
                        "id": 43,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 42,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30,
                          "src": "535:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "524:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Game_$23_storage",
                          "typeString": "struct LongNight.Game storage ref"
                        }
                      },
                      "id": 44,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "bet_amount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 18,
                      "src": "524:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "552:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 46,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "552:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "524:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 48,
                  "nodeType": "ExpressionStatement",
                  "src": "524:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 50,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "571:4:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 49,
                      "name": "id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30,
                      "src": "571:2:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 51,
                  "nodeType": "ExpressionStatement",
                  "src": "571:4:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "42909a9e",
            "id": 53,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "create_game",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "449:2:0"
            },
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "466:0:0"
            },
            "scope": 235,
            "src": "429:153:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 66,
              "nodeType": "Block",
              "src": "630:56:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 58,
                          "name": "long_night",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "640:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                            "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                          }
                        },
                        "id": 60,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 59,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55,
                          "src": "651:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "640:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Game_$23_storage",
                          "typeString": "struct LongNight.Game storage ref"
                        }
                      },
                      "id": 61,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "first_user",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14,
                      "src": "640:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 62,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "669:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 63,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "669:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "640:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 65,
                  "nodeType": "ExpressionStatement",
                  "src": "640:39:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "4a7b26ec",
            "id": 67,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "join_game",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "mutability": "mutable",
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 67,
                  "src": "606:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "606:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "605:10:0"
            },
            "returnParameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "630:0:0"
            },
            "scope": 235,
            "src": "587:99:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 233,
              "nodeType": "Block",
              "src": "776:818:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 78,
                          "name": "long_night",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "786:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                            "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                          }
                        },
                        "id": 80,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 79,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "797:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "786:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Game_$23_storage",
                          "typeString": "struct LongNight.Game storage ref"
                        }
                      },
                      "id": 81,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "winner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20,
                      "src": "786:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 82,
                      "name": "_winner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71,
                      "src": "811:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "786:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "786:32:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 85,
                          "name": "long_night",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "828:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                            "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                          }
                        },
                        "id": 87,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 86,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "839:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "828:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Game_$23_storage",
                          "typeString": "struct LongNight.Game storage ref"
                        }
                      },
                      "id": 88,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "star",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 22,
                      "src": "828:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 89,
                      "name": "_star",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 73,
                      "src": "851:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "828:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "828:28:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 94,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 92,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "869:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 93,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "880:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "869:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 107,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "978:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "987:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "978:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 231,
                    "nodeType": "IfStatement",
                    "src": "975:612:0",
                    "trueBody": {
                      "id": 230,
                      "nodeType": "Block",
                      "src": "989:598:0",
                      "statements": [
                        {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 112,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 110,
                              "name": "_star",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "1006:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 111,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1015:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1006:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "condition": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 151,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 149,
                                "name": "_star",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 73,
                                "src": "1199:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 150,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1208:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "1199:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseBody": {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 190,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 188,
                                  "name": "_star",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 73,
                                  "src": "1392:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "33",
                                  "id": 189,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1401:1:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_3_by_1",
                                    "typeString": "int_const 3"
                                  },
                                  "value": "3"
                                },
                                "src": "1392:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": null,
                              "id": 227,
                              "nodeType": "IfStatement",
                              "src": "1389:188:0",
                              "trueBody": {
                                "id": 226,
                                "nodeType": "Block",
                                "src": "1403:174:0",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "components": [
                                            {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "id": 208,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                  "argumentTypes": null,
                                                  "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 194,
                                                    "name": "long_night",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27,
                                                    "src": "1435:10:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                      "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                    }
                                                  },
                                                  "id": 196,
                                                  "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 195,
                                                    "name": "_id",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 69,
                                                    "src": "1446:3:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  },
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "nodeType": "IndexAccess",
                                                  "src": "1435:15:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Game_$23_storage",
                                                    "typeString": "struct LongNight.Game storage ref"
                                                  }
                                                },
                                                "id": 197,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "bet_amount",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18,
                                                "src": "1435:26:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "+",
                                              "rightExpression": {
                                                "argumentTypes": null,
                                                "components": [
                                                  {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    },
                                                    "id": 206,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                      "argumentTypes": null,
                                                      "components": [
                                                        {
                                                          "argumentTypes": null,
                                                          "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                          },
                                                          "id": 203,
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "leftExpression": {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                              "argumentTypes": null,
                                                              "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 198,
                                                                "name": "long_night",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 27,
                                                                "src": "1464:10:0",
                                                                "typeDescriptions": {
                                                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                                  "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                                }
                                                              },
                                                              "id": 200,
                                                              "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 199,
                                                                "name": "_id",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 69,
                                                                "src": "1475:3:0",
                                                                "typeDescriptions": {
                                                                  "typeIdentifier": "t_uint256",
                                                                  "typeString": "uint256"
                                                                }
                                                              },
                                                              "isConstant": false,
                                                              "isLValue": true,
                                                              "isPure": false,
                                                              "lValueRequested": false,
                                                              "nodeType": "IndexAccess",
                                                              "src": "1464:15:0",
                                                              "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Game_$23_storage",
                                                                "typeString": "struct LongNight.Game storage ref"
                                                              }
                                                            },
                                                            "id": 201,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "bet_amount",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18,
                                                            "src": "1464:26:0",
                                                            "typeDescriptions": {
                                                              "typeIdentifier": "t_uint256",
                                                              "typeString": "uint256"
                                                            }
                                                          },
                                                          "nodeType": "BinaryOperation",
                                                          "operator": "/",
                                                          "rightExpression": {
                                                            "argumentTypes": null,
                                                            "hexValue": "313030",
                                                            "id": 202,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "1491:3:0",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                              "typeIdentifier": "t_rational_100_by_1",
                                                              "typeString": "int_const 100"
                                                            },
                                                            "value": "100"
                                                          },
                                                          "src": "1464:30:0",
                                                          "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                          }
                                                        }
                                                      ],
                                                      "id": 204,
                                                      "isConstant": false,
                                                      "isInlineArray": false,
                                                      "isLValue": false,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "nodeType": "TupleExpression",
                                                      "src": "1463:32:0",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                      }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "*",
                                                    "rightExpression": {
                                                      "argumentTypes": null,
                                                      "hexValue": "3930",
                                                      "id": 205,
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "kind": "number",
                                                      "lValueRequested": false,
                                                      "nodeType": "Literal",
                                                      "src": "1496:2:0",
                                                      "subdenomination": null,
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_90_by_1",
                                                        "typeString": "int_const 90"
                                                      },
                                                      "value": "90"
                                                    },
                                                    "src": "1463:35:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  }
                                                ],
                                                "id": 207,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "1462:37:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "src": "1435:64:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            }
                                          ],
                                          "id": 209,
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "TupleExpression",
                                          "src": "1434:66:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 191,
                                          "name": "_winner",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 71,
                                          "src": "1417:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                          }
                                        },
                                        "id": 193,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "transfer",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1417:16:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                          "typeString": "function (uint256)"
                                        }
                                      },
                                      "id": 210,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "1417:84:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 211,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1417:84:0"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 223,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "components": [
                                              {
                                                "argumentTypes": null,
                                                "commonType": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                },
                                                "id": 220,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "argumentTypes": null,
                                                  "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                      "argumentTypes": null,
                                                      "id": 215,
                                                      "name": "long_night",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 27,
                                                      "src": "1531:10:0",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                        "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                      }
                                                    },
                                                    "id": 217,
                                                    "indexExpression": {
                                                      "argumentTypes": null,
                                                      "id": 216,
                                                      "name": "_id",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 69,
                                                      "src": "1542:3:0",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                      }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1531:15:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_struct$_Game_$23_storage",
                                                      "typeString": "struct LongNight.Game storage ref"
                                                    }
                                                  },
                                                  "id": 218,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "memberName": "bet_amount",
                                                  "nodeType": "MemberAccess",
                                                  "referencedDeclaration": 18,
                                                  "src": "1531:26:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "/",
                                                "rightExpression": {
                                                  "argumentTypes": null,
                                                  "hexValue": "313030",
                                                  "id": 219,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "1558:3:0",
                                                  "subdenomination": null,
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_100_by_1",
                                                    "typeString": "int_const 100"
                                                  },
                                                  "value": "100"
                                                },
                                                "src": "1531:30:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              }
                                            ],
                                            "id": 221,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1530:32:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "argumentTypes": null,
                                            "hexValue": "3130",
                                            "id": 222,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1563:2:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_10_by_1",
                                              "typeString": "int_const 10"
                                            },
                                            "value": "10"
                                          },
                                          "src": "1530:35:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 212,
                                          "name": "admin",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 3,
                                          "src": "1515:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                          }
                                        },
                                        "id": 214,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "transfer",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1515:14:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                          "typeString": "function (uint256)"
                                        }
                                      },
                                      "id": 224,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "1515:51:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 225,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1515:51:0"
                                  }
                                ]
                              }
                            },
                            "id": 228,
                            "nodeType": "IfStatement",
                            "src": "1196:381:0",
                            "trueBody": {
                              "id": 187,
                              "nodeType": "Block",
                              "src": "1210:174:0",
                              "statements": [
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "components": [
                                          {
                                            "argumentTypes": null,
                                            "commonType": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            "id": 169,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                  "argumentTypes": null,
                                                  "id": 155,
                                                  "name": "long_night",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 27,
                                                  "src": "1242:10:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                    "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                  }
                                                },
                                                "id": 157,
                                                "indexExpression": {
                                                  "argumentTypes": null,
                                                  "id": 156,
                                                  "name": "_id",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 69,
                                                  "src": "1253:3:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1242:15:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_Game_$23_storage",
                                                  "typeString": "struct LongNight.Game storage ref"
                                                }
                                              },
                                              "id": 158,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "bet_amount",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 18,
                                              "src": "1242:26:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                              "argumentTypes": null,
                                              "components": [
                                                {
                                                  "argumentTypes": null,
                                                  "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  },
                                                  "id": 167,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "leftExpression": {
                                                    "argumentTypes": null,
                                                    "components": [
                                                      {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                        },
                                                        "id": 164,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                          "argumentTypes": null,
                                                          "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                              "argumentTypes": null,
                                                              "id": 159,
                                                              "name": "long_night",
                                                              "nodeType": "Identifier",
                                                              "overloadedDeclarations": [],
                                                              "referencedDeclaration": 27,
                                                              "src": "1271:10:0",
                                                              "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                                "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                              }
                                                            },
                                                            "id": 161,
                                                            "indexExpression": {
                                                              "argumentTypes": null,
                                                              "id": 160,
                                                              "name": "_id",
                                                              "nodeType": "Identifier",
                                                              "overloadedDeclarations": [],
                                                              "referencedDeclaration": 69,
                                                              "src": "1282:3:0",
                                                              "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                              }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "1271:15:0",
                                                            "typeDescriptions": {
                                                              "typeIdentifier": "t_struct$_Game_$23_storage",
                                                              "typeString": "struct LongNight.Game storage ref"
                                                            }
                                                          },
                                                          "id": 162,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "memberName": "bet_amount",
                                                          "nodeType": "MemberAccess",
                                                          "referencedDeclaration": 18,
                                                          "src": "1271:26:0",
                                                          "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                          }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "/",
                                                        "rightExpression": {
                                                          "argumentTypes": null,
                                                          "hexValue": "313030",
                                                          "id": 163,
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": true,
                                                          "kind": "number",
                                                          "lValueRequested": false,
                                                          "nodeType": "Literal",
                                                          "src": "1298:3:0",
                                                          "subdenomination": null,
                                                          "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_100_by_1",
                                                            "typeString": "int_const 100"
                                                          },
                                                          "value": "100"
                                                        },
                                                        "src": "1271:30:0",
                                                        "typeDescriptions": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                        }
                                                      }
                                                    ],
                                                    "id": 165,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "1270:32:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  },
                                                  "nodeType": "BinaryOperation",
                                                  "operator": "*",
                                                  "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "3730",
                                                    "id": 166,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1303:2:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_rational_70_by_1",
                                                      "typeString": "int_const 70"
                                                    },
                                                    "value": "70"
                                                  },
                                                  "src": "1270:35:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                }
                                              ],
                                              "id": 168,
                                              "isConstant": false,
                                              "isInlineArray": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "nodeType": "TupleExpression",
                                              "src": "1269:37:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "src": "1242:64:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "id": 170,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "1241:66:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 152,
                                        "name": "_winner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 71,
                                        "src": "1224:7:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      },
                                      "id": 154,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "transfer",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1224:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                        "typeString": "function (uint256)"
                                      }
                                    },
                                    "id": 171,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1224:84:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 172,
                                  "nodeType": "ExpressionStatement",
                                  "src": "1224:84:0"
                                },
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 184,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "components": [
                                            {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "id": 181,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                  "argumentTypes": null,
                                                  "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 176,
                                                    "name": "long_night",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27,
                                                    "src": "1338:10:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                      "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                    }
                                                  },
                                                  "id": 178,
                                                  "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 177,
                                                    "name": "_id",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 69,
                                                    "src": "1349:3:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  },
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "nodeType": "IndexAccess",
                                                  "src": "1338:15:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Game_$23_storage",
                                                    "typeString": "struct LongNight.Game storage ref"
                                                  }
                                                },
                                                "id": 179,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "bet_amount",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18,
                                                "src": "1338:26:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "/",
                                              "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "313030",
                                                "id": 180,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1365:3:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                },
                                                "value": "100"
                                              },
                                              "src": "1338:30:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            }
                                          ],
                                          "id": 182,
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "TupleExpression",
                                          "src": "1337:32:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "hexValue": "3330",
                                          "id": 183,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "1370:2:0",
                                          "subdenomination": null,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_30_by_1",
                                            "typeString": "int_const 30"
                                          },
                                          "value": "30"
                                        },
                                        "src": "1337:35:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 173,
                                        "name": "admin",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3,
                                        "src": "1322:5:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      },
                                      "id": 175,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "transfer",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1322:14:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                        "typeString": "function (uint256)"
                                      }
                                    },
                                    "id": 185,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1322:51:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 186,
                                  "nodeType": "ExpressionStatement",
                                  "src": "1322:51:0"
                                }
                              ]
                            }
                          },
                          "id": 229,
                          "nodeType": "IfStatement",
                          "src": "1003:574:0",
                          "trueBody": {
                            "id": 148,
                            "nodeType": "Block",
                            "src": "1017:174:0",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "components": [
                                        {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 130,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                              "argumentTypes": null,
                                              "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 116,
                                                "name": "long_night",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27,
                                                "src": "1049:10:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                  "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                }
                                              },
                                              "id": 118,
                                              "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 117,
                                                "name": "_id",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 69,
                                                "src": "1060:3:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "nodeType": "IndexAccess",
                                              "src": "1049:15:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Game_$23_storage",
                                                "typeString": "struct LongNight.Game storage ref"
                                              }
                                            },
                                            "id": 119,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "bet_amount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18,
                                            "src": "1049:26:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "+",
                                          "rightExpression": {
                                            "argumentTypes": null,
                                            "components": [
                                              {
                                                "argumentTypes": null,
                                                "commonType": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                },
                                                "id": 128,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "argumentTypes": null,
                                                  "components": [
                                                    {
                                                      "argumentTypes": null,
                                                      "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                      },
                                                      "id": 125,
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                          "argumentTypes": null,
                                                          "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 120,
                                                            "name": "long_night",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 27,
                                                            "src": "1078:10:0",
                                                            "typeDescriptions": {
                                                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                              "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                            }
                                                          },
                                                          "id": 122,
                                                          "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 121,
                                                            "name": "_id",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 69,
                                                            "src": "1089:3:0",
                                                            "typeDescriptions": {
                                                              "typeIdentifier": "t_uint256",
                                                              "typeString": "uint256"
                                                            }
                                                          },
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "nodeType": "IndexAccess",
                                                          "src": "1078:15:0",
                                                          "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Game_$23_storage",
                                                            "typeString": "struct LongNight.Game storage ref"
                                                          }
                                                        },
                                                        "id": 123,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "bet_amount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18,
                                                        "src": "1078:26:0",
                                                        "typeDescriptions": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                        }
                                                      },
                                                      "nodeType": "BinaryOperation",
                                                      "operator": "/",
                                                      "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "313030",
                                                        "id": 124,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1105:3:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                          "typeIdentifier": "t_rational_100_by_1",
                                                          "typeString": "int_const 100"
                                                        },
                                                        "value": "100"
                                                      },
                                                      "src": "1078:30:0",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                      }
                                                    }
                                                  ],
                                                  "id": 126,
                                                  "isConstant": false,
                                                  "isInlineArray": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "nodeType": "TupleExpression",
                                                  "src": "1077:32:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "*",
                                                "rightExpression": {
                                                  "argumentTypes": null,
                                                  "hexValue": "3530",
                                                  "id": 127,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "1110:2:0",
                                                  "subdenomination": null,
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_50_by_1",
                                                    "typeString": "int_const 50"
                                                  },
                                                  "value": "50"
                                                },
                                                "src": "1077:35:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              }
                                            ],
                                            "id": 129,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1076:37:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "src": "1049:64:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "id": 131,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "1048:66:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 113,
                                      "name": "_winner",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 71,
                                      "src": "1031:7:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                      }
                                    },
                                    "id": 115,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "transfer",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1031:16:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                      "typeString": "function (uint256)"
                                    }
                                  },
                                  "id": 132,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1031:84:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 133,
                                "nodeType": "ExpressionStatement",
                                "src": "1031:84:0"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 145,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "components": [
                                          {
                                            "argumentTypes": null,
                                            "commonType": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            "id": 142,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                  "argumentTypes": null,
                                                  "id": 137,
                                                  "name": "long_night",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 27,
                                                  "src": "1145:10:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                                    "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                                  }
                                                },
                                                "id": 139,
                                                "indexExpression": {
                                                  "argumentTypes": null,
                                                  "id": 138,
                                                  "name": "_id",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 69,
                                                  "src": "1156:3:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1145:15:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_Game_$23_storage",
                                                  "typeString": "struct LongNight.Game storage ref"
                                                }
                                              },
                                              "id": 140,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "bet_amount",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 18,
                                              "src": "1145:26:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "/",
                                            "rightExpression": {
                                              "argumentTypes": null,
                                              "hexValue": "313030",
                                              "id": 141,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "number",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "1172:3:0",
                                              "subdenomination": null,
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_rational_100_by_1",
                                                "typeString": "int_const 100"
                                              },
                                              "value": "100"
                                            },
                                            "src": "1145:30:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "id": 143,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "1144:32:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "hexValue": "3530",
                                        "id": 144,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1177:2:0",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_50_by_1",
                                          "typeString": "int_const 50"
                                        },
                                        "value": "50"
                                      },
                                      "src": "1144:35:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 134,
                                      "name": "admin",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3,
                                      "src": "1129:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                      }
                                    },
                                    "id": 136,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "transfer",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1129:14:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                      "typeString": "function (uint256)"
                                    }
                                  },
                                  "id": 146,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1129:51:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 147,
                                "nodeType": "ExpressionStatement",
                                "src": "1129:51:0"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "id": 232,
                  "nodeType": "IfStatement",
                  "src": "866:721:0",
                  "trueBody": {
                    "id": 106,
                    "nodeType": "Block",
                    "src": "882:88:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 100,
                                  "name": "long_night",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27,
                                  "src": "932:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                    "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                  }
                                },
                                "id": 102,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 101,
                                  "name": "_id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 69,
                                  "src": "943:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "932:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Game_$23_storage",
                                  "typeString": "struct LongNight.Game storage ref"
                                }
                              },
                              "id": 103,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "bet_amount",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 18,
                              "src": "932:26:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 95,
                                  "name": "long_night",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27,
                                  "src": "896:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Game_$23_storage_$",
                                    "typeString": "mapping(uint256 => struct LongNight.Game storage ref)"
                                  }
                                },
                                "id": 97,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 96,
                                  "name": "_id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 69,
                                  "src": "907:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "896:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Game_$23_storage",
                                  "typeString": "struct LongNight.Game storage ref"
                                }
                              },
                              "id": 98,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "first_user",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14,
                              "src": "896:26:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "id": 99,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "896:35:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "896:63:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 105,
                        "nodeType": "ExpressionStatement",
                        "src": "896:63:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d3f62aac",
            "id": 234,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "close_game",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "mutability": "mutable",
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "711:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "711:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 71,
                  "mutability": "mutable",
                  "name": "_winner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "720:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:15:0",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 73,
                  "mutability": "mutable",
                  "name": "_star",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "744:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 75,
                  "mutability": "mutable",
                  "name": "_status",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "755:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "710:58:0"
            },
            "returnParameters": {
              "id": 77,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "776:0:0"
            },
            "scope": 235,
            "src": "691:903:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 236,
        "src": "57:1539:0"
      }
    ],
    "src": "32:1564:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.8+commit.0bbfe453.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xA5a10A68D5aC725d39c8bD0A3219625463918EC9",
      "transactionHash": "0xa6a708fbd847cfe42115d815c3dd442d25407bbfa5def94becb7fa6227afb7f1"
    }
  },
  "schemaVersion": "3.2.0",
  "updatedAt": "2020-06-10T15:44:36.232Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
