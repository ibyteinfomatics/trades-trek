import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { DataConvert, TimeConverter } from "../../helpers/DateTimeConverter";
import { orderService } from "../../services/order.service";

export default function TradeFailedOrders({modelOpened }) {
  const [failedOrders, setfailedOrders] = useState();
  const [failedAllPage, setfailedAllPage] = useState(1);

  const columns = [
    "ORDER DATE & TIME",
    "SYMBOL",
    "STATUS",
    "TRANSACTION",
    "QUANTITY",
    "ORDER PRICE",
    "Processed at",
    "Order Id"
  ];

  useEffect(() => {
    orderService
      .getFailedOrders(1)
      .then((res) => {
        console.log(res);
        if (res.success) {
          setfailedOrders(res.failedOrders.docs);
          setfailedAllPage(res.failedOrders.pages);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [modelOpened]);
  const handlePageClick = ({ selected }) => {
    orderService
      .getFailedOrders(selected + 1)
      .then((res) => {
        console.log(res);
        if (res.success) {
          setfailedOrders(res.failedOrders.docs);
          setfailedAllPage(res.failedOrders.pages);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="trade-order-status">
      {failedOrders && (
        <div className="order--table--responsive">
          <table className="order-table">
            <tr>
              {columns.map((item) => {
                return <th>{item}</th>;
              })}
            </tr>
            {failedOrders?.map((item) => {
              return (
                <tr>
                  <td>
                    {DataConvert(item.createdAt)}{" "}
                    <span className="order-time">
                      {TimeConverter(item.createdAt)}
                    </span>
                  </td>

                  <td>{item.symbol}</td>
                  <td>failed</td>
                  <td>
                    {item.action}
                    {item.orderType == "Limit" ? (
                      <span className="order-time">at Limit</span>
                    ) : (
                      <span className="order-time">at Market Open</span>
                    )}
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                    {item.orderType == "Limit" ? (
                      <span className="order-time">Limit - ₦{item.rate}</span>
                    ) : (
                      "n/a"
                    )}
                  </td>
                  <td>
                    {DataConvert(item.createdAt)}{" "}
                    <span className="order-time">
                      {TimeConverter(item.createdAt)}
                    </span>
                  </td>
                  <td>{item._id}</td>
                </tr>
              );
            })}
          </table>
          <div className="paginationReact tablepaginate">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              marginPagesDisplayed={2}
              pageCount={failedAllPage}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      )}
    </div>
  );
}
