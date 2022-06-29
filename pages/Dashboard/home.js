import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HighlightTrades from "../../components/HighlightTrades/HighlightTrades";
import NewsListData, { NewsListData2 } from "../../components/NewsList/NewsListView";
import LeaderView, { LeaderView2 } from "../../components/SectorLeaders/LeaderView";
import Sidebar from "../../components/Sidebar/Sidebar";
import GainerView, { GainerView2 } from "../../components/TopGainers/GainerView";
import LoserView, { LoserView2 } from "../../components/TopLosers/LoserView";
import WatchListData, { WatchListData2 } from "../../components/WatchList/WatchListData";

export default function Home(){
    const [showWatchList, setShowWatchList] = useState(false)
    const [showGainersList, setShowGainersList] = useState(false)
    const [showLosersList, setShowLosersList] = useState(false)
    const [showLeadersList, setShowLeadersList] = useState(false)
    const [showNewsList, setShowNewsList] = useState(false)
    return (
      <>
        <Sidebar />

        <div className="site--content">
          <HighlightTrades />

          {/* welcome block */}
          <div className="card--wrapper">
            <div className="wrapper--text card--grid card--grid--60-40">
              <div className="welcome--image">
                <Image src="/images/welcome--image.jpg" layout="responsive" width={775} height={365} alt="" />
              </div> 
              <div className="card--style portfolio--card">
                <div className="card--title">
                  <h1>Welcome, John Adams</h1>
                </div>
                <div className="card--list">
                  <div className="card--title">
                    <p>Overview</p>
                  </div>
                  <ul className="option--list">
                    <li>
                      <span>Account Value</span>
                      <span>₦100,000.00</span>
                    </li>
                    <li>
                      <span>Today's Change</span>
                      <span>+₦0.00 <span>(0.00%)</span></span>
                    </li>
                  </ul>
                  <div className="view--btn">
                    <Link href="javascript:void(0)">
                      <a className="btn">View Portfolio</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Watchlist */}
          <div className="card--wrapper">
            <div className="wrapper--hgroup">
              <div className="wrapper--title">
                <h3>Watchlist</h3>
              </div>
              <div className="readmore--link">
                {!showWatchList ? (
                  <span onClick={() => setShowWatchList(!showWatchList)}>
                    See All
                  </span>
                ) : (
                  <span onClick={() => setShowWatchList(!showWatchList)}>
                    See Less
                  </span>
                )}
              </div>
            </div>
            {!showWatchList ? (
              <div className="wrapper--text card--grid card--grid--4">
                <WatchListData />
              </div>
            ) : (
              <div className="wrapper--text card--grid card--grid--4">
                <WatchListData2 />
              </div>
            )}
          </div>

          {/* 3 blocks wraps */}
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
                {!showGainersList ? <GainerView /> : <GainerView2 />}
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

                {!showLosersList ? <LoserView /> : <LoserView2 />}
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
              <Link href="javascript:void(0)">
                <a>Show More News</a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}