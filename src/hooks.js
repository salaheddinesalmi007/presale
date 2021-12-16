import React from "react";
import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import tokenAbi from "./utils/tokenAbi.json";
import presaleAbi from "./utils/preSaleAbi.json";
import { tokenAddress, presaleAddress } from "./utils/environment";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);
function useContract(address, ABI) {
  const { active, error, library } = useWeb3React();
  return React.useMemo(() => {
    if (active && !error && library) {
      const signer = library.getSigner();
      return new Contract(address, ABI, signer);
    } else {
      return "";
    }
  }, [address, ABI, active, error, library]);
}
export function useTokenContract() {
  return useContract(tokenAddress, tokenAbi);
}
export function usePresaleContract() {
  return useContract(presaleAddress, presaleAbi);
}
export function useTokenContract1() {
  try {
    const TokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
    return TokenContract;
  } catch (error) {}
}
export function usePresaleContract1() {
  try {
    const preSaleContract = new web3.eth.Contract(presaleAbi, presaleAddress);
    return preSaleContract;
  } catch (error) {}
}
