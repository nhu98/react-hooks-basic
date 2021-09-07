import React from "react";
import useClock from "../../hooks/useClock";

// function formatDate(date) {
//   if (!date) return "";
//   //   console.log("date:", date);
//   const hours = `0${date.getHours()}`.slice(-2);
//   const minutes = `0${date.getMinutes()}`.slice(-2);
//   const seconds = `0${date.getSeconds()}`.slice(-2);

//   return `${hours}:${minutes}:${seconds}`;
// }

function Clock(props) {
  // const [timeString, setTimeString] = useState("");

  // useEffect(() => {
  //   const clockInterval = setInterval(() => {
  //     const now = new Date();
  //     const newTimeString = formatDate(now);

  //     setTimeString(newTimeString);
  //   }, 1000);

  //   //clean up
  //   return () => {
  //     console.log("clean up interval");
  //     clearInterval(clockInterval);
  //   };
  // }, []);

  const { timeString } = useClock();

  return <p style={{ frontSize: "40px" }}>{timeString}</p>;
}

export default Clock;
