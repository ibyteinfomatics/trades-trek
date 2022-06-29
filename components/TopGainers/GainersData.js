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
            <div className="light--purple--circle"></div>
            <div>
              {GainerList?.GainerTitle && (
                <p className="stock--title">{GainerList?.GainerTitle}</p>
              )}
              {GainerList?.GainerSubTitle && (
                <p className="stock--sub--title">{GainerList?.GainerSubTitle}</p>
              )}
            </div>
          </div>
          <div className="stock--positions">
            {GainerList?.GainerDat && (
              <div className="stock--dat">{GainerList?.GainerDat}</div>
            )}
            <div>
              {GainerList?.GainerPosition && (
                <p className="stock--position">{GainerList?.GainerPosition}</p>
              )}
              {GainerList?.GainerSubPosition && (
                <p className="stock--subposition">
                  {GainerList?.GainerSubPosition}
                </p>
              )}
            </div>
          </div>
        </li>
      </>
    );
}