import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { gameService } from "../../services/game.service";
import IncreaseDecrease from "../Table/IncreaseDecrease";

export default function WinnerListView() {
  let { user } = useSelector((state) => state.userWrapper);
  const [top5,setTop5]=useState([])
  useEffect(() => {
    gameService
      .getWinner().then((res)=>{
        if(res.success){
          setTop5(res.top)
        }
      }).catch((err)=>console.log(err));
  }, [user]);

  return (
    <>
      <div className="competation-">
        {/* <div style={{
        display:'flex',
        justifyContent:'flex-end'
        }}>
       
         <select style={{padding:'10px 20px',margin:'20px 10px'}}>
          <option>Jan-June(2022)</option>
          <option>July-Dec(2022)</option>

         </select>
        </div> */}
      <div className="summeyTable">
          <div className="status-summary noRadius font-18 summery-table summeyTable">
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
                    <td>{index +1}</td>
                    <td>{item?.userId?.username}</td>
                    <td>
                      ₦{" "}
                      {item?.accountValue
                        ?.toFixed(2)
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </td>
                    {IncreaseDecrease(item?.profitOrLossToday, (item?.profitOrLossToday*100)/item?.accountValue)}
                    {/* <div className='flexBox'>

                                        -$4.00 (NaN%)
                                        <svg className="ml-12" width="16" height="17" viewBox="0 0 27 29" fill="none"><path d="M13.6021 28.0854L14.462 27.2629L26.4263 15.2986L24.7064 13.5788L14.7985 23.4867L14.7985 0.081543H12.4056L12.4056 23.4867L2.4977 13.5788L0.777832 15.2986L12.7421 27.2629L13.6021 28.0854Z" fill="#F45531"></path></svg>
                                    </div> */}
                    {/* </td> */}
                    {IncreaseDecrease(item?.annualReturn, (item?.annualReturn*100)/item?.accountValue)}

                   
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
