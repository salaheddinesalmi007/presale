import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./library";
import theme from './theme';
ReactDOM.render(
  <>
    <ToastContainer
      style={{ zIndex: 100000000000 }}
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Web3ReactProvider>
  </>,
  document.getElementById("root")
);
