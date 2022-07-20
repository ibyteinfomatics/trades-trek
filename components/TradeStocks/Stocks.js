import Image from 'next/image';
import Link from 'next/link';
import React, { useState ,useEffect} from 'react';
import LineChart from '../Chart/LineChart';
import {stockService} from '../../services/stock.service';

export default function Stocks() {
  const [showMax, setShowMax] = useState(false);

  useEffect(()=>{
    stockService.getAllStock()
  },[])
  return (
    <>
      <div className="stocks-form">
        <form className="site--form">
          <div className="stocks--form--group">
            <div
              className="readmore--link"
              onClick={() => setShowMax(!showMax)}
            >
              <svg
                width="23"
                height="12"
                viewBox="0 0 23 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6772 0.0410156C5.63315 0.0410156 0.910151 5.63707 0.910151 5.63707C0.761395 5.80708 0.761395 6.06209 0.910151 6.23209C0.910151 6.23209 5.63315 11.8281 11.6772 11.8281C17.7213 11.8281 22.4443 6.23209 22.4443 6.23209C22.5931 6.06209 22.5931 5.80708 22.4443 5.63707C22.4443 5.63707 17.7213 0.0410156 11.6772 0.0410156ZM11.6772 0.947718C12.8691 0.947718 14.0077 1.19387 15.0632 1.57108C15.7716 2.37152 16.2108 3.41813 16.2108 4.57453C16.2108 7.0839 14.1866 9.10804 11.6772 9.10804C9.16787 9.10804 7.14373 7.0839 7.14373 4.57453C7.14373 3.41813 7.56875 2.37152 8.27711 1.57108C9.33611 1.1921 10.4819 0.947718 11.6772 0.947718ZM6.77538 2.23694C6.43537 2.9453 6.23703 3.73866 6.23703 4.57453C6.23703 7.57444 8.67733 10.0147 11.6772 10.0147C14.6772 10.0147 17.1175 7.57444 17.1175 4.57453C17.1175 3.7422 16.928 2.9453 16.5933 2.23694C19.154 3.53855 20.9957 5.42633 21.4668 5.93458C20.7301 6.73149 16.6517 10.9214 11.6772 10.9214C6.70277 10.9214 2.62438 6.73149 1.88769 5.93458C2.35875 5.42456 4.20934 3.53855 6.77538 2.23694ZM11.6772 2.30777C10.4252 2.30777 9.41049 3.3225 9.41049 4.57453C9.41049 5.82656 10.4252 6.84128 11.6772 6.84128C12.9293 6.84128 13.944 5.82656 13.944 4.57453C13.944 3.3225 12.9293 2.30777 11.6772 2.30777Z"
                  fill="black"
                />
              </svg>
              Show Max
            </div>
            <div className="form--item">
              <label className="form--label" htmlFor="email">
                Symbol
              </label>
              <input
                className="form--control"
                type="email"
                id="email"
                placeholder="Look up Symbol/Company Name"
              />
            </div>
            <div className="form--item">
              <label className="form--label" htmlFor="email">
                Action
              </label>
              <select className="form--control">
                <option>Buy</option>
                <option>Sell</option>
                <option>Shorts</option>
                <option>Buy to Cover</option>
              </select>
            </div>
            <div className="form--item">
              <label className="form--label" htmlFor="email">
                Quantity
              </label>
              <input
                className="form--control"
                type="email"
                id="email"
                placeholder="0"
              />
            </div>
          </div>
          {/*ShowMax Data Block*/}
          {showMax && (
            <div className="showMax">
              <div className="grid--2">
                <div className="gridColLeft showMaxData">
                  <div className="logoArea">
                    <div className="trade-stock-icon">
                      <Image
                        src="/images/Apple_logo_black.png"
                        layout="responsive"
                        width={32}
                        height={40}
                        alt="Logo"
                      />
                    </div>
                    <div className="brandName">
                      <h4>
                        Apple Inc
                        <span>AAPL NASDAQ</span>
                      </h4>
                    </div>
                  </div>
                  <div className="titleRow">
                    <h3 className="font-30">
                      149.24<sub>USD</sub>
                      <span>
                        <sub>+3.70(+2.54%)</sub>
                      </span>
                      <span className="font-12">
                        At Close(As of may 17, 19:59 EDT)
                      </span>
                    </h3>
                    <h3 className="font-16">
                      No trade
                      <span className="font-12 selected">+Pre Market</span>
                    </h3>
                    <h3 className="font-16">
                      August 2<span className="font-12">Upcoming Earning</span>
                    </h3>
                    <h3 className="font-16">
                      6.20
                      <span className="font-12">Eps</span>
                    </h3>
                    <h3 className="font-16">
                      2.1465
                      <span className="font-12">Market Cap</span>
                    </h3>
                    <h3 className="font-16">
                      2.1465
                      <span className="font-12">Div Yield</span>
                    </h3>
                    <h3 className="font-16">
                      2.1465
                      <span className="font-12">P/E</span>
                    </h3>
                  </div>
                  <div className="innerRow grid--2">
                    <div className="volumeDataLeft">
                      <div className="currentData">
                        <p className="font-16">Volume(current)</p>
                        <p className="font-14">12.66677k</p>
                      </div>
                      <div className="currentData">
                        <p className="font-16">Day&apos;s High($)</p>
                        <p className="font-14">12.666</p>
                      </div>
                      <div className="currentData">
                        <p className="font-16">Day&apos;s High($)</p>
                        <p className="font-14">12.6667</p>
                      </div>
                    </div>
                    <div className="volumeDataRight">
                      <div className="currentData">
                        <p className="font-16">52 Week High($)</p>
                        <p className="font-14">12.66677k</p>
                      </div>
                      <div className="currentData">
                        <p className="font-16">Bid/Ask price($)</p>
                        <p className="font-14">12.666</p>
                      </div>
                      <div className="currentData">
                        <p className="font-16">52 Week Low($)</p>
                        <p className="font-14">12.6667</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gridColRight">
                  <LineChart />
                </div>
              </div>
              {/* <div className='bar--image-data'>
                                <img src="/images/graph.png" alt="Graph Image" />
                            </div> */}
            </div>
          )}
          <div className="stocks--form--group">
            <div className="form--item">
              <label className="form--label" htmlFor="email">
                Duration
              </label>
              <select className="form--control">
                <option>Day only</option>
                <option>Night only</option>
              </select>
            </div>
            <div className="form--item">
              <label className="form--label" htmlFor="email">
                Order Type
              </label>
              <select className="form--control">
                <option>Market</option>
                <option>Market only</option>
              </select>
            </div>
          </div>
          {/* <div className='dummy-block'>
                        <img src="/images/graph.png" alt="Graph Image" />
                    </div> */}
          <div className="btn--group form--actions">
            <button type="reset" className="btn reset--btn">
              Clear
            </button>
            <Link href="/dashboard/confirm-dialog-box">
              <a className="btn form--submit">Preview Order</a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
