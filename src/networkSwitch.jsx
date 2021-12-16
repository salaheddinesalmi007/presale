import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Slide,
} from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function NetworkChange({ open, setOpen }) {
  const { deactivate } = useWeb3React();
  const handleClose = () => {
    setOpen(false);
  };
  const networkHandler = async () => {
    try {
      // await window.ethereum.request({
      //   method: "wallet_switchEthereumChain",
      //   params: [{ chainId: "0x1" }],
      //   // params: [{ chainId: "0x89" }],
      // });
      // setOpen(false);
    } catch (error) {
      console.log(error);
    }
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
            <Box component="h3" color="#000">
              <Box component="span" color="red" fontSize="30px">
                Error!
              </Box>{" "}
              You are on wrong network please switch your network.{" "}
            </Box>
            <Box align="center">
              <button
                style={{
                  background:
                    "linear-gradient(180deg, #79d1ba 0%, #419b86 100%)",
                  borderRadius: "34px",
                  padding: "15px 20px",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                  lineHeight: "19px",
                  fontWeight: "bolder",
                  textTransform: "uppercase",
                  marginRight: "10px",
                }}
                onClick={networkHandler}
              >
                Switch Network
              </button>
            </Box>
          </DialogContent>
        </Dialog>
        {/* </Slide> */}
      </div>
    </div>
  );
}

export default NetworkChange;
