import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // we are in the browser and meta mask is installed
  console.log('MetaMask is installed!');
  web3 = new Web3(window.ethereum);
} else {
  // we are on the server *OR* meta mask is not running
  // creating our own provider  "web3": "^1.3.5"
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/5b1f777ef6f54a66b1d158c0c2f3cf85"
  );

  web3 = new Web3(provider);
}

export default web3;
