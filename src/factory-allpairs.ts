import Web3 from 'web3';
import * as contract from './abi.json';

(async () => {
  const web3 = new Web3(
    'wss://speedy-nodes-nyc.moralis.io/bf0954bdf6d687179ca95a2f/polygon/mainnet/ws',
  );

  // sushiswap factory on polygon
  // https://polygonscan.com/address/0xc35DADB65012eC5796536bD9864eD8773aBc74C4#readContract

  const contractAddress = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';
  //@ts-ignore
  const TokenContract = new web3.eth.Contract(
    JSON.parse(contract.result),
    contractAddress,
  );

  const pairsLength = await TokenContract.methods.allPairsLength().call();

  console.log({ pairsLength });

  const lastPair = await TokenContract.methods
    .allPairs(Number(pairsLength) - 1)
    .call();

  console.log({ lastPair });

  // pair contract address
  const pair = await TokenContract.methods
    .getPair(
      '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      '0xb4A7a35aDF468b383e9AfBC236681234857513BF',
    )
    .call();

  console.log({ pair });
})();
