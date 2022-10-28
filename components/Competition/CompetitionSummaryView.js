import React, { useEffect } from "react";
import Link from "next/link";
import { gameService } from "../../services/game.service";
import { useSelector } from "react-redux";
import { useState } from "react";
import IncreaseDecrease from "../Table/IncreaseDecrease";

export default function CompetationSummeryView() {
  let { user } = useSelector((state) => state.userWrapper);
  const [top5, setTop5] = useState([]);
  const [nearResult,setNearResult]=useState([])
  const [yourRank,setYourRank]=useState(0)
  const check=(item)=>{
    console.log(item?.userId)
    // console.log('id',user?.user?._id)
   return item?.userId==user?.user?._id
  }

  useEffect(() => {
    gameService
      .myRank()
      .then((res) => {
        
        console.log(res?.data?.findIndex(check))
        if (res.success) {
           if(res.nearRank){
            setTop5(res.data)
            setNearResult(res.nearRank)
            setYourRank(res.yourRank)
           }else{
            setTop5(res.data)
            setNearResult([])
            setYourRank(0)


           }
        } else {
          setTop5([]);
          setNearResult([])
        }
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <>
      <div className="summeyTable">
        <div className="p-20">
          <h4 className="font-16">LEADERBOARD</h4>
        </div>
        <div className="status-summary noRadius font-18 summery-table table-view">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Account Value</th>
                <th>Today’s Change</th>
                <th>Overall Change</th>
              </tr>
            </thead>
            <tbody>
              {top5?.map((item, index) => {
                return (
                  <tr className={item?.result?._id==user?.user?._id && 'currentUser'}>
                    <td>{index + 1}</td>
                    <td>{`${item?.result?.username || ""} `}</td>
                    <td>
                      ₦{" "}
                      {item?.accountValue
                        ?.toFixed(2)
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </td>
                    {/* <td className="text-red"> */}
                    {IncreaseDecrease(item?.profitOrLossToday, (item?.profitOrLossToday*100)/item?.accountValue)}
                    {/* <div className='flexBox'>

                                        -$4.00 (NaN%)
                                        <svg className="ml-12" width="16" height="17" viewBox="0 0 27 29" fill="none"><path d="M13.6021 28.0854L14.462 27.2629L26.4263 15.2986L24.7064 13.5788L14.7985 23.4867L14.7985 0.081543H12.4056L12.4056 23.4867L2.4977 13.5788L0.777832 15.2986L12.7421 27.2629L13.6021 28.0854Z" fill="#F45531"></path></svg>
                                    </div> */}
                    {/* </td> */}
                    {IncreaseDecrease(item?.annualReturn, (item?.annualReturn*100)/item?.accountValue)}

                    {/* <td>
                      <div className="flexBox text-light-green">
                        52,832,199,555.31%
                        <svg
                          className="ml-12"
                          width="16"
                          height="17"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 0.445312L8.46094 0.960937L0.960938 8.46094L2.03906 9.53906L8.25 3.32812V18H9.75V3.32812L15.9609 9.53906L17.0391 8.46094L9.53906 0.960937L9 0.445312Z"
                            fill="#00FFA0"
                          />
                        </svg>
                      </div>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {nearResult.length>0 &&<div className="innerTable">
        <div class="wrapper--hgroup">
          <div class="wrapper--title">
            <h3>RESULTS NEAR YOUR RANK</h3>
          </div>
          <div class="readmore--link">
            <Link href="/Dashboard/competation-summery-user-list/">
              <a className="text--purple">See All</a>
            </Link>
          </div>
        </div>
        <div className="summeyTable">
          <div className="status-summary noRadius font-18 summery-table summeyTable">
            <table>
              <thead></thead>
              <tbody>
              {nearResult ?.map((item, index) => {
                return (
                  <tr className={item?.result?._id==user?.user?._id && 'currentUser'}>
                    <td>{index + yourRank}</td>
                    <td>{`${item?.result?.username || ""} `}</td>
                    <td>
                      ₦{" "}
                      {item?.accountValue
                        ?.toFixed(2)
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </td>
                    {/* <td className="text-red"> */}
                    {IncreaseDecrease(item?.profitOrLossToday, (item?.profitOrLossToday*100)/item?.accountValue)}
                    {/* <div className='flexBox'>

                                        -$4.00 (NaN%)
                                        <svg className="ml-12" width="16" height="17" viewBox="0 0 27 29" fill="none"><path d="M13.6021 28.0854L14.462 27.2629L26.4263 15.2986L24.7064 13.5788L14.7985 23.4867L14.7985 0.081543H12.4056L12.4056 23.4867L2.4977 13.5788L0.777832 15.2986L12.7421 27.2629L13.6021 28.0854Z" fill="#F45531"></path></svg>
                                    </div> */}
                    {/* </td> */}
                    {IncreaseDecrease(item?.annualReturn, (item?.annualReturn*100)/item?.accountValue)}

                    {/* <td>
                      <div className="flexBox text-light-green">
                        52,832,199,555.31%
                        <svg
                          className="ml-12"
                          width="16"
                          height="17"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 0.445312L8.46094 0.960937L0.960938 8.46094L2.03906 9.53906L8.25 3.32812V18H9.75V3.32812L15.9609 9.53906L17.0391 8.46094L9.53906 0.960937L9 0.445312Z"
                            fill="#00FFA0"
                          />
                        </svg>
                      </div>
                    </td> */}
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>}
    </>
  );
}
