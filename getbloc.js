// Setup: npm install @alch/alchemy-sdk
const { Network, Alchemy } = require("alchemy-sdk");

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "kAlFhtuhxxPNBvSYOdw8FwTS6r-pHwdf", // Replace with your Alchemy API Key.
  network: Network.GOERLI, // Replace with your network.
};

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

main();