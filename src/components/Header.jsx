import React, { useState } from "react";
import { Box, Button, useMediaQuery } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";
import logo from "../images/logo.png";
import Modal from "../modal";
import Logout from "../logoutModal";

function Header() {
  const matches = useMediaQuery("(max-width:750px)");
  const { account, chainId, deactivate, activate } = useWeb3React();
  console.log(account, "account");
  const [openConnect, setopenConnect] = useState(false);
  const [logout, setlogout] = useState(false);
  console.log(chainId);

  return (
    <Box
      style={{
        position: "relative",
        zIndex: "100",
      }}
    >
      <Modal setOpen={setopenConnect} open={openConnect} />
      <Logout setOpen={setlogout} open={logout} />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="#ffffff71 0px 4px 16px"
        flexWrap="wrap"
        p={1}
        px={matches ? 2 : 5}
      >
        <Box display="flex" alignItems="center">
          <a href={"https://dumbdolphin.com"} target="_blank">
            <img
              src={logo}
              width={matches ? "50px" : "100px"}
              alt="not found"
            />
          </a>
          {matches ? (
            <a
              href={"https://dumbdolphin.com"}
              target="_blank"
              style={{
                fontSize: "30px",
                fontWeight: "900",
                textAlign: "center",
                fontFamily: "Raleway",
                marginLeft: "15px",
                color: "#45CBE0",
                textDecoration: "none",
              }}
              ml={1}
            >
              {" "}
              DDC
            </a>
          ) : (
            <a
              href={"https://dumbdolphin.com"}
              target="_blank"
              style={{
                fontSize: "30px",
                fontWeight: "900",
                textAlign: "center",
                fontFamily: "Raleway",
                marginLeft: "15px",
                color: "#45CBE0",
                textDecoration: "none",
              }}
            >
              Dumb Dolphin
            </a>
          )}
        </Box>

        <Box display="flex" alignItems="center" flexBasis="21%">
          <Box>
            {account ? (
              <Button
                style={{
                  background: "transparent",
                  backgroundColor: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "500",
                  border: "4px solid #45CBE0",
                  borderRadius: "22px",
                  width: "176px",
                  height: "45px",
                  color: "#45CBE0",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  setlogout(true);
                }}
              >
                {account.slice(0, 6) + "..." + account.slice(-4)}
              </Button>
            ) : (
              <Button
                style={{
                  background: "transparent",
                  backgroundColor: "#ffffff",
                  fontSize: "18px",
                  border: "4px solid #45CBE0",
                  borderRadius: "22px",
                  fontWeight: "500",
                  width: "176px",
                  height: "45px",
                  color: "#45CBE0",
                  textTransform: "capitalize",
                }}
                onClick={() => setopenConnect(true)}
              >
                Connect
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
