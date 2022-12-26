import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnnualReturn, TodayPerChange } from "../../helpers/TodayChange";
import { userService } from "../../services";
import LineChartCompare from "../Chart/LinChartCompare";


const ProfileAnotherUser = ({ userName }) => {
  const [infoData, setInfoData] = useState([]);
  const [typeData,setTypeData]=useState("week")
  const [perSelected,setPerSelected]=useState(false)
  const [graphData, setGraphData] = useState();
  const [user1,setUser1]=useState(true)
  const [user2,setUser2]=useState(true)
  let { user } = useSelector((state) => state.userWrapper);
  useEffect(() => {
    let temp={
      anotheruser:user1? userName:"",
     username:user2? user?.user?.username:""
    }
    console.log(temp)
    userService
      .anotherUserGraph({temp, userName, typeData, perSelected })
      .then((res) => {
        if (res.success) {
          setGraphData(res.data);
        } else {
          setGraphData();
        }
      })
      .catch((err) =>  setGraphData());
    userService
      .GetSingleUser(userName)
      .then((res) => {
        if (res.success) {
          setInfoData(res?.data);
        }
      })
      .catch((err) => console.log(err));
  }, [userName,typeData,perSelected,user1,user2]);

  
  
  return (
    <>
      <div>
        <div className="p-20">
          <Link
            href="competition-summary"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            Go Back
          </Link>
          <h1 style={{ fontSize: "15px" }}>{infoData?.user?.username}</h1>
        </div>

        {/* port folio section  */}
        <div className="profileContainer ">
          <div className="profileContainerLeft">
            <div className="profileContainerAccount">
              <div className="profileContainerAccountblock">
                <span>ACCOUNT VALUE</span>

                <p>
                  ₦
                  {(infoData?.Competition?.accountValue+infoData?.Competition?.profitOrLossToday)
                    ?.toFixed(2)
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
                </p>
              </div>
              <div className="profileContainerAccountblock">
                <div>
                  <div>
                    <span>TODAY'S CHANGE</span>

                    <p>+₦ { infoData?.Competition?.profitOrLossToday
                      ?.toFixed(2)
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.00}</p>
                        <span >({TodayPerChange(infoData?.Competition?.accountValue,infoData?.Competition?.profitOrLossToday)?.toFixed(2)
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%)</span>
                  </div>
                  <div>
                    <span>ANNUAL RETURN</span>

                    <p>{AnnualReturn(infoData?.Competition?.gameId?.startingCash,infoData?.Competition?.annualReturn)?.toFixed(2)
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%</p>
                  </div>
                </div>
              </div>
              <div className="profileContainerAccountblock">
                <div>
                  <div>
                    <span>BUYING POWER</span>

                    <p>
                      ₦
                      {(infoData?.Competition?.buyingPower+(infoData?.Competition?.gameId?.allowTradingWithMargin?(infoData?.Competition?.profitOrLossToday/2):infoData?.Competition?.profitOrLossToday))
                        ?.toFixed(2)
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
                    </p>
                  </div>
                  {/* {console.log(infoData)} */}
                  <div>
                    <span>CASH</span>

                    <p>
                      ₦
                      {(infoData?.Competition?.cash+infoData?.Competition?.profitOrLossToday)
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
              {infoData?.Competition?.rank ? (
                <div className="rank">
                  <p className="yourrank">
                    {infoData?.Competition?.rank

                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>{" "}
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
                  <p className="players">
                    of{" "}
                    {infoData?.Competition?.gameId?.users?.length

                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    players
                  </p>
                </div>
              ) : (
                <div>Your rank will update daily starting tomorrow</div>
              )}
              {infoData?.top && (
                <div>
                  <div className="rankText">
                    <span>TOP PLAYER</span>
                  </div>
                  <div className="rankText">
                    <h4>
                      <span className="textBlue">
                        <Link href='/dashboard/competition-summary'><a href="#">{infoData?.top?.result?.username}{" "}</a></Link>
                        
                      </span>{" "}
                      ₦
                      {infoData?.top?.accountValue
                        ?.toFixed(2)
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="profileContainerRight">
            <div className="profileContainerRightBlock">
              <div className="profileContainerRightGraph">
                {/* <LineChartStock /> */}
                {graphData && (
                    <div>
                      <span
                        className={`tab-graph ${typeData == "week" &&
                          "tab-graph-active"}`}
                        onClick={() => setTypeData("week")}
                      >
                        1W
                      </span>
                      <span
                        className={`tab-graph ${typeData == "month" &&
                          "tab-graph-active"}`}
                        onClick={() => setTypeData("month")}
                      >
                        1M
                      </span>
                      <span
                        className={`tab-graph ${typeData == "threemonth" &&
                          "tab-graph-active"}`}
                        onClick={() => setTypeData("threemonth")}
                      >
                        3M
                      </span>
                      <span
                        className={`tab-graph ${typeData == "sixmonth" &&
                          "tab-graph-active"}`}
                        onClick={() => setTypeData("sixmonth")}
                      >
                        6M
                      </span>
                      <span
                        className={`tab-graph ${typeData == "year" &&
                          "tab-graph-active"}`}
                        onClick={() => setTypeData("year")}
                      >
                        1Y
                      </span>
                    </div>
                  )}
                  {graphData && <LineChartCompare graphData={graphData} />}
              </div>
              <div className="btn--group form--actions customWidth">
                <div className="buttonGroup">
                  <Link
                    href="/dashboard/performance-history"
                    style={{ padding: "10px 20px" }}
                  >
                    <a className="btn form--submit">Performance History</a>
                  </Link>
                </div>
                <div className="rightBlock">
                  <div className="spText">
                    <input type="checkbox" disabled={user1 && !user2} checked={user1} onClick={()=>setUser1(!user1)} value={infoData?.user?.username} name={infoData?.user?.username}  />
                    <label>{infoData?.user?.username}</label>
                    <input type="checkbox" />
                    <label>S&P 500</label>
                    <input type="checkbox" disabled={!user1 && user2} checked={user2} onClick={()=>setUser2(!user2)}  value={user?.user?.username} name={user?.user?.username}  />
                    <label>{user?.user?.username}</label>
                  </div>
                  <div className="spText">
                    <div className="box_1">
                      ₦
                      <input
                        type="checkbox"
                        className="switch_1"
                        checked={perSelected} value={perSelected} onClick={()=>setPerSelected(!perSelected)}
                      />{" "}
                      %
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAnotherUser;
