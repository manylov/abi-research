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

  const result = await TokenContract.getPastEvents('PairCreated', {
    fromBlock: 16800000,
    toBlock: 'latest',
  });

  //@ts-ignore
  TokenContract.events.PairCreated({}).on('data', evt => console.log(evt));

  console.log(JSON.stringify(result, null, 2));
})();
