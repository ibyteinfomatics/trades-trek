import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setHoldingStock } from "../../actions/holdingOrder";
import { setOpenStock } from "../../actions/openOrder";
import { orderService } from "../../services/order.service";
import TradeOrderTable from "../Table/Table";
export default function TradeOrderStatus() {
  const [openOrders, setOpenOrders] = useState();
  const dispatch=useDispatch()
  const {openOrder}=useSelector((state) => state.openOrderWrapper)
  

  const [cancelOrder, setCancelOrder] = useState();
  const columns = [
    "ORDER DATE & TIME",
    "SYMBOL",
    "STATUS",
    "TRANSACTION",
    "QUANTITY",
    "ORDER PRICE",
    "ACTION",
  ];
  useEffect(()=>{
    setOpenOrders(openOrder)
    orderService.getCancelOrder().then((res)=>{
      setCancelOrder(res.canceledOrders.docs)
  }).catch((err)=>{
    console.log(err)
  })
  },[openOrder])

  useEffect(() => {
    // get open order ..................................
    orderService
      .getOpenOrder()
      .then((res) => {
        dispatch(setOpenStock(res.orders.docs))
        // setOpenOrder(res.orders.docs);
      })
      .catch((err) => {
        console.log(err);
      });

      // get cancel Order .......................  ............  

      orderService.getCancelOrder().then((res)=>{
          setCancelOrder(res.canceledOrders.docs)
      }).catch((err)=>{
        console.log(err)
      })


  }, []);
  return (
    <div className="trade-order-status">
      <div className="table-row-gap">
        <h4 className="font-18 font-bold">Open Trades</h4>
        <p className="font-16 font-gray">
          Note: &lsquo;Volume At Open&lsquo; is the volume recorded at the time
          the trade is executed.
        </p>
      </div>
      {openOrder.length>0&& <TradeOrderTable columns={columns} rows={openOrder} />}

      <div className="bg-purple-block mt-31 mb-31">
        <ul>
          <li>All order times are in Eastern Standard Time.</li>
          <li>
            Market-Open orders can only be cancelled when the markets are
            closed.
          </li>
          <li>
            Limit/Stop orders can be cancelled when the markets are closed, or
            after 20 minutes (depending on competition) of their entry if
            markets are open.
          </li>
          <li>Market orders can’t be cancelled at all.</li>
        </ul>
      </div>
      <div className="table-row-gap">
        <h4 className="font-18 font-bold">Failed Trades</h4>
        <p className="font-16 font-gray">
          Note: &lsquo;Volume At Fail&lsquo; is the volume recorded at the time
          the trade is executed. It will not be the same as the last volume
          recorded for a day, which is what is displayed in historical pricing
          details.
        </p>
      </div>
     {cancelOrder && <TradeOrderTable columns={columns} rows={cancelOrder}/>}
      <div className="table-row-gap show-data mt-26 pb-26">
        <p className="font-16">
          Showing the most recent failed trades from the last 30 days
        </p>
        {/* <div className="btn--group form--actions">
          <Link href="/dashboard/confirm-dialog-box">
            <a className="btn form--submit">Preview Order</a>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
