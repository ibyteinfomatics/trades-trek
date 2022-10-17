import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gameService } from "../../services/game.service";
import { useSelector } from "react-redux";

export default function MyCompetationView() {
    let { user } = useSelector((state) => state.userWrapper);
  const [myGame, setMyGame] = useState();
  useEffect(() => {
    getAllGame();
  }, []);

  const getAllGame = () => {
    gameService
      .getMYGame()
      .then((res) => setMyGame(res.games))
      .catch((err) => console.log(err));
  };
  console.log(myGame);
  return (
    <>
      {myGame && (
        <div className="myConn">
          {myGame.map((item) => {
            return (
              <div className="connectionBlock">
                <div className="titleBox px-32 py-16">
                  <h4 className="font-18 font--bold mb-12">
                    {item.competitionName} {item.creatorId==user._id &&  <span style={{
                            fontWeight: "bold",
                            color: "#8000ff",
                            marginLeft: "20px"
                    }}>Admin</span>}
                  </h4>
                 
                </div>
                <div className="gridRow">
                  <div className="grid--2 px-32 pb-32">
                    <div className="colLeftBlock">
                      <p>
                      {item.competitionDescription}
                      </p>
                    </div>
                    <div className="colRightBlock">
                      <div className="flexBox endBlock">
                        <div className="colBlock">
                          <p className="font-17 font--normal">TIMING</p>
                          <h2 className="font-17 font--bold">
                          {item?.dateRange.split(" ")[0]} - {item?.dateRange.split(" ")[1] == "null"
                      ? "No End"
                      : item?.dateRange.split(" ")[1]}
                          </h2>
                        </div>
                        <div className="colBlock">
                          <p className="font-17 font--normal">CURRENT RANK</p>
                          <h2 className="font-17 font--bold flexBox">
                            1
                            <span className="font-17 font--normal flexBox">
                              <svg
                                className="ml-12 mr-12"
                                width="13"
                                height="14"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M9 0.445312L8.46094 0.960937L0.960938 8.46094L2.03906 9.53906L8.25 3.32812V18H9.75V3.32812L15.9609 9.53906L17.0391 8.46094L9.53906 0.960937L9 0.445312Z"
                                  fill="#00FFA0"
                                ></path>
                              </svg>
                              of {item.users.length} Players
                            </span>
                          </h2>
                        </div>
                        <div className="colBlock">
                          <p className="font-17 font--normal">
                            YOUR ACCOUNT VALUE
                          </p>
                          <h2 className="font-17 font--bold text--purple">
                            $98,351.00
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid--2 px-32 pb-26">
                    <div className="colLeftBlock">
                      <div className="competation-rules flexBox">
                        <h5 className="font-16 text--purple mt-32">
                          Competition Rules
                          <span>
                            <svg
                              width="7"
                              height="12"
                              viewBox="0 0 8 13"
                              fill="none"
                            >
                              <path
                                d="M0.734375 0.0234375L0.015625 0.726562L5.67578 6.5L0.015625 12.2773L0.734375 12.9727L7.07422 6.5L0.734375 0.0234375Z"
                                fill="#8000FF"
                              />
                            </svg>
                          </span>
                        </h5>
                        <h5 className="font-16 text--purple mt-32">
                          Reset Portfolio
                          <span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M6 0C2.69187 0 0 2.69187 0 6C0 9.30813 2.69187 12 6 12C9.30813 12 12 9.30813 12 6H11C11 8.76787 8.76787 11 6 11C3.23213 11 1 8.76787 1 6C1 3.23213 3.23213 1 6 1C7.51111 1 8.85378 1.675 9.76953 2.73047L8.5 4H12V0.5L10.4766 2.02344C9.37687 0.786984 7.78113 0 6 0Z"
                                fill="#8000FF"
                              />
                            </svg>
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="colRightBlock">
                      <div className="btn--right">
                        <div className="borderBtnPurple">
                          <Link href="#">
                            <a href="javascript:void(0)">
                              INVITE TO COMPETITION
                            </a>
                          </Link>
                        </div>
                        <div className="borderBtnPurple fullBtnPurple">
                          <Link href="/dashboard/portfolio">
                            <a href="javascript:void(0)">GO TO HOME</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* <div className="innerBlock">
        <div class="p-20">
          <h4 class="font-16">PAST COMPETITIONS</h4>
        </div>
        <div className="myConn px-32 py-16">
          <p className="flexBox gap--4">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path
                d="M8.04297 0C3.63432 0 0.0429688 3.59135 0.0429688 8C0.0429688 12.4087 3.63432 16 8.04297 16C12.4516 16 16.043 12.4087 16.043 8C16.043 3.59135 12.4516 0 8.04297 0ZM8.04297 1.23077C11.7882 1.23077 14.8122 4.25481 14.8122 8C14.8122 11.7452 11.7882 14.7692 8.04297 14.7692C4.29778 14.7692 1.27374 11.7452 1.27374 8C1.27374 4.25481 4.29778 1.23077 8.04297 1.23077ZM7.42758 3.69231V9.84615H8.65835V3.69231H7.42758ZM7.42758 11.0769V12.3077H8.65835V11.0769H7.42758Z"
                fill="#2525BB"
              />
            </svg>
            No Data Available
          </p>
        </div>
      </div> */}
    </>
  );
}

// <div className="connectionBlock">
//           <div className="titleBox px-32 py-16">
//             <h4 className="font-18 font--bold mb-12">
//               TradesTrek Trading Game
//             </h4>
//           </div>
//           <div className="gridRow">
//             <div className="grid--2 px-32 pb-32">
//               <div className="colLeftBlock">
//                 <p>
//                   The default game for the Investopedia Simulator. This is a
//                   public game with no trade commission and $100,000 starting
//                   cash. Have fun!
//                 </p>
//               </div>
//               <div className="colRightBlock">
//                 <div className="flexBox endBlock">
//                   <div className="colBlock">
//                     <p className="font-17 font--normal">TIMING</p>
//                     <h2 className="font-17 font--bold">
//                       March 29, 2021 - No End
//                     </h2>
//                   </div>
//                   <div className="colBlock">
//                     <p className="font-17 font--normal">CURRENT RANK</p>
//                     <h2 className="font-17 font--bold flexBox">
//                       266,745
//                       <span className="font-17 font--normal flexBox">
//                         <svg
//                           className="ml-12 mr-12"
//                           width="13"
//                           height="14"
//                           viewBox="0 0 18 18"
//                           fill="none"
//                         >
//                           <path
//                             d="M9 0.445312L8.46094 0.960937L0.960938 8.46094L2.03906 9.53906L8.25 3.32812V18H9.75V3.32812L15.9609 9.53906L17.0391 8.46094L9.53906 0.960937L9 0.445312Z"
//                             fill="#00FFA0"
//                           ></path>
//                         </svg>
//                         of 364,664 Players
//                       </span>
//                     </h2>
//                   </div>
//                   <div className="colBlock">
//                     <p className="font-17 font--normal">YOUR ACCOUNT VALUE</p>
//                     <h2 className="font-17 font--bold text--purple">
//                       $98,351.00
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="grid--2 px-32 pb-26">
//               <div className="colLeftBlock">
//                 <div className="competation-rules">
//                   <h5 className="font-16 text--purple">
//                     Competition Rules
//                     <span>
//                       <svg width="7" height="12" viewBox="0 0 8 13" fill="none">
//                         <path
//                           d="M0.734375 0.0234375L0.015625 0.726562L5.67578 6.5L0.015625 12.2773L0.734375 12.9727L7.07422 6.5L0.734375 0.0234375Z"
//                           fill="#8000FF"
//                         />
//                       </svg>
//                     </span>
//                   </h5>
//                 </div>
//               </div>
//               <div className="colRightBlock">
//                 <div className="btn--right">
//                   <div className="borderBtnPurple">
//                     <Link href="#">
//                       <a href="javascript:void(0)">INVITE TO COMPETITION</a>
//                     </Link>
//                   </div>
//                   <div className="borderBtnPurple fullBtnPurple">
//                     <Link href="#">
//                       <a href="javascript:void(0)">GO TO COMPETITION</a>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
