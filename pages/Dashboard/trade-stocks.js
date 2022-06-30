import React, { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sidebar from '../../components/Sidebar/Sidebar';
import Stocks from '../../components/TradeStocks/Stocks';

export default function TradesTrek() {
    const [beginnerOption, setBeginnerOption] = useState(false);
    return (
      <>
        <Sidebar />
        <div className="site--content">
          <div className="page--title--block">
            <div className="grid--2">
              <div className="grid-block-left wrapper--title">
                <h3>Welcome, John Adams</h3>
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
                  <span className="font-20 font-bold">₦100,000.00</span>
                </p>
              </div>
              <div className="col-block">
                <p className="data-title">
                  Buying Power{" "}
                  <span className="font-20 font-bold">₦100,000.00</span>
                </p>
              </div>
              <div className="col-block">
                <p className="data-title">
                  Cash <span className="font-20 font-bold">₦100,000.00</span>
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
                      <div className="status-summary font-18">
                        <span>
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.375 0.25C3.89746 0.25 0.25 3.89746 0.25 8.375C0.25 12.8525 3.89746 16.5 8.375 16.5C12.8525 16.5 16.5 12.8525 16.5 8.375C16.5 3.89746 12.8525 0.25 8.375 0.25ZM8.375 1.5C12.1787 1.5 15.25 4.57129 15.25 8.375C15.25 12.1787 12.1787 15.25 8.375 15.25C4.57129 15.25 1.5 12.1787 1.5 8.375C1.5 4.57129 4.57129 1.5 8.375 1.5ZM7.75 4V10.25H9V4H7.75ZM7.75 11.5V12.75H9V11.5H7.75Z"
                              fill="#F45531"
                            />
                          </svg>
                        </span>
                        Market is closed. Opens in 3hr, 53min
                      </div>
                      <Stocks />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
