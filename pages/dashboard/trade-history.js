import { Loader } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import Sidebar from "../../components/Sidebar/Sidebar";
import { DataConvert } from "../../helpers/DateTimeConverter";
import { orderService } from "../../services/order.service";

export default function TradeHistory() {
  const [tradeHistoryData, setTradeHistoryData] = useState();
  const [currentPage,setCurrentPage]=useState(1);
  const [allPage,setAllPage]=useState(1)
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    setIsLoading(true)
    orderService
      .tradeHistory(currentPage)
      .then((res) => {
        if(res.success){
        setTradeHistoryData(res.orders.docs)
        setCurrentPage(res.orders.page)
        setAllPage(res.orders.pages)
        setIsLoading(false)

        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePageClick=({selected})=>{
    isLoading(true)
    orderService
    .tradeHistory(selected+1)
    .then((res) => {
      
      if (res.success) {
        setCurrentPage(res.orders.page)
        setAllPage(res.orders.pages)
        setTradeHistoryData(res.orders.docs);
        setIsLoading(false)
      }
    })
    .catch((err) => console.log(err));
    // setCurrentPage(selected+1)
  }
  // console.log(tradeHistoryData);
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
        <div
          className="trade-data"
          style={{ width: "30%", marginBottom: "40px" }}
        >
          <Link href="/dashboard/portfolio">
            <a style={{ fontSize: "20px", textDecoration: "underline" }}>
              Back to Portfolio
            </a>
          </Link>
        </div>
        <div className="page--title--block">
          <div className="card-no-gap">
            <div className="trade-order-status">
              {isLoading?<Loader color="red" />:<div className="order--table--responsive">
                {tradeHistoryData ? (
                  <div>
                    <table className="order-table">
                      <tr>
                        {columns.map((item) => {
                          return <th>{item}</th>;
                        })}
                      </tr>
                      {tradeHistoryData.map((item) => (
                        <tr>
                          <td>{DataConvert(item.createdAt)}</td>
                          <td>{item.symbol}</td>
                          <td>
                            {item.action == "Short" ? "Short " : ""}{" "}
                            {item.action == "Buy To Cover" ? "Cover " : ""}
                            Stock:{" "}
                            {item.action == "Buy To Cover"
                              ? "Cover"
                              : item.action}{" "}
                            at{" "}
                            {item.orderType == "Limit"
                              ? item.orderType
                              : `${item.orderType} Open`}
                          </td>
                          <td>{item.quantity}</td>
                          <td>₦{item.rate.toFixed(2)}</td>
                          <td>₦{(item.rate * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))}
                    </table>
                    <div className="paginationReact">
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      marginPagesDisplayed={2}
                      pageCount={allPage}
                      previousLabel="<"
                      renderOnZeroPageCount={null}
                    />
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "80vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h1
                      style={{
                        color: "#8000ff",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Trade History Not Found
                    </h1>
                  </div>
                )}
              </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
