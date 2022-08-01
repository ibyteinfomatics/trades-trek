import React, { useState ,useEffect} from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sidebar from '../../components/Sidebar/Sidebar';
import TradeOrderTable from '../../components/Table/Table';
import Stocks from '../../components/TradeStocks/Stocks';
import TradeOrderStatus from '../../components/TradeStocks/TradeOrderStatus';
import {orderService} from '../../services/order.service';
import { useDispatch, useSelector } from 'react-redux';
import MarketOpenClose from '../../components/MarketOpenClose/MarketOpenClose';


export default function Portfolio() {

  const [beginnerOption, setBeginnerOption] = useState(false);
  const [holdingOrder,setHoldingOrder]=useState();
  const [openOrder,setOpenOrder]=useState()
  let { user } = useSelector((state) => state.userWrapper);

  const columns=["ORDER DATE & TIME","SYMBOL","STATUS","TRANSACTION","QUANTITY","ORDER PRICE","ACTION"]
  useEffect(()=>{

    
    

    // get holding order .....................  
    orderService.getHoldingOrder().then((res)=>{
      setHoldingOrder(res.userHoldings.docs)
     }).catch((err)=>{
       console.log(err)
     }
     )

    // get open order .................................. 
    orderService.getOpenOrder().then((res)=>{
      setOpenOrder(res.orders.docs)
     }).catch((err)=>{
       console.log(err)
     }
     )
     
     
     },[])
  return (
    <>
      <Sidebar />
      <div className="site--content">
        <div className="page--title--block">
          <div className="grid--2">
            <div className="grid-block-left wrapper--title">
              <h3>Welcome, {user && user.fullName}</h3>
            </div>
            <div className="grid-block-right right-align">
              <div className="beginner-option">
                Current Competition
                <span
                  className="btn"
                  onClick={() => setBeginnerOption(!beginnerOption)}
                >
                  Beginners
                </span>
                {beginnerOption && (
                  <div className="option--list">
                    <ul>
                      <li>Beginners </li>
                      <li>Beginners 1</li>
                      <li>Beginners 2</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="top--value--bar">
            <div className="col-block">
              <p className="data-title">
                Account Value{" "}
                <span className="font-20 font-bold">₦{user && user.currentAmount?.toFixed(3)}</span>
              </p>
            </div>
            <div className="col-block">
              <p className="data-title">
                Buying Power{" "}
                <span className="font-20 font-bold">₦{user && user.currentAmount?.toFixed(3)}</span>
              </p>
            </div>
            <div className="col-block">
              <p className="data-title">
                Cash <span className="font-20 font-bold">₦{user && user.investedAmount?.toFixed(3)}</span>
              </p>
            </div>
          </div>
          <div className="card-no-gap">
            <div className="trade-data">
              <Tabs>
                <TabList>
                  <Tab>Open Order</Tab>
                  <Tab>Holding Order</Tab>
                </TabList>

                
                <TabPanel>
                  <div className="tab-data order-status">
                    <MarketOpenClose />
                    {openOrder&& <TradeOrderTable columns={columns} rows={openOrder} tableStatus='openOrder'/>}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-data order-status">
                  <MarketOpenClose />
                    {holdingOrder&& <TradeOrderTable columns={columns} rows={holdingOrder} tableStatus='holding'/>}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
