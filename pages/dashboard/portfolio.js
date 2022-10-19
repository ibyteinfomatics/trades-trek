import React, { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";

import { useSelector } from "react-redux";

import Link from "next/link";
import HighlightTrades from "../../components/HighlightTrades/HighlightTrades";
import HoldingTrades from "../../components/Holding-Short-Trades/HoldingTrades";
import LineChart from "../../components/Chart/LineChart";

export default function Portfolio() {
  const [beginnerOption, setBeginnerOption] = useState(false);
  let { user } = useSelector((state) => state.userWrapper);
  console.log(user);
  return (
    <>
      <Sidebar />
      <div className="site--content">
        <div className="page--title--block">
          <div className="grid--2">
            <div className="grid-block-left wrapper--title">
              <h3>
                Welcome,{" "}
                {user && `${user.firstName || ""} ${user.lastName || ""}`}
              </h3>
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
          <div style={{ margin: "30px 0px" }}>
            <HighlightTrades />
          </div>
          {/* port folio section  */}
          {/* <div className="profileContainer ">
            <div className="profileContainerLeft">
              <div className="profileContainerAccount">
                <div className="profileContainerAccountblock">
                  <span>ACCOUNT VALUE</span>

                  <p>
                  ₦{user?.accountValue
                      ?.toFixed(2)
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
                  </p>
                </div>
                <div className="profileContainerAccountblock">
                  <div>
                    <div>
                      <span>TODAY'S CHANGE</span>

                      <p>+ ₦0.00</p>
                    </div>
                    <div>
                      <span>ANNUAL RETURN</span>

                      <p>0.00%</p>
                    </div>
                  </div>
                </div>
                <div className="profileContainerAccountblock">
                  <div>
                    <div>
                      <span>BUYING POWER</span>

                      <p>
                      ₦{user?.buyingPower
                          ?.toFixed(2)
                          ?.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
                      </p>
                    </div>
                    <div>
                      <span>CASH</span>

                      <p>
                      ₦{user?.cash
                          ?.toFixed(2)
                          ?.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profileContainerRank">
                <div className="rankText">
                  <span>CURRENT RANK</span>
                </div>
                <div className="rank">
                  <p className="yourrank">2,333,220</p>{" "}
                  <svg
                    className="ml-12"
                    width="20"
                    height="26"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9 0.445312L8.46094 0.960937L0.960938 8.46094L2.03906 9.53906L8.25 3.32812V18H9.75V3.32812L15.9609 9.53906L17.0391 8.46094L9.53906 0.960937L9 0.445312Z"
                      fill="#008000"
                    />
                  </svg>{" "}
                  <p className="players">of 7777,33,3 players</p>
                </div>
                <div className="rankText">
                  <span>TOP PLAYER</span>
                </div>
                <div className="rankText">
                  <span><Link href='#'>tradtrak</Link> ₦99,998,888,88.00</span>
                </div>
              </div>
            </div>
            <div className="profileContainerRight">
              <div className="profileContainerRightBlock">
                <div className="profileContainerRightGraph">
                  <div>
                    <span>1W</span>
                    <span>1M</span>
                    <span>3M</span>
                    <span>6M</span>
                    <span>1Y</span>
                  </div>
                  <LineChart />
                </div>
                <div
                  className="btn--group form--actions"
                  style={{ margin: "10px", width: "35vw" }}
                >
                  <Link
                    href="/dashboard/performance-history"
                    style={{ padding: "10px 20px" }}
                  >
                    <a className="btn form--submit">Performance History</a>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
         <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
         <div
            className="btn--group form--actions"
            style={{ margin: "10px", width: "35vw" }}
          >
            <Link
              href="/dashboard/performance-history"
              style={{ padding: "10px 20px" }}
            >
              <a className="btn form--submit">Performance History</a>
            </Link>
          </div>
         </div>
          <HoldingTrades />
        </div>
      </div>
    </>
  );
}
