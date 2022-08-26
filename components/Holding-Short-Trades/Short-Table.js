import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setSelectedStock } from "../../actions/setStock";
import { orderService } from "../../services/order.service";
import IncreaseDecrease from "../Table/IncreaseDecrease";

const ShortTable = () => {
  const [short, setShort] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [allPage, setAllPage] = useState(1);
  const [shortCurrent, setShortCurrent] = useState(0);
  const [shortPurchase, setShortPurchanse] = useState(0);
  const [totalTodayChange, setTotalTodayChange] = useState(0);
  const [totalGainOrLoss, setTotalGainOrLoss] = useState(0);
  const [todayChangePer, setTodayChangePer] = useState(0);
  const [totalChangePer, setTotalChangePer] = useState(0);
  const router=useRouter();
  const dispatch=useDispatch()

  useEffect(() => {
    orderService
      .shortProfitOrLoss(currentPage)
      .then((res) => {
        if (res.success) {
          setShort(res.short.docs);
          setCurrentPage(res.short.page);
          setAllPage(res.short.pages);
          setShortCurrent(res.shortCurrent);
          setShortPurchanse(res.shortPurchase);
          setTotalTodayChange(res.totalTodayChange);
          setTotalGainOrLoss(res.totalGainOrLoss);
          setTodayChangePer(
            (res.totalTodayChange * 100) /
              (res.shortCurrent - res.totalTodayChange)
          );
          setTotalChangePer(
            (res.totalGainOrLoss * 100) /
              (res.shortCurrent - res.totalGainOrLoss)
          );
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
    orderService
      .shortProfitOrLoss(selected + 1)
      .then((res) => {
        if (res.success) {
          setShort(res.short.docs);
          setCurrentPage(res.short.page);
          setAllPage(res.short.pages);
          setShortCurrent(res.shortCurrent);
          setShortPurchanse(res.shortPurchase);
          setTotalTodayChange(res.totalTodayChange);
          setTotalGainOrLoss(res.totalGainOrLoss);
          setTodayChangePer(
            (res.totalTodayChange * 100) /
              (res.shortCurrent - res.totalTodayChange)
          );
          setTotalChangePer(
            (res.totalGainOrLoss * 100) /
              (res.shortCurrent - res.totalGainOrLoss)
          );
        }
      })
      .catch((err) => console.log(err));
  };
  const columns = [
    "Symbol",
    "Description",
    "Current Price",
    "Today's Change",
    "Purchase Price",
    "QTY",
    "Total Value",
    "Total Gain/Loss",
    "Trade Actions",
  ];
  const handleBuyCover = (stock) => {
    orderService
      .StockDetail(stock.symbol)
      .then((res) => {
        dispatch(setSelectedStock({ ...res, action: "Buy To Cover" }));

        router.push("/dashboard/trade-stocks/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handledShort = (stock) => {
    orderService
      .StockDetail(stock.symbol)
      .then((res) => {
        dispatch(setSelectedStock({ ...res, action: "Short" }));

        router.push("/dashboard/trade-stocks/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div
        style={{
          marginBottom: "73px",
          padding: "53px",
          boxShadow: "5px 5px 5px 5px #f7f7f7",
        }}
      >
        {short && (
          <table>
            <tr>
              <td>TOTAL VALUE</td>
              <td>TODAY'S CHANGE</td>
              <td>TODAY GAIN/LOSS</td>
            </tr>
            <tr>
              <td>
                <h1>₦{shortCurrent.toFixed(3)}</h1>
              </td>
              {IncreaseDecrease(totalTodayChange, todayChangePer)}
              {IncreaseDecrease(totalGainOrLoss, totalChangePer)}
            </tr>
          </table>
        )}
        <hr style={{ marginTop: "50px" }} />
        <div className="tab-data order-status">
          {short ? (
            <div>
              <table className="order-table">
                <tr>
                  {columns.map((item) => {
                    return <th>{item}</th>;
                  })}
                </tr>
                {short.map((item) => (
                  <tr>
                    <td>{item.symbol}</td>
                    <td>{item.description}</td>
                    <td>₦{item.currentPrice.toFixed(2)}</td>
                    {IncreaseDecrease(
                      item.todayChange,
                      item.todayChangePercentage
                    )}
                    <td>{item.shortPrice.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>{item.totalValue.toFixed(2)}</td>
                    {IncreaseDecrease(
                      item.totalGainOrLoss,
                      item.totalGainOrLossPercentage
                    )}
                    <td>
                    <div>
                            <button
                              type="button"
                              className="btn-cancel border-purple "
                              onClick={() => handledShort(item)}
                            >
                              + Increase Short Position
                            </button>
                            <button
                              type="button"
                              className="btn-cancel border-purple"
                              onClick={() => handleBuyCover(item)}
                            >
                              - Buy To Cover
                            </button>
                          </div>
                    </td>
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
          <div
            className="btn--group form--actions"
            style={{ width: "40%", margin: "10px auto" }}
          >
            <Link href="/dashboard/trade-history">
              <a className="btn form--submit">TradeHistory</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortTable;
