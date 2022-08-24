import Link from "next/link";
import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import { DataConvert } from "../../helpers/DateTimeConverter";
import { orderService } from "../../services/order.service";

export default function TradeHistory() {
  const [tradeHistoryData,setTradeHistoryData]=useState();
  useEffect(()=>{
    orderService.tradeHistory().then((res)=>setTradeHistoryData(res.docs)).catch((err)=>console.log(err))
  },[])
  console.log(tradeHistoryData)
  const columns = [
    "Date",
    "Symbol",
    "Trade Type",
    "QTY",
    "Price",
    "Total Cash Value",
  ];
  return (
    <>
      <Sidebar />
      <div className="site--content">
        <div className="page--title--block">
          <div className="card-no-gap">
            <div className="trade-data" style={{ width: "30%" }}>
              <Link href="/dashboard/portfolio">
                <a className="btn form--submit">Back to Portfolio</a>
              </Link>
            </div>
            <div className="trade-order-status">
              <div className="order--table--responsive">

               {tradeHistoryData && <table className="order-table">
                  <tr>
                    {columns.map((item) => {
                      return <th>{item}</th>;
                    })}
                  </tr>
                  {
                    tradeHistoryData.map((item)=>(
                      <tr>
                          <td>{DataConvert(item.createdAt)}</td>
                          <td>{item.symbol}</td>
                          <td>{item.action=='Short'?"Short ":''} {item.action=="Buy To Cover"?'Cover ':''}Stock: {item.action=='Buy To Cover'?"Cover":item.action} at {item.orderType=='Limit'?item.orderType:`${item.orderType} Open`}</td>
                          <td>{item.quantity}</td>
                          <td>{item.rate.toFixed(2)}</td>
                          <td>{(item.rate * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))
                  }
                  
                 
                  
                </table>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
