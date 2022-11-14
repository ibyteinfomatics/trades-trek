import { months } from "moment-timezone";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import { gameService } from "../../services/game.service";
import IncreaseDecrease from "../Table/IncreaseDecrease";
import CustomeComponent from "./CustomeComponent";

export default function PastCompetitionView() {
  let { user } = useSelector((state) => state.userWrapper);
  const [top5, setTop5] = useState([]);
  
  
  

  const [date, setDate] = useState(new Date());
  

  const getWinner = () => {
    gameService
      .getMYPastGame()
      .then((res) => {
        if (res.success) {
          setTop5(res.games);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getWinner(date);
  }, [date, user]);

  
  return (
    <>
      <div className="myConn">
        {top5 && (
          <div>
            {top5.map((item, index) => {
              return (
               <CustomeComponent key={index} item={item} />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
