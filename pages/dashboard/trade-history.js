import Link from "next/link";
import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";

export default function TradeHistory() {
  const columns = [
    "SYMBOL",
    "Current Price",
    "Today's Change",
    "Purchage Price",
    "QTY",
    "Total Value",
    "Total Gain/Loss",
    "Trade Actions",
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
                <table className="order-table">
                  <tr>
                    {columns.map((item) => {
                      return <th>{item}</th>;
                    })}
                  </tr>
                  
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
