import Link from "next/link";
import React, { useEffect, useState } from "react";
import SuggestCard from "./SuggestCard";

const StockConfirmation = ({ stockName, setShowTrade,stockAction }) => {
  return (
    <div className=" trade_sec">
      <div className="trade_sec--up">
        <h1 className="heading1">Trade Confirmation</h1>
        <h2 className="heading2">
          {stockAction} Market order for {stockName} received.
        </h2>
        <h2 className="heading2">
          Your order has been received by our system and it will be executed
          shortly.
        </h2>
        <ul className="list">
          <li>
            To submit another stock order,{" "}
            <button onClick={() => setShowTrade(true)}><u>Click here</u></button>
          </li>
          <br />
          <li>
            To return to your portfolio summary,{" "}
            <Link className="link" href="/dashboard/portfolio"><button><u>Click here</u></button></Link> 
          </li>
        </ul>
      </div>
      {<SuggestCard/>}
    </div>
  );
};

export default StockConfirmation;
