require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food iron repeat pitch pulse hover forest flock tackle'; 
let testAccounts = [
"0x6f7de2f59784144bd94f839261b5f19525e02e880e28beb32c3bf779725adf98",
"0xb15af6108e934a61626c4c8aefeedaefb628b2ccda614ff6e9429d8d5b44feb8",
"0xd10093fab6321d0fbf2c39b1c5e1dc1940c34462f575210089e7664d849ba017",
"0x72ba75733d68151333bc805edb7a318d57d3794c7ab6855bf13c7a9d8d0188ed",
"0xd9e48f98c7cb95fc944899c3ab5d1524cb1cf91117ad4e303287011758a0c240",
"0xdec3ff5958e4300e6331710b71df581ae9e1d618c63d3f88613228a4b8698cba",
"0xad01a1571a1048014504a4116c83f2522711685f569c89f07187b7b18772757b",
"0x657e6bcc59aa579af4f30f1fb969d1068b18c8f611e4a198642a69658a557e9b",
"0xa64f9fdaa52c86f9e3f0fff62e30b882808edccda4c9db16ab410e8b9e514d27",
"0xd9df4421eeccdb8f5550fa17c39ec30137c8b318ec1a005dcf6943bb96fe99cd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

