import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  InputBase,
  useMediaQuery,
} from "@material-ui/core";
import {
  useTokenContract,
  usePresaleContract,
  usePresaleContract1,
  useTokenContract1,
} from "../hooks";
import logo from "../images/logo.png";
import bnbLogo from "../images/bnblogo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import Particles from "react-particles-js";
import Loading from "../loading";
import { toast } from "react-toastify";

const web3 = new Web3(
  Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/"
);

const useStyles = makeStyles((theme) => ({
  hover: {
    background: "transparent",
    fontSize: "18px",
    width: "165px",
    height: "50px",
    color: "#fff",
    backgroundImage: "linear-gradient(90deg, #45CBE0 0%, #939394 100%)",
    textTransform: "capitalize",
    marginTop: "15px",
    "&:hover": {
      boxShadow: "0px 0px 18px 0px #d9b76b",
    },
  },

  margin: {
    marginTop: theme.spacing(5),
  },
  size: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "0",
    value: "#005496",
  },
}));

function PublicPreSale() {
  const { formatUnits, parseUnits } = require("@ethersproject/units");
  const { account } = useWeb3React();
  const [dec, setDec] = useState("");
  const preSaleContract = usePresaleContract();
  const preSaleContract1 = usePresaleContract1();
  const tokenContract = useTokenContract();
  const tokenContract1 = useTokenContract1();

  const classes = useStyles();
  const matches = useMediaQuery("(max-width:700px)");

  const [amount, setamount] = useState("");
  const [tokensGet, settokensGet] = useState("0");
  const [loading, setloading] = useState(false);

  const init = async () => {
    try {
      const tokenDecimals = await tokenContract1.methods.decimals().call();
      const bnbToToken = await preSaleContract1.methods
        .bnbToToken(parseUnits(amount.toString()))
        .call();
      settokensGet(formatUnits(bnbToToken.toString(), +tokenDecimals));
    } catch (error) {}
  };

  useEffect(() => {
    if (amount && preSaleContract1 && tokenContract1) {
      init();
    }
  }, [amount, preSaleContract1, tokenContract1]);
  const buyHadler = async () => {
    if (account) {
      if (!amount) {
        toast.error("Error! Please enter a amount");
      } else if (isNaN(amount) || +amount < 0) {
        toast.error("Error! Please enter a valid amount");
      } else if (+amount == 0) {
        toast.error("Error!  Please enter a valid amount");
      } else if (+amount > 0 && +amount < 0.0001) {
        toast.error("Error! Minimum amount is 0.0001 BNB");
      } else if (+amount !== 0 && +amount > 10) {
        toast.error("Error! Maximum amount is 5000 BNB");
      } else {
        const tokenDecimals = await tokenContract1.methods.decimals().call();
        try {
          setloading(true);
          const tx = await preSaleContract.buyToken({
            value: parseUnits(amount.toString()),
          });
          await tx.wait();
          toast.success("Success! Transaction confirmed.");
          setloading(false);
          window.location.reload();
        } catch (error) {
          setloading(false);
          if (error?.data?.message) {
            toast.error(error?.data?.message);
          } else {
            toast.error(error?.message);
          }
        }
      }
    } else {
      toast.error("Error! Please connect your wallet.");
    }
  };

  return (
    <Box mt={5} mb={8}>
      <Loading loading={loading} />
      <Box
        width="100%"
        position="fixed"
        left="0px"
        right="0px"
        top="0px"
        bottom="0px"
      >
        <Particles
          className={classes.size}
          params={{
            particles: {
              number: {
                value: matches ? 20 : 40,
              },
              size: {
                value: 5,
              },
              color: {
                value: "#45CBE0",
              },
              line_linked: {
                color: "#45CBE0",
                opacity: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </Box>
      <Container maxWidth="md">
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            width="100%"
            boxShadow="#FA3A25 0px -1px 7px, #45CBE0 0px -5px 8px, #FA3A25 0px 2px 6px, #45CBE0 0px 6px 7px, #FA3A25 0px 3px 5px"
            style={{
              backgroundColor: "#ffffff",
            }}
            border="3px solid #45CBE0"
            borderRadius="20px"
            mb={{ xs: 5, sm: 0 }}
            mt={4}
          >
            <Box p={5}>
              <Box
                margin="auto"
                justifyContent="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box mt={3}>
                  <img
                    style={{
                      borderRadius: "150px",
                    }}
                    width="200px"
                    src={logo}
                    alt=""
                  />
                </Box>
                <Box
                  color="#45CBE0"
                  fontSize={matches ? "30px" : "50px"}
                  fontWeight="900"
                  textAlign="center"
                  fontFamily="Raleway"
                  my={1}
                >
                  Dumb Dolphin
                </Box>
              </Box>

              <Box
                mt={7}
                mb={2}
                style={{
                  boxShadow:
                    "#45CBE0 0px 0px 4px, #45CBE0 0px 0px 1px, #45CBE0 0px 1px 2px, #45CBE0 0px 0px 20px, #45CBE0 0px 1px 7px",

                  border: "2px solid #45CBE0",
                  backgroundColor: "#ffffff",
                  paddingLeft: 15,
                  borderRadius: "10px",
                }}
                pb={2}
                pt={1}
              >
                <Box
                  style={{
                    color: "#45CBE0",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    fontSize: "18px",
                    marginTop: "10px",
                    width: "100%",
                    paddingRight: "15px",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  From:{" "}
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-beteen"
                  alignItems="center"
                >
                  <InputBase
                    style={{
                      color: "#45CBE0",
                      fontFamily: "Roboto",
                      fontWeight: "600",
                      fontSize: "18px",
                      marginTop: "10px",
                      width: "100%",
                      paddingRight: "15px",
                    }}
                    fullWidth
                    type="text"
                    id="standard-basic"
                    variant="standard"
                    placeholder="0"
                    value={amount}
                    onChange={(e) => {
                      setamount(e.target.value);
                    }}
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                    bgcolor="#45CBE0"
                    borderRadius="10px"
                    height={matches ? "35px" : "auto"}
                    pl={matches ? 1 : 3}
                    pr={matches ? 2 : 4}
                    py={1}
                    mr={2}
                    style={{
                      color: "#ffffff",
                      fontFamily: "Roboto",
                      fontWeight: "500",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    <img
                      style={{ marginRight: "5px", marginBottom: "3px" }}
                      width="25px"
                      height="25px"
                      src={bnbLogo}
                      alt=""
                    />{" "}
                    BNB
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                style={{
                  boxShadow:
                    "#45CBE0 0px 0px 4px, #45CBE0 0px 0px 1px, #45CBE0 0px 1px 2px, #45CBE0 0px 0px 20px, #45CBE0 0px 1px 7px",
                  border: "2px solid #45CBE0",
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginTop: 10,
                }}
                py={2}
                px={2}
              >
                <Box
                  mb={1}
                  style={{
                    color: "#45CBE0",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    fontSize: "18px",
                    width: "100%",
                    paddingRight: "15px",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  To:{" "}
                </Box>

                <Box
                  alignItems="center"
                  justifyContent="space-between"
                  display="flex"
                >
                  <span style={{ fontSize: "18px", color: "#45CBE0" }}>
                    {tokensGet}
                  </span>
                  <Box
                    display="flex"
                    alignItems="center"
                    bgcolor="#45CBE0"
                    borderRadius="10px"
                    height={matches ? "35px" : "auto"}
                    pl={matches ? 1 : 3}
                    pr={matches ? 2 : 4}
                    py={1}
                    style={{
                      color: "#ffffff",
                      fontFamily: "Roboto",
                      fontWeight: "500",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    <img
                      style={{ marginRight: "5px", marginBottom: "3px" }}
                      width="25px"
                      height="25px"
                      src={logo}
                      alt=""
                    />{" "}
                    DDC
                  </Box>
                </Box>
              </Box>

              <Box mt={5} display="flex" flexDirection="column">
                <Box align="center">
                  <Button
                    style={{
                      background: "transparent",
                      backgroundColor: "#ffffff",
                      border: "4px solid #45CBE0",
                      fontSize: "18px",
                      borderRadius: "22px",
                      width: "176px",
                      height: "45px",
                      color: "#45CBE0",
                      textTransform: "capitalize",
                      fontWeight: "500",
                    }}
                    onClick={buyHadler}
                  >
                    Buy
                  </Button>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  flexDirection={matches ? "column" : "row"}
                >
                  <Box
                    component="a"
                    href="https://bscscan.com/address/0xb609eaa093b23346d672480380ab872ee2e7cccc"
                    target="_blank"
                    display="flex"
                    width={matches ? "190px" : "210px"}
                    alignItems="center"
                    bgcolor="#45CBE0"
                    borderRadius="10px"
                    mt={5}
                    pl={matches ? 2 : 3}
                    pr={matches ? 3 : 4}
                    py={1}
                    style={{
                      color: "#ffffff",
                      fontFamily: "Roboto",
                      fontWeight: "500",
                      fontSize: "16px",
                      textDecoration: "none",
                      position: "relative",
                    }}
                  >
                    {" "}
                    <img
                      style={{ marginRight: "5px", marginBottom: "3px" }}
                      width="25px"
                      height="25px"
                      src={logo}
                      alt=""
                    />{" "}
                    Token Contract
                  </Box>

                  <Box
                    component="a"
                    href="https://bscscan.com/address/0x781a7b219f49F9A1a9886881E696D44D86DcfD11"
                    target="_blank"
                    display="flex"
                    width={matches ? "190px" : "210px"}
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#45CBE0"
                    borderRadius="10px"
                    mb={matches ? 2 : 0}
                    mt={matches ? 2 : 5}
                    pl={matches ? 2 : 3}
                    pr={matches ? 3 : 4}
                    py={1}
                    style={{
                      color: "#ffffff",
                      fontFamily: "Roboto",
                      fontWeight: "500",
                      fontSize: "16px",
                      textDecoration: "none",
                      position: "relative",
                    }}
                  >
                    {" "}
                    <img
                      style={{ marginRight: "5px", marginBottom: "3px" }}
                      width="25px"
                      height="25px"
                      src={logo}
                      alt=""
                    />{" "}
                    Presale Contract
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              component="a"
              href="https://dumbdolphin.com"
              target="_blank"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="#45CBE0"
              borderRadius="10px"
              width={matches ? "168px" : "190px"}
              mb={matches ? 2 : 0}
              mt={matches ? 2 : 5}
              pl={matches ? 2 : 3}
              pr={matches ? 3 : 4}
              py={1}
              style={{
                color: "#ffffff",
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "16px",
                textDecoration: "none",
                position: "relative",
              }}
            >
              {" "}
              <img
                style={{ marginRight: "5px", marginBottom: "3px" }}
                width="25px"
                height="25px"
                src={logo}
                alt=""
              />{" "}
              Support
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default PublicPreSale;
