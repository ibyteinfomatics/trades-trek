import Link from "next/link";
import React, { useEffect, useState } from "react";

import MarketOpenClose from "../../components/MarketOpenClose/MarketOpenClose";

import Sidebar from "../../components/Sidebar/Sidebar";
import { userService } from "../../services";
import Iframe from "react-iframe";
import { useSelector } from "react-redux";
import UnsubscribeModel from "../../components/Modal/UnsubscribeModel";
export default function Sub() {
  let { user } = useSelector((state) => state.userWrapper);

  const [allSubscription, setAllSubscription] = useState();
  const [modelOpened, setModelOpened]=useState(false)
  const [subscriptionId,setSubscriptionId]=useState('')
  useEffect(() => {
    userService
      .getAllSubscription()
      .then((res) => {
        if (res.success) {
          setAllSubscription(res.data);
        }
      })
      .catch((err) => console.log(err));
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
            <MarketOpenClose />
            <div
              className="trade-data"
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {allSubscription?.map((item, index) => {
                
                return (
                  <div key={index} className="block--info">
                    <div className="info--title">
                      <span>{item?.packageAmount}</span>
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
                        <a className="btn">Premimum</a>
                      </Link>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <UnsubscribeModel modelOpened={modelOpened} setModelOpened={setModelOpened} id={subscriptionId} />
    </>
  );
}
