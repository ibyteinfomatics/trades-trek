import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HighlightTrades from "../../components/HighlightTrades/HighlightTrades";
import NewsListData, {
  NewsListData2,
} from "../../components/NewsList/NewsListView";
import LeaderView, {
  LeaderView2,
} from "../../components/SectorLeaders/LeaderView";
import Sidebar from "../../components/Sidebar/Sidebar";
import GainerView, {
  GainerView2,
} from "../../components/TopGainers/GainerView";
import LoserView, { LoserView2 } from "../../components/TopLosers/LoserView";
import WatchListData, {
  WatchListData2,
} from "../../components/WatchList/WatchListData";
import { useSelector } from "react-redux";

import NigerianTimeZone from "../../helpers/Negerian-TimeZone";
import moment from "moment-timezone";
import SelectGame from "../../components/SelectGame/SelectGame";
import { TodayPerChange } from "../../helpers/TodayChange";
import SubscriptionExpiredMessage from "../../components/MarketOpenClose/SubscriptionExpiredMessage";
import { stockService } from "../../services/stock.service";

export default function Home() {
  
  const [showGainersList, setShowGainersList] = useState(false);
  const [showLosersList, setShowLosersList] = useState(false);
  const [showLeadersList, setShowLeadersList] = useState(false);
  const [showNewsList, setShowNewsList] = useState(false);
  const [todaytime, setTodayTime] = useState(new Date());
  
  let { user } = useSelector((state) => state.userWrapper);

  useEffect(() => {
    var today = new Date();
    today.setMinutes(today.getMinutes() - 10);
    setTodayTime(today);
   
  }, []);
 

  return (
    <>
      <Sidebar />

      <div className="site--content">
        {/* <UpgradePlan /> */}
        <HighlightTrades />
        {/* welcome block */}
        <div className="card--wrapper">
          <SubscriptionExpiredMessage />

          <div style={{ margin: "20px" }}>
            <SelectGame />
          </div>

          <div className="wrapper--text card--grid card--grid--60-40">
            <div className="welcome--image">
              <Image
                src="/images/home--page.jpg"
                layout="responsive"
                width={775}
                height={365}
                alt=""
              />
            </div>
            <div className="card--style portfolio--card">
              <div className="card--title">
                <h1>
                  Welcome, {(user && user?.user?.firstName) || ""}{" "}
                  {(user && user?.user?.lastName) || ""}
                </h1>
              </div>
              <div className="card--list">
                <div className="card--title">
                  <p>Overview</p>
                </div>
                <ul className="option--list">
                  <li>
                    <span>Account Value</span>
                    <span>
                      ₦
                      {user &&
                        (
                          user?.portfolio?.accountValue +
                          user?.portfolio?.profitOrLossToday
                        )
                          ?.toFixed(2)
                          ?.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </li>
                  <li>
                    <span>Today's Change</span>
                    <span>
                      +₦
                      {(
                        user?.portfolio?.currentValue -
                        user?.portfolio?.previousValue
                      )
                        ?.toFixed(2)
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}{" "}
                      <span>
                        (
                        {TodayPerChange(
                          user?.portfolio?.previousValue,
                          user?.portfolio?.currentValue -
                            user?.portfolio?.previousValue
                        )
                          ?.toFixed(2)
                          ?.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        %)
                      </span>
                    </span>
                  </li>
                </ul>
                <div className="view--btn">
                  <Link href="/dashboard/portfolio/">
                    <a className="btn">View Portfolio</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Watchlist */}
        {NigerianTimeZone(todaytime) <=
          NigerianTimeZone(user?.user?.expiredDate) && (
<WatchListData />

         
        )}

        {/* 3 blocks wraps */}
        {NigerianTimeZone(todaytime) <=
          NigerianTimeZone(user?.user?.expiredDate) && (
          <div className="card--wrapper">
            <div className="wrapper--text card--grid card--grid--3">
              {/* Top Gainers */}
              <div className="wrapper--col">
                <div className="wrapper--hgroup">
                  <div className="wrapper--title">
                    <h3>Top Gainers</h3>
                  </div>
                  <div className="readmore--link">
                    {!showGainersList ? (
                      <span
                        onClick={() => setShowGainersList(!showGainersList)}
                      >
                        See All
                      </span>
                    ) : (
                      <span
                        onClick={() => setShowGainersList(!showGainersList)}
                      >
                        See Less
                      </span>
                    )}
                  </div>
                </div>
                <GainerView showGainersList={!showGainersList} />
              </div>

              {/* Top Losers */}
              <div className="wrapper--col">
                <div className="wrapper--hgroup">
                  <div className="wrapper--title">
                    <h3>Top Losers</h3>
                  </div>
                  <div className="readmore--link">
                    {!showLosersList ? (
                      <span onClick={() => setShowLosersList(!showLosersList)}>
                        See All
                      </span>
                    ) : (
                      <span onClick={() => setShowLosersList(!showLosersList)}>
                        See Less
                      </span>
                    )}
                  </div>
                </div>

                <LoserView showLosersList={!showLosersList} />
              </div>

              {/* Leaders */}
              <div className="wrapper--col">
                <div className="wrapper--hgroup">
                  <div className="wrapper--title">
                    <h3>Sector Leaders</h3>
                  </div>
                  {/* <div className="readmore--link">
                  {!showLeadersList ? (
                    <span
                      onClick={() => setShowLeadersList(!showLeadersList)}
                    >
                      See All
                    </span>
                  ) : (
                    <span
                      onClick={() => setShowLeadersList(!showLeadersList)}
                    >
                      See Less
                    </span>
                  )}
                </div> */}
                </div>

                {!showLeadersList ? <LeaderView /> : <LeaderView2 />}
              </div>
            </div>
          </div>
        )}

        {/* Newslist */}
        <div className="card--wrapper">
          <div className="wrapper--hgroup">
            <div className="wrapper--title">
              <h3>News</h3>
            </div>
            <div className="readmore--link">
              {!showNewsList ? (
                <span onClick={() => setShowNewsList(!showNewsList)}>
                  See All
                </span>
              ) : (
                <span onClick={() => setShowNewsList(!showNewsList)}>
                  See Less
                </span>
              )}
            </div>
          </div>
          {!showNewsList ? (
            <div className="wrapper--text card--grid card--grid--4">
              <NewsListData />
            </div>
          ) : (
            <div className="wrapper--text card--grid card--grid--4">
              <NewsListData2 />
            </div>
          )}

          <div className="readMore--btn">
            {/* <Link href="javascript:void(0)"> */}
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setShowNewsList(!showNewsList)}
            >
              Show {showNewsList ? "Less" : "More"} News
            </a>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
