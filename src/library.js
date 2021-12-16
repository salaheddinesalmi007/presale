import { Web3Provider } from "@ethersproject/providers";
// import { Contract } from '@ethersproject/contracts';

// import token_abi from './contract/token_abi.json';

export function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
