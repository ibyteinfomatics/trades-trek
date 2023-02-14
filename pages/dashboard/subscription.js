import Link from "next/link";
import React, { useEffect, useState } from "react";

import MarketOpenClose from "../../components/MarketOpenClose/MarketOpenClose";

import Sidebar from "../../components/Sidebar/Sidebar";
import { userService } from "../../services";
import Iframe from "react-iframe";
import { useSelector } from "react-redux";
import UnsubscribeModel from "../../components/Modal/UnsubscribeModel";
import { Loader } from "@mantine/core";
import SubscriptionExpiredMessage from "../../components/MarketOpenClose/SubscriptionExpiredMessage";
export default function Sub() {
  let { user } = useSelector((state) => state.userWrapper);

  const [allSubscription, setAllSubscription] = useState();
  const [modelOpened, setModelOpened]=useState(false)
  const [subscriptionId,setSubscriptionId]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    setIsLoading(true)
    userService
      .getAllSubscription()
      .then((res) => {
        if (res.success) {
          setAllSubscription(res.data);
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)

      });
  }, []);
  const Unsubscribe=(id)=>{
setModelOpened(true)
setSubscriptionId(id)
  }

  return (
    <>
      <Sidebar />
      <div className="site--content">
        <div className="page--title--block">
          <div className="card-no-gap">
    <SubscriptionExpiredMessage />

          {isLoading?<div
            style={{
              width: "100%",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader color="#8000ff" />
          </div> :  <div
              className="trade-data wrapper--text card--grid card-col-gap"
            >
              {allSubscription&& allSubscription?.map((item, index) => {
                
                return (
                  <div key={index} className={`block--info subscription ${item?._id==user?.user?.subscriptionId && 'activeSubscription'}`}>
                    <div className="info--title">
                      <span><span className="currency">₦</span> {item?.packageAmount}</span>
                      <span>{item?.packageDuration.toUpperCase()} Fee</span>
                      {/* <p>{item?.packageDuration}</p> */}
                    </div>
                    <div className="info--text">
                      <p>
                      {item?.packageDesc}
                      </p>
                    </div>
                 <div
                      className="info--button"
                      style={{ marginBottom: "20px" }}
                    >
                      {   item.packageDuration=='trial'?"":item?._id==user?.user?.subscriptionId?<Link href='#'>
                        <a onClick={()=>Unsubscribe(item?._id)} className="btn">Unsubscribe</a>
                      </Link>:<Link href={`https://paystack.com/pay/${item.slug}`}>
                        <a className="btn">{`${item?.packageDuration.toUpperCase()} SUBSCRIPTION` }</a>
                      </Link>}
                    </div>
                    {/* {item?._id==user?.user?.subscriptionId && <SubscriptionExpire /> } */}
                  </div>
                );
              })}
            </div>}
          </div>
        </div>
      </div>

      <UnsubscribeModel modelOpened={modelOpened} setModelOpened={setModelOpened} id={subscriptionId} />
    </>
  );
}
