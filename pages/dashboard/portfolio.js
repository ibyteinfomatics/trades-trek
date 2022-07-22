import React, { useState ,useEffect} from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sidebar from '../../components/Sidebar/Sidebar';
import TradeOrderTable from '../../components/Table/Table';
import Stocks from '../../components/TradeStocks/Stocks';
import TradeOrderStatus from '../../components/TradeStocks/TradeOrderStatus';
import {orderService} from '../../services/order.service';

export default function Portfolio() {

  const [beginnerOption, setBeginnerOption] = useState(false);
  const [holdingOrder,setHoldingOrder]=useState();
  const [openOrder,setOpenOrder]=useState()
  const columns=["ORDER DATE & TIME","SYMBOL","STATUS","TRANSACTION","QUANTITY","ORDER PRICE","PROCESSED AT","EXPIRE ON","ORDER #","ACTION"]
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
      setOpenOrder(res.openOrders.docs)
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
              <h3>Welcome, John Adams</h3>
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
                <span className="font-20 font-bold">₦100,000.00</span>
              </p>
            </div>
            <div className="col-block">
              <p className="data-title">
                Buying Power{" "}
                <span className="font-20 font-bold">₦100,000.00</span>
              </p>
            </div>
            <div className="col-block">
              <p className="data-title">
                Cash <span className="font-20 font-bold">₦100,000.00</span>
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
                    <div className="status-summary font-18">
                      <span>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12.5" cy="12.5" r="12.5" fill="#00FFA0" />
                          <path d="M19.7244 7.70177L19.6227 7.60791L19.521 7.70177L10.8422 15.71L7.3851 12.5235L7.38444 12.5228L7.04211 12.2035L6.94035 12.1085L6.83807 12.2029L6.14828 12.8394L6.02815 12.9502L6.14889 13.0604L6.49503 13.3763L6.49569 13.3769L10.7405 17.2972L10.8422 17.3911L10.9439 17.2972L20.4142 8.55874L20.5337 8.4485L20.4142 8.33826L19.7244 7.70177Z" fill="white" stroke="white" stroke-width="0.3" />
                        </svg>
                      </span>
                      Market is open.  Opens in 3hr, 53min
                    </div>
                    {openOrder&& <TradeOrderTable columns={columns} rows={openOrder}/>}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-data order-status">
                    <div className="status-summary font-18">
                      <span>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12.5" cy="12.5" r="12.5" fill="#00FFA0" />
                          <path d="M19.7244 7.70177L19.6227 7.60791L19.521 7.70177L10.8422 15.71L7.3851 12.5235L7.38444 12.5228L7.04211 12.2035L6.94035 12.1085L6.83807 12.2029L6.14828 12.8394L6.02815 12.9502L6.14889 13.0604L6.49503 13.3763L6.49569 13.3769L10.7405 17.2972L10.8422 17.3911L10.9439 17.2972L20.4142 8.55874L20.5337 8.4485L20.4142 8.33826L19.7244 7.70177Z" fill="white" stroke="white" stroke-width="0.3" />
                        </svg>
                      </span>
                      Market is open.  Opens in 3hr, 53min
                    </div>
                    {holdingOrder&& <TradeOrderTable columns={columns} rows={holdingOrder}/>}
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
