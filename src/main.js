const SHA256 = require('crypto-js/sha256')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('c3334cf2ed8163c72e33d68d3bdd7bf66a15230e3f781d0a2e1cc18eb3b65a9b');
const myWalletAddress = myKey.getPublic('hex');


const {Blockchain, Transaction} = require('./blockchain');

let startBlockCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey)
startBlockCoin.addTransaction(tx1);


console.log('\n Starting the miner ...');
startBlockCoin.minePendingTransactions(myWalletAddress);
console.log('\nBalance mywaller: ', startBlockCoin.getBalanceOfAddress(myWalletAddress))
