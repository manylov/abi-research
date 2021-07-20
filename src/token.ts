import Web3 from 'web3';
import data from './tokenabi.json';

(async () => {
  const web3 = new Web3(
    'wss://speedy-nodes-nyc.moralis.io/bf0954bdf6d687179ca95a2f/polygon/mainnet/ws',
  );

  const contractAddress = '0x633a63ae13B95Ede70A601bBe270B46F537212c9';
  //@ts-ignore
  const TokenContract = new web3.eth.Contract(data, contractAddress);

  const tokenName = await TokenContract.methods.name().call();
  const tokenSymbol = await TokenContract.methods.symbol().call();
  const totalSupply = await TokenContract.methods.totalSupply().call();

  console.log({ tokenName, tokenSymbol, totalSupply });
})();
