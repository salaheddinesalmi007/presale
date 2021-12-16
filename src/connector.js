import { InjectedConnector } from "@web3-react/injected-connector";
import { BscConnector } from "@binance-chain/bsc-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [56, 97],
});
export const walletconnect = new WalletConnectConnector({
  rpc: {
    56: "https://bsc-dataseed.binance.org/",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  supportedChainIds: [56, 97],
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000,
});

export const bsc = new BscConnector({
  supportedChainIds: [56, 97],
});
