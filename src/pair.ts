import Web3 from 'web3';
import data from './pairabi.json';

(async () => {
  const web3 = new Web3(
    'wss://speedy-nodes-nyc.moralis.io/bf0954bdf6d687179ca95a2f/polygon/mainnet/ws',
  );

  const contractAddress = '0x4643F782ffD069587Efe30ae6a92D3ad6758b7aa';
  //@ts-ignore
  const TokenContract = new web3.eth.Contract(data, contractAddress);

  const tokenName = await TokenContract.methods.name().call();

  console.log({ tokenName });

  const reserves = await TokenContract.methods.getReserves().call();

  console.log({ reserves });
})();
