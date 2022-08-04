import React, { useEffect, useState } from "react";
import IncreaseDecrease from "./IncreaseDecrease";

const HoldingInfo = ({totalValue,totalChange,setRefresh,refresh}) => {
  const [totalChanges,setTotalChange]=useState(0)
  useEffect(()=>{
  
   let temp=(totalChange*100)/(totalValue-totalChange)
    setTotalChange(temp)

  },[totalValue,totalChange])
  return (
    <div style={{ marginBottom: "20px" }}>

      <button style={{marginLeft:'90%',padding:'5px 10px',border:'1px solid black',marginTop:'20px'}} onClick={()=>setRefresh(!refresh)}>Refresh</button>
      <table  >
        <tr>
          <td>TOTAL VALUE</td>
          <td>TODAY'S CHANGE</td>
          <td>TODAY GAIN/LOSS</td>
        </tr>
        <tr>
          <td>
            <h1>${totalValue}</h1>
          </td>
          {IncreaseDecrease(0,0)}
          {IncreaseDecrease(totalChange,totalChanges)}
        </tr>
      </table>
    </div>
  );
};

export default HoldingInfo;
