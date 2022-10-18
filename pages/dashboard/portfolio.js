import React, { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";

import { useSelector } from "react-redux";

import Link from "next/link";
import HighlightTrades from "../../components/HighlightTrades/HighlightTrades";
import HoldingTrades from "../../components/Holding-Short-Trades/HoldingTrades";

export default function Portfolio() {
  const [beginnerOption, setBeginnerOption] = useState(false);
  let { user } = useSelector((state) => state.userWrapper);

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
          <div style={{ margin: "30px 0px" }}>
            <HighlightTrades />
          </div>
          <div
            className="btn--group form--actions"
            style={{ width: "40%", margin: "10px auto" }}
          >
            <Link href="/dashboard/performance-history">
              <a className="btn form--submit">Performance History</a>
            </Link>
          </div>
          <HoldingTrades />
        </div>
      </div>
    </>
  );
}
