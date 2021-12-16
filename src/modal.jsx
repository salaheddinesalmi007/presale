import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogContent, Typography, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { injected, walletconnect } from "./connector";
import { useWeb3React } from "@web3-react/core";

const useStyles = makeStyles((theme) => ({
  connectWalletHeading: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#000000",
    [theme.breakpoints.down("xs")]: { fontSize: "15px" },
  },
  metaMaskUpperLayer: {
    width: "367px",
    height: "75px",
    border: "4px solid #45CBE0",
    background: "#ffffff",
    borderRadius: "50px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px auto",
    paddingRight: "30px",
    paddingLeft: "30px",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: { width: "100%" },
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "17.69pt",
    color: "#FA3A25",
    [theme.breakpoints.down("xs")]: { fontSize: "15px" },
  },
}));
function Modal({ setOpen, open }) {
  const matches = useMediaQuery("(max-width:600px)");
  var c;
  matches && window.web3 ? (c = injected) : (c = walletconnect);
  const { activate } = useWeb3React();

  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  // React.useEffect(() => {
  //   const storage = localStorage.getItem("wallet");
  //   if (storage == "meta") {
  //     activate(injected);
  //   } else if (storage == "bsc") {
  //     activate(bsc);
  //   } else if (storage == "c") {
  //     activate(c);
  //   }
  // }, []);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="modal__main__container">
        {/* <Slide direction="up" in={open} mountOnEnter unmountOnExit> */}
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent className="dialoge__content__section">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div>{/* <img src={phonex} alt="phonex" /> */}</div>
              <Typography variant="h1" className={classes.connectWalletHeading}>
                Connect to a wallet
              </Typography>
              <Box
                className={classes.metaMaskUpperLayer}
                onClick={() => {
                  setOpen(false);
                  activate(injected);
                  localStorage.setItem("wallet", "meta");
                }}
              >
                <Typography variant="h1" className={classes.buttonText}>
                  Metamask
                </Typography>
                <div>
                  <img width="25px" src="/image 27.svg" alt="metamask" />
                </div>
              </Box>
              <Box
                className={classes.metaMaskUpperLayer}
                onClick={() => {
                  setOpen(false);
                  activate(c);
                  localStorage.setItem("wallet", "c");
                }}
              >
                <Typography variant="h1" className={classes.buttonText}>
                  Trust wallet
                </Typography>
                <div>
                  <img width="25px" src="/trust.svg" alt="trustwallet" />
                </div>
              </Box>

              <Box
                className={classes.metaMaskUpperLayer}
                onClick={() => {
                  setOpen(false);
                  activate(c);
                  localStorage.setItem("wallet", "c");
                }}
              >
                <Typography variant="h1" className={classes.buttonText}>
                  Wallet Connect
                </Typography>
                <div>
                  <img
                    width="25px"
                    src="/Wallet_connect.png"
                    alt="trustwallet"
                  />
                </div>
              </Box>
              <Box
                className={classes.metaMaskUpperLayer}
                onClick={() => {
                  setOpen(false);
                  activate(c);
                  localStorage.setItem("wallet", "c");
                }}
              >
                <Typography variant="h1" className={classes.buttonText}>
                  Coinbase Wallet
                </Typography>
                <div>
                  <img width="25px" src="/coinbase.png" alt="trustwallet" />
                </div>
              </Box>
            </div>
          </DialogContent>
        </Dialog>
        {/* </Slide> */}
      </div>
    </div>
  );
}

export default Modal;
