import React, { useEffect, useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sidebar from '../../components/Sidebar/Sidebar';
import Stocks from '../../components/TradeStocks/Stocks';
import TradeOrderStatus from '../../components/TradeStocks/TradeOrderStatus';
import { useDispatch, useSelector } from 'react-redux';
import NigerianTimeZone from '../../helpers/Negerian-TimeZone';
import moment from 'moment-timezone';


export default function TradesTrek() {
  const [beginnerOption, setBeginnerOption] = useState(false);
  let { user } = useSelector((state) => state.userWrapper);
  const [openTime,setOpenTime]=useState();
  const [openMarket,setMarketOpen]=useState();
  const [closeMarket,setCloseMarket]=useState()

  useEffect(()=>{
   const temp= NigerianTimeZone()
     const formatDate = moment(temp).format('h:mm:ss')
    //  if()
   console.log(typeof formatDate)
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
                  <Tab>Stocks</Tab>
                  <Tab>Order Status</Tab>
                </TabList>

                <TabPanel>
                  <div className="tab-data">
                    <div className="status-summary font-18">
                      <span>
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.375 0.25C3.89746 0.25 0.25 3.89746 0.25 8.375C0.25 12.8525 3.89746 16.5 8.375 16.5C12.8525 16.5 16.5 12.8525 16.5 8.375C16.5 3.89746 12.8525 0.25 8.375 0.25ZM8.375 1.5C12.1787 1.5 15.25 4.57129 15.25 8.375C15.25 12.1787 12.1787 15.25 8.375 15.25C4.57129 15.25 1.5 12.1787 1.5 8.375C1.5 4.57129 4.57129 1.5 8.375 1.5ZM7.75 4V10.25H9V4H7.75ZM7.75 11.5V12.75H9V11.5H7.75Z"
                            fill="#F45531"
                          />
                        </svg>
                      </span>
                      Market is closed. Opens in 3hr, 53min
                    </div>
                    <Stocks />
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
                    <TradeOrderStatus />
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
