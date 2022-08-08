import React, { useState ,useEffect} from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sidebar from '../../components/Sidebar/Sidebar';
import TradeOrderTable from '../../components/Table/Table';
import Stocks from '../../components/TradeStocks/Stocks';
import TradeOrderStatus from '../../components/TradeStocks/TradeOrderStatus';
import {orderService} from '../../services/order.service';
import { useDispatch, useSelector } from 'react-redux';
import MarketOpenClose from '../../components/MarketOpenClose/MarketOpenClose';
import { setOpenStock } from '../../actions/openOrder';
import HoldingTable from '../../components/Table/HoldingTable';
import HoldingInfo from '../../components/Table/HoldingInfo';
import { AccountValue } from '../../helpers/UserAccount';


export default function Portfolio() {

  const [beginnerOption, setBeginnerOption] = useState(false);
  const [holdingOrder,setHoldingOrder]=useState();
  const [openOrders,setOpenOrders]=useState([])
  const [refreshHolding,setRefreshHolding]=useState(false)
  let { user } = useSelector((state) => state.userWrapper);
  let {openOrder}=useSelector((state)=>state.openOrderWrapper)

  const dispatch=useDispatch()

  const columns=["ORDER DATE & TIME","SYMBOL","STATUS","TRANSACTION","QUANTITY","ORDER PRICE","PROCESSED AT","ACTION"]
  useEffect(()=>{
    setOpenOrders(openOrder)
  },[openOrder])


  // holding order .........................
  // useEffect(()=>{
  //   orderService.profitOrLoss().then((res)=>{
  //     setHoldingOrder(res)
  //    }).catch((err)=>{
  //      console.log(err)
  //    }
  //    )
  // },[refreshHolding])
  
  useEffect(()=>{

    
    

    // get holding order with profit or loss .....................  
    orderService.profitOrLoss().then((res)=>{
      setHoldingOrder(res)
     }).catch((err)=>{
       console.log(err)
     }
     )

    // get open order .................................. 
    orderService.getOpenOrder().then((res)=>{
      setOpenOrders(res.orders.docs)
      dispatch(setOpenStock(res.orders.docs))
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
                <span className="font-20 font-bold">₦{user && user.accountValue?.toFixed(3)}</span>
              </p>
            </div>
            <div className="col-block">
              <p className="data-title">
                Buying Power{" "}
                <span className="font-20 font-bold">₦{user && user.buyingPower?.toFixed(3)}</span>
              </p>
            </div>
            <div className="col-block">
              <p className="data-title">
                Cash <span className="font-20 font-bold">₦{user && user.cash?.toFixed(3)}</span>
              </p>
            </div>
          </div>
          <div className="card-no-gap">
            <div className="trade-data">
              <Tabs>
                <TabList>
                <Tab>Holding Order</Tab>

                  <Tab>Open Order</Tab>
                </TabList>

                
               
                <TabPanel>
                  <div className="tab-data order-status">
                  <MarketOpenClose />

                    {holdingOrder&& <HoldingTable setRefresh={setRefreshHolding} refresh={refreshHolding} rows={holdingOrder} tableStatus='holding'/>}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-data order-status">
                    <MarketOpenClose />
                    {openOrders.length>0&& <TradeOrderTable columns={columns} rows={openOrders} tableStatus='openOrder'/>}
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
