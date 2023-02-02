import { Loader } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { stockService } from "../../services/stock.service";
import { HighlightTradeLists } from "./HighlightTradesLists";
import TradeLists from "./TradeLists";

export default function HighlightTrades() {
  const [highLightTrade, setHighLightTrade] = useState([]);
  useEffect(() => {
    stockService
      .getAllStock()
      .then((res) => {
        if (res.success) {
          setHighLightTrade(res.data);
        } else {
          setHighLightTrade([]);
        }
      })
      .catch((err) => setHighLightTrade([]));
  }, []);

  // const tradeLength = HighlightTradeLists.length;
  return (
    <>
     {highLightTrade.length>0 ? <div className="card--style card--with--border">
        <ul>
          {highLightTrade.map((data, index) => {
           if(index<9){
            return <TradeLists key={index} listData={data} />;
           }
          })}
        </ul>
      </div>: <div class="animated-background">
    <div class="background-masker"></div>
  </div>}
    </>
  );
}
