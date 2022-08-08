import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Sidebar from "../../components/Sidebar/Sidebar";
import Stocks from "../../components/TradeStocks/Stocks";
import TradeOrderStatus from "../../components/TradeStocks/TradeOrderStatus";
import { useDispatch, useSelector } from "react-redux";
import MarketOpenClose from "../../components/MarketOpenClose/MarketOpenClose";
import { AccountValue } from "../../helpers/UserAccount";
import { useRouter } from "next/router";
import Link from "next/link";
import { userService } from "../../services";
import StockConfirmation from "../../components/SuggestCard/StockConfirmation";
import { setUser } from "../../actions/users";
import { orderService } from "../../services/order.service";
import { setPopularCompany } from "../../actions/topCompany";

export default function TradesTrek() {
  const [beginnerOption, setBeginnerOption] = useState(false);
  const [showTrade, setShowTrade] = useState(true);
  const [stockName, setStockName] = useState("");
  const [userData, setUserData] = useState({});
  const dispatch=useDispatch()

  const router = useRouter();
  let { user } = useSelector((state) => state.userWrapper);
  useEffect(() => {
    setUserData(user);
  }, [user]);
  useEffect(()=>{
    userService.userInfo().then((res)=>{
      setUserData(res.message)
      dispatch(setUser(res.message))
    }).catch((err)=>console.log(err))
  },[showTrade])

  useEffect(()=>{
   orderService.popularCompanies().then((res)=>{
    dispatch(setPopularCompany(res))
   }).catch((err)=>console.log('error'))
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
                  ₦{userData && userData.accountValue?.toFixed(3)}
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
                      <Stocks
                        setShowTrade={setShowTrade}
                        setStockName={setStockName}
                      />
                    ) : (
                     <StockConfirmation  stockName={stockName} setShowTrade={setShowTrade} />
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
