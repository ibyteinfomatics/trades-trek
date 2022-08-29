import { Loader } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import Sidebar from "../../components/Sidebar/Sidebar";
import { DataConvert } from "../../helpers/DateTimeConverter";
import { userService } from "../../services";

export default function PerformanceHistory() {
  const [userHistoryData, setuserHistoryData] = useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [allPage,setAllPage]=useState(1)
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    setIsLoading(true)
    userService
      .userPerformanceHistory(currentPage)
      .then((res) => {
        
        if (res.success) {
          setCurrentPage(res.history.page)
          setAllPage(res.history.pages)
          setuserHistoryData(res.history.docs);
          setIsLoading(false)
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handlePageClick=({selected})=>{
    setIsLoading(true)
    userService
    .userPerformanceHistory(selected+1)
    .then((res) => {
      
      if (res.success) {
        setCurrentPage(res.history.page)
        setAllPage(res.history.pages)
        setuserHistoryData(res.history.docs);
        setIsLoading(false)
      }
    })
    .catch((err) => console.log(err));
    // setCurrentPage(selected+1)
  }
  // console.log(userHistoryData);
  const columns = [
    "Date",
    "Cash",
    "Stock Portfolio Value",
    "Shorted Stock Portfolio Value",
    "Account Value",
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
          <p style={{ margin: "10px 0px" }}>Performance History</p>

          <div className="card-no-gap">
            <div className="trade-order-status">
             {isLoading?<Loader color="red" />: <div className="order--table--responsive">
                {userHistoryData.length>0 ? (
                  <div>
                    <table className="order-table">
                      <tr>
                        {columns.map((item) => {
                          return <th>{item}</th>;
                        })}
                      </tr>
                      {userHistoryData.map((item) => (
                        <tr>
                          <td>{DataConvert(item.createdAt)}</td>
                          <td>{item.cash.toFixed(2)}</td>
                          <td>{item.stockPortfolio.toFixed(2)}</td>
                          <td>{item.shortedPortfolio.toFixed(2)}</td>
                          <td>{item.accountValue.toFixed(2)}</td>
                        </tr>
                      ))}
                    </table>
                    <div className="paginationReact">
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      marginPagesDisplayed={2}
                      // pageRangeDisplayed={2}
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
