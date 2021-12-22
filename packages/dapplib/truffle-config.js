require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift random magic horse grace derive blue genius'; 
let testAccounts = [
"0x2226cbc1b41db10918c097fb8136c9cdedc25e1c99e33b1c103e44b156c4f541",
"0x36a30fec2444165a3e2cc1deeb4dc2e36238792ef47d2bfa687e9e028d1fa4ce",
"0xad1ccf838855d409549ab2de87b05a4c2d19a9d4d6281c2e03119a3316ce3e6a",
"0xaefdb7fb9849d6b07ae4888606df937c3b7d7c19216b68e30f672589da77cbaa",
"0x6b6765aebd0b0876f596394e217f1e948ad5042124845d70e5e485b269bda882",
"0x09af455df444530738f755f7deaf97a17a585ef3d5d2cc83c096beac92ef7bfd",
"0x9f79ede82f969525d3d141eaa00eb485b85410acd09058a041c25ed8d6f1b395",
"0xd6be53af0497a8251067d911fe54e87dbc92114f14c425607b22755bf4fb3605",
"0xe1ed227215870c9a34a338587237e7bed3546e9a1da804e0d7083b660e98d9f8",
"0x8d336d7adfa369a114adbc100eaa5b715cc7fcdeb15407b6389e5f6d0528d983"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


