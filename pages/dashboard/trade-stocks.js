import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Sidebar from "../../components/Sidebar/Sidebar";
import Stocks from "../../components/TradeStocks/Stocks";
import TradeOrderStatus from "../../components/TradeStocks/TradeOrderStatus";
import { useDispatch, useSelector } from "react-redux";
import MarketOpenClose from "../../components/MarketOpenClose/MarketOpenClose";
import { AccountValue } from "../../helpers/UserAccount";
import { useRouter } from "next/router";
import { userService } from "../../services";
import StockConfirmation from "../../components/SuggestCard/StockConfirmation";
import { setUser } from "../../actions/users";
import { orderService } from "../../services/order.service";
import { setPopularCompany } from "../../actions/topCompany";

export default function TradesTrek() {
  const [beginnerOption, setBeginnerOption] = useState(false);
  const [showTrade, setShowTrade] = useState(true);
  const [stockName, setStockName] = useState("");
  const [stockAction,setStockAction]=useState('')
  const [tabIndex, setTabIndex] = useState(0);
  // const []
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
useEffect(() => {
 let index=localStorage.getItem('indexTrade')
 if(index){
  console.log(typeof index)
  setTabIndex(Number(index))
 }
}, [])


const handleTab=(index)=>{
  setTabIndex(index)
  localStorage.setItem('indexTrade',index)
}
 
  return (
    <>
      <Sidebar />
      <div className="site--content">
        <div className="page--title--block">
          <div className="grid--2">
            <div className="grid-block-left wrapper--title">
              <h3>Welcome, {user && `${user.firstName || ""} ${user.lastName || ""}`}</h3>
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
                {/* ₦{(userData.accountValue?.toFixed(2))?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                ₦{userData && (userData.accountValue?.toFixed(2))?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>
            </div>
            <div className="col-block">
              <p className="data-title">
                Buying Power{" "}
                <span className="font-20 font-bold">
                ₦{userData && (userData.buyingPower?.toFixed(2))?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>
            </div>
            <div className="col-block">
              <p className="data-title">
                Cash{" "}
                <span className="font-20 font-bold">
                ₦{userData && (userData.cash?.toFixed(2))?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>
            </div>
          </div>
          <div className="card-no-gap">
            <div className="trade-data">
              <Tabs defaultIndex={0}  selectedIndex={tabIndex} onSelect={(index) => handleTab(index)}>
                <TabList>
                  <Tab>Stocks</Tab>
                  <Tab>Order Status</Tab>
                </TabList>
                <MarketOpenClose />
                <TabPanel>
                  <div className="tab-data">
                    {/* <Stocks /> */}
                    {showTrade ? (
                      <Stocks
                        setShowTrade={setShowTrade}
                        setStockName={setStockName}
                        setStockAction={setStockAction}
                      />
                    ) : (
                     <StockConfirmation stockAction={stockAction}  stockName={stockName} setShowTrade={setShowTrade} />
                    )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-data order-status">
                    <TradeOrderStatus setShowTrade={setShowTrade} />
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
