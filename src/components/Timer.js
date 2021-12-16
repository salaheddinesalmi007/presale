import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { Box, useMediaQuery } from "@material-ui/core";

export default function TimerCountDown({ time }) {
  const matches = useMediaQuery("(max-width:700px)");

  let interval = useRef();
  console.log("time", time);

  const [countTime, setCountDateTime] = useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });

  const startTime = async (time) => {
    // let countDownDate = moment("Oct 15,2021 17:45:00").format("x");

    interval = setInterval(() => {
      var jun = moment().format("x");
      //  let a = jun.tz("Europe/Belgrade").format("x");
      const distance = +time - +jun;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setCountDateTime({
          ...countTime,
          time_days: days,
          time_Hours: hours,
          time_Minusts: minuts,
          time_seconds: seconds,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    if (time) {
      startTime(+time * 1000);
    }
  }, [time]);
  return (
    <Box
      className="heading"
      borderRadius="0px"
      fontSize={matches ? "30px" : "60px"}
      fontWeight="900"
      textAlign="center"
      fontFamily="Roboto"
      mb={3}
    >
      {countTime.time_days}d : {countTime.time_Hours}h :{" "}
      {countTime.time_Minusts}m : {countTime.time_seconds}s
    </Box>
  );
}
