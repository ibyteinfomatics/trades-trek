import Link from "next/link";
import React, { useEffect, useState } from "react";
import { userService } from "../../services";
import LineChart from "../Chart/LineChart";

const ProfileAnotherUser = ({ userName }) => {
  const [infoData, setInfoData] = useState([]);
  useEffect(() => {
    userService
      .GetSingleUser(userName)
      .then((res) => {
        if (res.success) {
          setInfoData(res?.data);
        }
      })
      .catch((err) => console.log(err));
  }, [userName]);
  console.log(infoData);
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
                  {infoData?.competition?.accountValue
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
                      ₦
                      {infoData?.competition?.buyingPower
                        ?.toFixed(2)
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
                    </p>
                  </div>
                  <div>
                    <span>CASH</span>

                    <p>
                      ₦
                      {infoData?.competition?.cash
                        ?.toFixed(2)
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="profileContainerRank">
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
              </div> */}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAnotherUser;
