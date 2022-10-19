import { Loader } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { DataConvert } from "../../helpers/DateTimeConverter";
import { orderService } from "../../services/order.service";
import IncreaseDecrease from "../Table/IncreaseDecrease";

const HoldingTables = () => {
  const [holding, setHolding] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPage, setAllPage] = useState(1);
  const [holdingCurrent, setHoldingCurrent] = useState(0);
  const [holdingPurchase, setHoldingPurchanse] = useState(0);
  const [totalTodayChange, setTotalTodayChange] = useState(0);
  const [totalGainOrLoss, setTotalGainOrLoss] = useState(0);
  const [todayChangePer, setTodayChangePer] = useState(0);
  const [totalChangePer, setTotalChangePer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getAllHolding(currentPage);
  }, [currentPage]);
  console.log(currentPage);
  const getAllHolding = (page) => {
    setIsLoading(true);

    orderService
      .holdingProfitOrLoss(page)
      .then((res) => {
        if (res.success) {
          setHolding(res.holding.docs);

          setAllPage(res.holding.pages);
          setHoldingCurrent(res.holdingCurrent);
          setHoldingPurchanse(res.holdingPurchase);
          setTotalTodayChange(res.totalTodayChange);
          setTotalGainOrLoss(res.totalGainOrLoss);
          setTodayChangePer(
            (res.totalTodayChange * 100) /
              (res.holdingCurrent - res.totalTodayChange)
          );
          setTotalChangePer(
            (res.totalGainOrLoss * 100) /
              (res.holdingCurrent - res.totalGainOrLoss)
          );
        }
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  };
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
    // getAllHolding(selected+1)
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

  const handledMoreBuy = (stock) => {
    console.log(stock);
    orderService
      .StockDetail(stock.symbol)
      .then((res) => {
        console.log(res);
        // dispatch(setSelectedStock({ ...res, action: "Buy" }));
        let data = { action: "Buy", quantity: stock.quantity, ...res };
        console.log(data);
        localStorage.setItem("stock", JSON.stringify(data));
        router.push({
          pathname: "/dashboard/trade-stocks/",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSell = (stock) => {
    orderService
      .StockDetail(stock.symbol)
      .then((res) => {
        let data = { action: "Sell", quantity: stock.quantity, ...res };
        localStorage.setItem("stock", JSON.stringify(data));
        router.push("/dashboard/trade-stocks/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card-no-gap">
      <div className="trade-order-status">
        {isLoading ? (
          <div
            style={{
              width: "100%",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader color="red" />
          </div>
        ) : (
          <div className="order--table--responsive">
            {holding.length > 0 && (
              <table>
                <tr>
                  <td>TOTAL VALUE</td>
                  <td>TODAY'S CHANGE</td>
                  <td>TODAY GAIN/LOSS</td>
                </tr>
                <tr>
                  <td>
                    <h1>₦{holdingCurrent.toFixed(2)}</h1>
                  </td>
                  {IncreaseDecrease(totalTodayChange, todayChangePer)}
                  {IncreaseDecrease(totalGainOrLoss, totalChangePer)}
                </tr>
              </table>
            )}
            {holding.length > 0 && <hr style={{ marginTop: "50px" }} />}
            {holding.length > 0 ? (
              <div>
                <table className="order-table">
                  <tr>
                    {columns.map((item) => {
                      return <th>{item}</th>;
                    })}
                  </tr>
                  {holding.map((item) => (
                    <tr>
                      <td>{item.symbol}</td>
                      <td>{item.description}</td>
                      <td>₦{item.currentPrice.toFixed(2)}</td>
                      {IncreaseDecrease(
                        item.todayChange,
                        item.todayChangePercentage
                      )}
                      <td>₦{item.purchasePrice.toFixed(2)}</td>
                      <td>{item.quantity}</td>
                      <td>₦{item.totalValue.toFixed(2)}</td>
                      {IncreaseDecrease(
                        item.totalGainOrLoss,
                        item.totalGainOrLossPercentage
                      )}
                      <td>
                        <div>
                          <div>
                            <button
                              type="button"
                              className="btn-cancel border-purple "
                              onClick={() => handledMoreBuy(item)}
                            >
                              + Buy More
                            </button>
                            <button
                              type="button"
                              className="btn-cancel border-purple"
                              onClick={() => handleSell(item)}
                            >
                              - Sell
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "50vh",
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
          </div>
        )}
        {allPage > 1 && (
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
        )}
        <div
          className="btn--group form--actions"
          style={{ width: "40%", margin: "40px auto", paddingBottom: "30px" }}
        >
          <Link href="/dashboard/trade-history">
            <a className="btn form--submit">TradeHistory</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HoldingTables;
// history not found ....
{
  /* <div
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
</div> */
}

// trade history

{
  /* <div
className="btn--group form--actions"
style={{ width: "40%", margin: "10px auto" }}
>
<Link href="/dashboard/trade-history">
  <a className="btn form--submit">TradeHistory</a>
</Link>
</div> */
}

// top most ....
// {holding && (
//   <table>
//     <tr>
//       <td>TOTAL VALUE</td>
//       <td>TODAY'S CHANGE</td>
//       <td>TODAY GAIN/LOSS</td>
//     </tr>
//     <tr>
//       <td>
//         <h1>₦{holdingCurrent.toFixed(2)}</h1>
//       </td>
//       {IncreaseDecrease(totalTodayChange, todayChangePer)}
//       {IncreaseDecrease(totalGainOrLoss, totalChangePer)}
//     </tr>
//   </table>
// )}
// {holding && <hr style={{ marginTop: "50px" }} />}

// table ............
{
  /* <table className="order-table">
                  <tr>
                    {columns.map((item) => {
                      return <th>{item}</th>;
                    })}
                  </tr>
                  {holding.map((item) => (
                    <tr>
                      <td>{item.symbol}</td>
                      <td>{item.description}</td>
                      <td>₦{item.currentPrice.toFixed(2)}</td>
                      {IncreaseDecrease(
                        item.todayChange,
                        item.todayChangePercentage
                      )}
                      <td>{item.purchasePrice.toFixed(2)}</td>
                      <td>{item.quantity}</td>
                      <td>{item.totalValue.toFixed(2)}</td>
                      {IncreaseDecrease(
                        item.totalGainOrLoss,
                        item.totalGainOrLossPercentage
                      )}
                      <td>
                        <div>
                          <div>
                            <button
                              type="button"
                              className="btn-cancel border-purple "
                              onClick={() => handledMoreBuy(item)}
                            >
                              + Buy More
                            </button>
                            <button
                              type="button"
                              className="btn-cancel border-purple"
                              onClick={() => handleSell(item)}
                            >
                              - Sell
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </table> */
}

{
  /* <div className="paginationReact">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageCount={allPage}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div> */
}
