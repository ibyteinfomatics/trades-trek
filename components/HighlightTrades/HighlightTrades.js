import React from "react";
import { HighlightTradeLists } from "./HighlightTradesLists";
import TradeLists from "./TradeLists";

export default function HighlightTrades() {
  // const tradeLength = HighlightTradeLists.length;
  return (
    <>
      <div className="card--style card--with--border">
        <ul>
          {HighlightTradeLists.map((data, index) => {
            if(index <= 7){
            return (
            
                <TradeLists key={index} listData={data} />
           
            );
            }
          })}
        </ul>
      </div>
    </>
  );
}
