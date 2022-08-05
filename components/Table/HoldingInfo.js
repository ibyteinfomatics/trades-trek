import React, { useEffect, useState } from "react";
import IncreaseDecrease from "./IncreaseDecrease";

const HoldingInfo = ({totalValue,totalChange,setRefresh,refresh,todayChange}) => {
  const [totalChanges,setTotalChange]=useState(0);
  const [todayPer,setTodayPer]=useState(0)
  useEffect(()=>{
  
   let temp=(totalChange*100)/(totalValue-totalChange)
   let temp1=(todayChange*100)/(totalValue-todayChange)
    setTotalChange(temp)
    setTodayPer(temp1)

  },[totalValue,totalChange,todayChange])
  return (
    <div style={{    
      marginBottom: '73px',
      padding: '53px',boxShadow: '5px 5px 5px 5px #f7f7f7' }}>

      <button style={{marginLeft:'90%',padding:'5px 10px',border:'1px solid black',marginTop:'20px'}} onClick={()=>setRefresh(!refresh)}>Refresh</button>
      <table  >
        <tr>
          <td>TOTAL VALUE</td>
          <td>TODAY'S CHANGE</td>
          <td>TODAY GAIN/LOSS</td>
        </tr>
        <tr>
          <td>
            <h1>${totalValue.toFixed(3)}</h1>
          </td>
          {IncreaseDecrease(todayChange,todayPer)}
          {IncreaseDecrease(totalChange,totalChanges)}
        </tr>
      </table>
    </div>
  );
};

export default HoldingInfo;
