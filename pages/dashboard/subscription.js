import Link from "next/link";
import React, { useEffect, useState } from "react";

import MarketOpenClose from "../../components/MarketOpenClose/MarketOpenClose";

import Sidebar from "../../components/Sidebar/Sidebar";
import { userService } from "../../services";
import Iframe from 'react-iframe'
export default function Sub() {
  const [allSubscription, setAllSubscription] = useState();
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
  console.log(allSubscription);

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
              {allSubscription?.map((item) => {
                return (
                  <div className="block--info">
                    <div className="info--title">
                      <span>{item?.packageAmount}</span>
                      <span>{item?.packageDuration.toUpperCase()} Fee</span>
                      {/* <p>{item?.packageDuration}</p> */}
                    </div>
                    <div className="info--text">
                      <p>
                        7 days free usage. Payment will commence at end of 7
                        days. Cancel anytime before then, to halt payment
                      </p>
                    </div>
                    <div className="info--button" style={{marginBottom:'20px'}}>
                      <Link href={`https://paystack.com/pay/${item.slug}`}>
                        <a className="btn">Premimum</a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
