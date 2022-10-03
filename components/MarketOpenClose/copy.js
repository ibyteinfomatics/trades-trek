import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import NigerianTimeZone from "../../helpers/Negerian-TimeZone";
import { data } from "autoprefixer";
const MarketOpenClose = () => {
  const [marketOpen, setmarketOpen] = useState(false);
  const [showTime, setShowTime] = useState();
  //   const [currentDateTime,setCurrentDateTime]=useState('')
  //   const [tomorrowDateTime,setTomorrowDateTime]=useState('')
  const [openHour, setOpenHour] = useState();
  const [openMin, setOpenMin] = useState();
  const marketOpenTime = "09:30:00";
  const marketCloseTime = "20:30:00";
  const holiday=['2022/10/03','2022/10/04']
  //   time calculations ...........................
  const TimeSet = () => {
    const originTime = new Date();

    const temp = NigerianTimeZone(originTime);
    const formatDate = moment(temp).format("HH:mm:ss");

    setShowTime(formatDate);
// open market ....................  ....................
    if (formatDate >= marketOpenTime && formatDate <= marketCloseTime) {
      setmarketOpen(true);
      var time = 14 - Number(formatDate.slice(0, 2));
      var min = 30 - Number(formatDate.slice(3, 5));
      if (time === 0) {
        setOpenHour(0);
        setOpenMin(min);
      } else {
        if (min < 0) {
          setOpenHour(time - 1);
          setOpenMin(min + 60);
        } else {
          setOpenHour(time);
          setOpenMin(min);
        }
      }
    } else { // close market .....................................
      if (formatDate < marketOpenTime) {
        // if open is market today .............................................
        let time = 9 - Number(formatDate.slice(0, 2));
        let min = 30 - Number(formatDate.slice(3, 5));

        if (time === 0) {
          setOpenHour(0);
          setOpenMin(min);
        } else {
          if (min < 0) {
            setOpenHour(time - 1);
            setOpenMin(min + 60);
          } else {
            setOpenHour(time);
            setOpenMin(min);
          }
        }
      } else {
        // if open market is tommorow ................................... 
        let time = 24 - Number(formatDate.slice(0, 2)) + 9;
        let min = 30 - Number(formatDate.slice(3, 5)) + 30;

        if (time === 0) {
          setOpenHour(0);
          setOpenMin(min);
        } else {
          if (min < 0) {
            setOpenHour(time - 1);
            setOpenMin(min + 60);
          } else {
            setOpenHour(time);
            setOpenMin(min);
          }
        }
      }
      setmarketOpen(false);
    }
  };

    // setInterval(() => {
    //   TimeSet();
    // }, 1000);

    function timeDiffCalc(dateFuture, dateNow) {
      let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
  
      // calculate days
      const days = Math.floor(diffInMilliSeconds / 86400);
      diffInMilliSeconds -= days * 86400;
      console.log('calculated days', days);
  
      // calculate hours
      const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
      diffInMilliSeconds -= hours * 3600;
      console.log('calculated hours', hours);
  
      // calculate minutes
      const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
      diffInMilliSeconds -= minutes * 60;
      console.log('minutes', minutes);
  
      let difference = '';
      if (days > 0) {
        difference += (days === 1) ? `${days} day, ` : `${days} days, `;
      }
  
      difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;
  
      difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 
  
      return difference;
    }
  

  useEffect(() => {
    let today=new Date()
    let whilecon=true;

    const temp = NigerianTimeZone(today);
    const formatDate = moment(temp).format("HH:mm:ss");
    console.log(formatDate)
    console.log(marketOpenTime)
    console.log(marketCloseTime)

    // if(formatDate >= marketOpenTime && formatDate <= marketCloseTime){
    //   console.log('market is opne')
    // }else{
    //   console.log('market is close')
    // }
while (holiday.includes(moment(today).format('YYYY/MM/DD'))) {
  today.setDate(today.getDate()+1)
  let day=moment(today).format('dddd')
  console.log(day)
  if(day=='Wednesday'){
    today.setDate(today.getDate()+2)
  }else if(day=='Thursday'){
    today.setDate(today.getDate()+2)
  }
  console.log('yes persent')
  
}
console.log(today)

    // if(holiday.includes(moment(today).format('YYYY/MM/DD'))){

    //   today.setDate(today.getDate()+1)

    //   console.log(today)
    // }else{
    //   let initial=today;
    //   // today.se
      
    //   // timeDiffCalc(today,today.setHours(1))
    // }
    // console.log(moment(today).format('YYYY/MM/DD'))
    // console.log(timeDiffCalc(new Date(), new Date('2022/10/3 18:00:00')));

    // TimeSet();
  }, [holiday]);
  return (
    <>
      {marketOpen ? (
        <div className="status-summary font-18">
          <span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12.5" cy="12.5" r="12.5" fill="#00FFA0" />
              <path
                d="M19.7244 7.70177L19.6227 7.60791L19.521 7.70177L10.8422 15.71L7.3851 12.5235L7.38444 12.5228L7.04211 12.2035L6.94035 12.1085L6.83807 12.2029L6.14828 12.8394L6.02815 12.9502L6.14889 13.0604L6.49503 13.3763L6.49569 13.3769L10.7405 17.2972L10.8422 17.3911L10.9439 17.2972L20.4142 8.55874L20.5337 8.4485L20.4142 8.33826L19.7244 7.70177Z"
                fill="white"
                stroke="white"
                strokeWidth="0.3"
              />
            </svg>
          </span>
          Market is open. Close in {openHour} hours {openMin} minutes
        </div>
      ) : (
        <div className="status-summary font-18">
          <span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.375 0.25C3.89746 0.25 0.25 3.89746 0.25 8.375C0.25 12.8525 3.89746 16.5 8.375 16.5C12.8525 16.5 16.5 12.8525 16.5 8.375C16.5 3.89746 12.8525 0.25 8.375 0.25ZM8.375 1.5C12.1787 1.5 15.25 4.57129 15.25 8.375C15.25 12.1787 12.1787 15.25 8.375 15.25C4.57129 15.25 1.5 12.1787 1.5 8.375C1.5 4.57129 4.57129 1.5 8.375 1.5ZM7.75 4V10.25H9V4H7.75ZM7.75 11.5V12.75H9V11.5H7.75Z"
                fill="#F45531"
              />
            </svg>
          </span>
          Market is closed. Opens in {openHour} hours {openMin} minutes
        </div>
      )}
    </>
  );
};

export default MarketOpenClose;