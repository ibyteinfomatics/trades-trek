import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch,useSelector } from "react-redux";
import { setHoldingStock } from "../../actions/holdingOrder";
import { setOpenStock } from "../../actions/openOrder";
import { orderService } from "../../services/order.service";
import FailedOrderTable from "../Table/FailedOrderTable";
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
    "Processed at",
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
        <h4 className="font-18 " style={{marginTop:'20px',fontSize:'30px',marginBottom:'20px'}}>Open Trades</h4>
        <p className="font-16 font-gray" >
          Note: Open trades is a list of all your pendings transactions.
        </p>
      </div>
      {openOrder.length>0&& <TradeOrderTable columns={columns} rows={openOrder} />}
      {/* <div className="paginationReact tablepaginate">
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel=">"
                      // onPageChange={handlePageClick}
                      marginPagesDisplayed={2}
                      pageCount={10}
                      previousLabel="<"
                      renderOnZeroPageCount={null}
                    />
                    </div> */}

      <div className="bg-purple-block mt-31 mb-31">
        <ul>
          <li>All order times are in West Africa Time.</li>
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
        <h4 className="font-18 " style={{marginTop:'20px',fontSize:'30px',marginBottom:'20px'}}>Failed Trades</h4>
        <p className="font-16 font-gray">
          Note: &lsquo;Volume At Fail&lsquo; is the volume recorded at the time
          the trade is executed. It will not be the same as the last volume
          recorded for a day, which is what is displayed in historical pricing
          details.
        </p>
      </div>
     {cancelOrder && <FailedOrderTable  rows={cancelOrder}/>}
      <div className="table-row-gap show-data mt-26 pb-26">
        <p className="font-16">
          Showing the most recent failed trades from the last 30 days
        </p>
        <div className="btn--group form--actions">
          <Link href="/dashboard/portfolio">
            <a className="btn form--submit">View Holdings</a>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
