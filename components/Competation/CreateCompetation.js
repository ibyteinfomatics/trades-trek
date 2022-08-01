import Link from 'next/link'
import React from 'react'

export default function CreateCompetation() {
  return (
    <>
      <div className="createCompeation">
        <from className="site--form">
          <div className="trendingBlock">
            <div className="formTitle px-32">
              <h4 className="font-18 font--bold">
                Competition NAME & BASIC TRADING RULES
              </h4>
              <p>
                These settings cannot be changed once the competition has been
                created.
              </p>
            </div>
            <div className="grid__2 px-32">
              <div className="colLeftBlock">
                <div className="form--item error-msg">
                  <label className="form--label">Competition Name</label>
                  <input
                    className="form--control"
                    type="text"
                    placeholder="Enter competition name here"
                  />
                  <p>Name must be between 10 and 37 characters.</p>
                </div>
                <div className="form--item">
                  <label className="form--label">Competition Description</label>
                  <textarea
                    className="form--control"
                    rows="5"
                    placeholder="Enter competition description"
                  />
                </div>
                <div className="form--item error-msg">
                  <label className="form--label">Password</label>
                  <input
                    className="form--control"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div className="colRightBlock">
                <div className="form--item">
                  <label className="form--label">Competition Type</label>
                  <select className="form--control">
                    <option>Public Competition</option>
                    <option>Private Competition</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Starting Cash
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>₦100,000</option>
                    <option>₦110,000</option>
                    <option>₦112,000</option>
                  </select>
                </div>
                <div className="form--item toggle">
                  <label className="form--label withIcon">
                    Allow Trading with margin?
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <div className="box_1">
                    <input type="checkbox" className="switch_1" />
                  </div>
                </div>
                <div className="form--item toggle">
                  <label className="form--label withIcon">
                    Allow Short Selling?
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <div className="box_1">
                    <input type="checkbox" className="switch_1" />
                  </div>
                </div>
                <div className="form--item toggle">
                  <label className="form--label withIcon">
                    Allow Trading Options?
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <div className="box_1">
                    <input type="checkbox" className="switch_1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trendingBlock">
            <div className="grid__2 px-32">
              <div className="colLeftBlock">
                <h4 className="font-18 font--bold">BASIC COMPETITION RULES</h4>
                <p>
                  Basic game rules can be modified after the game is created.
                </p>
                <div className="form--item error-msg">
                  <label className="form--label">Date Range</label>
                  <input className="form--control" type="date" />
                </div>
              </div>
              <div className="colRightBlock">
                <div className="form--item toggle">
                  <label className="form--label withIcon">
                    Allow Late Entry
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <div className="box_1">
                    <input type="checkbox" className="switch_1" />
                  </div>
                </div>
                <div className="form--item toggle">
                  <label className="form--label withIcon">
                    Allow Portfolio Viewing?
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <div className="box_1">
                    <input type="checkbox" className="switch_1" />
                  </div>
                </div>
                <div className="form--item toggle">
                  <label className="form--label withIcon">
                    Allow Portfolio Resetting?
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <div className="box_1">
                    <input type="checkbox" className="switch_1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trendingBlock">
            <div className="formTitle px-32">
              <h4 className="font-18 font--bold">ADVANCED COMPETITION RULES</h4>
              <p>
                Some advanced game rules can be modified after the game is
                created.
              </p>
            </div>
            <div className="grid__2 px-32">
              <div className="colLeftBlock">
                <div className="form--item">
                  <label className="form--label withIcon">
                    Market Delay
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>20 minutes</option>
                    <option>10 minutes</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Daily Volume
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>Disabled</option>
                    <option>Enable</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Quick Sell
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>15 minutes</option>
                    <option>20 minutes</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Minimum Price
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>Disabled</option>
                    <option>Enable</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Minimum Price Short
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>Disabled</option>
                    <option>Enable</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Minimum Stock for Margin
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>Disabled</option>
                    <option>Enable</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Commission
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>Disabled</option>
                    <option>Enable</option>
                  </select>
                </div>
              </div>
              <div className="colRightBlock">
                <div className="form--item">
                  <label className="form--label withIcon">
                    Commission - Option
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>Disabled</option>
                    <option>Enable</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Commission - Per Contract
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>Disabled</option>
                    <option>Enable</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Diversification
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>Disabled</option>
                    <option>Enable</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Diversification Option
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>Disabled</option>
                    <option>Enable</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Margin Intrest
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>8%</option>
                    <option>10%</option>
                  </select>
                </div>
                <div className="form--item">
                  <label className="form--label withIcon">
                    Cash Interest
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M7.75259 0.772461C3.52441 0.772461 0.0800781 4.21679 0.0800781 8.44497C0.0800781 12.6732 3.52441 16.1175 7.75259 16.1175C11.9808 16.1175 15.4251 12.6732 15.4251 8.44497C15.4251 4.21679 11.9808 0.772461 7.75259 0.772461ZM7.75259 1.95285C11.3445 1.95285 14.2447 4.85309 14.2447 8.44497C14.2447 12.0369 11.3445 14.9371 7.75259 14.9371C4.16071 14.9371 1.26046 12.0369 1.26046 8.44497C1.26046 4.85309 4.16071 1.95285 7.75259 1.95285ZM7.1624 4.31362V5.49401H8.34279V4.31362H7.1624ZM7.1624 6.67439V12.5763H8.34279V6.67439H7.1624Z"
                        fill="#2525BB"
                      />
                    </svg>
                  </label>
                  <select className="form--control">
                    <option>Disabled</option>
                    <option>Enable</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="form--actions">
            <Link href="/dashboard/join-competation-confirm-popup">
              <button type="submit" className="btn btnBgBlue">
                Create Competation
              </button>
            </Link>
          </div>
        </from>
      </div>
    </>
  );
}
