import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Environment from "./utils/environment";
// import { AppContext } from "./utils/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Web3 from "web3";
import Modal from "./modal";
import Logout from "./logoutModal";
import { Link } from "react-scroll";
import {
  useTokenContract,
  useStakingContract,
  useBetContract,
  usePresaleContract,
} from "./hooks";
import moment from "moment";
import Loading from "./loading";

import { useWeb3React } from "@web3-react/core";
function App() {
  const [switchNetwork, setswitchNetwork] = useState(false);
  const web3 = new Web3(Web3.givenProvider);
  let chain = async () => {
    const chainid = await web3.eth.getChainId();
    if (chainid !== 1) {
      setswitchNetwork(true);
    }
  };
  const init1 = async () => {
    const wasAdded = await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20", // Initially only supports ERC20, but eventually more!
        options: {
          address: "0x96E3BD1915483eD6E6569e908a0F6F49434557eD", // The address that the token is at.
          symbol: "DGAT", // A ticker symbol or shorthand, up to 5 chars.
          decimals: 18, // The number of decimals in the token
          image: "https://doge-army-token.netlify.app/images/token-logo.png",
        },
      },
    });

    if (wasAdded) {
      console.log("Thanks for your interest!");
    } else {
      console.log("Your loss!");
    }
  };
  useEffect(() => {
    chain();
  }, []);
  return <BrowserRouter>{/* <Route path='' component={} /> */}</BrowserRouter>;
}

export default App;
