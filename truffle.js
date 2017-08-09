module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 3e6,
    },
    test: {
     provider: require('ethereumjs-testrpc').provider({ gasLimit: 100000000 }),
     network_id: "*"
   },
   development46: {
     network_id: 15,
     host: 'localhost',
     port: 8546,
     gas: 8e7,
   },
   mainnet: {
     network_id: 1,
     from: '0x7f478213dD4A4df6016922aA47b860f0Bdf50075',
     host: 'localhost',
     port: 8545,
     gas: 4e6,
   },
    ropsten: {
      network_id: 3,
      /*
      host: 'localhost',
      port: 8545,
      from: '0xfCeA9C5D4967956d4b209f6b1E9D2162Ce96149b',
      */
      provider: ropstenProvider,
      gas: 4.7e6,
    },
    kovan: {
      network_id: 42,
      provider: kovanProvider,
      gas: 4.99e6,
    },
  },
  build: {},
}

