import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Slide,
} from "@material-ui/core";
import logo from "./images/logo.png";

import { useWeb3React } from "@web3-react/core";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  metaMaskUpperLayer: {
    width: "367px",
    height: "60px",
    border: "4px solid #000000",
    background: "#ffffff",
    borderRadius: "50px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "20px 10px",
    paddingRight: "30px",
    paddingLeft: "30px",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: { width: "100%" },
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "17.69pt",
    color: "#000000",
    [theme.breakpoints.down("xs")]: { fontSize: "15px" },
  },
}));
function Modal({ open, setOpen, disconnect }) {
  const classes = useStyles();
  const { deactivate } = useWeb3React();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="modal__main__container">
        <Dialog
          open={open}
          keepMounted
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent className="dialoge__content__section">
            <Box
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                className={classes.metaMaskUpperLayer}
                onClick={() => {
                  setOpen(false);
                  deactivate();
                  localStorage.removeItem("wallet");
                }}
              >
                <Typography variant="h1" className={classes.buttonText}>
                  Logout
                </Typography>
              </Box>
              <Box className={classes.metaMaskUpperLayer} onClick={handleClose}>
                <Typography variant="h1" className={classes.buttonText}>
                  Cancel
                </Typography>
              </Box>
            </Box>
            <Box alignSelf="center">
              <img style={{ padding: "20px" }} width="100%" src={logo} alt="" />
            </Box>
          </DialogContent>
        </Dialog>
        {/* </Slide> */}
      </div>
    </div>
  );
}

export default Modal;
