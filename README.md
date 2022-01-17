1. what is Web3.js
2. Modules
3. Web3.js with chrome console
4. ABI and bytecode
5. compilation
6. deployment


## Prerequisites
- blockchain
- ethereum
- solidity
- js

## Software Requirement
- Node js
- 
- Vs code

# Web3 js
- web3 js is a collection of libraries that allow you to imteract with local or remote ethereum mode using HTTP,IPC or websocket

## remix IDE
## Solidity

## Ganache
- ` npm install -g ganache-cli`
- `ganache-cli --version`
- `npm install -g ethereumjs-testrpc`

### for GUI Ganache
- Download image from [link](https://trufflesuite.com/ganache/)
- chmod a+x ganache-2.5.4-linux-x86_64.AppImage
- ./ganache-2.5.4-linux-x86_64.AppImage
- More for [Ganache](https://trufflesuite.com/docs/ganache/quickstart.html)

## Truffle Compile contract
- `npm install -g truffle` on your terminal
- cd to your main dir and RUN:- `truffle init`
- Compilation of contract on truffle
- make new contract on `/contracts` `test.sol`
- and compile contract using : `truffle compile`

- RUN Ganche
- RUN `truffle migrate`
- If Contract file was rewrite and change something on sol file than you cant migarte you need `truffle migrate --reset`

## Infura
- for connect with infura  you need install this package 
- `npm install @truffle/hdwallet-provider`
- RUN  `truffle migrate --network repston`



  