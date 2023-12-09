// index.js
 
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  goerli,
  polygonMumbai,
  polygonZkEvmTestnet,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [
    mainnet,
    polygon,
    polygonZkEvmTestnet,
    goerli,
    polygonMumbai,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [alchemyProvider({ apiKey: "ak_CLXNUvyLcX7YFGVqKSzy2pVT4DDel" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'EZ Pay',
  projectId: '5a9849f3d0cf4cbca60f51a71bded5f1',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});
 
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);