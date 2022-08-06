import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Sidebar from "../../components/Sidebar/Sidebar";
import Stocks from "../../components/TradeStocks/Stocks";
import TradeOrderStatus from "../../components/TradeStocks/TradeOrderStatus";
import { useDispatch, useSelector } from "react-redux";
import MarketOpenClose from "../../components/MarketOpenClose/MarketOpenClose";
import { AccountValue } from "../../helpers/UserAccount";
import { useRouter } from "next/router";

export default function TradesTrek() {
  const [beginnerOption, setBeginnerOption] = useState(false);
  const [showTrade, setShowTrade] = useState(true);
  const [stockName,setStockName]=useState('')
  const [userData,setUserData]=useState({})
  const router=useRouter()
  let { user } = useSelector((state) => state.userWrapper);
  useEffect(()=>{
    setUserData(user)
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
                <span className="font-20 font-bold">
                  ₦
                  {userData && userData.accountValue?.toFixed(3)
                   }
                </span>
              </p>
            </div>
            <div className="col-block">
              <p className="data-title">
                Buying Power{" "}
                <span className="font-20 font-bold">
                  ₦{userData && userData.buyingPower?.toFixed(3)}
                </span>
              </p>
            </div>
            <div className="col-block">
              <p className="data-title">
                Cash{" "}
                <span className="font-20 font-bold">
                  ₦{userData && userData.cash?.toFixed(3)}
                </span>
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
                    <MarketOpenClose />
                    {showTrade ? (
                      <Stocks setShowTrade={setShowTrade} setStockName={setStockName} />
                    ) : (
                      <div>
                        <h1>{stockName}</h1>
                        Trade Confirmation Buy Market order for META received.
                        Your order has been received by our system and it will
                        be executed shortly. To submit another stock order,
                        click here To return to your portfolio summary, click
                        here
                        <button onClick={()=>setShowTrade(true)}>Click to stock</button>
                        <button onClick={()=>{
                          router.push({
                pathname:"/dashboard/portfolio",
              })
                        }}>Click to portfolio</button>
                      </div>
                    )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-data order-status">
                    <MarketOpenClose />
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
