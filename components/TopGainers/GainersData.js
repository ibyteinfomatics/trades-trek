import React, { useEffect, useState } from "react";

export default function GainersData(Props) {
    const [GainerList, setGainerList] = useState()

    useEffect(() => {
        let {listGainerData} = Props
        setGainerList(listGainerData)
    })
  
    return (
      <>
        <li>
          <div className="stock--detail">
            <div className="light--purple--circle">{GainerList?.Name[0]}</div>
            <div>
              {GainerList?.Symbol && (
                <p className="stock--title">{GainerList?.Symbol}</p>
              )}
              {GainerList?.Name && (
                <p className="stock--sub--title">{GainerList?.Name}</p>
              )}
            </div>
          </div>
          <div className="stock--positions">
            {GainerList?.Last && (
              <div className="stock--dat">{GainerList?.Last?.toFixed(2)}</div>
            )}
            <div>
              
                <p className="stock--position">+{GainerList?.PerChange?.toFixed(2)}%</p>
           
            
                <p className="stock--subposition">
                  +{GainerList?.Change?.toFixed(2)}
                </p>
           
            </div>
          </div>
        </li>
      </>
    );
}