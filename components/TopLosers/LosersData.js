import React, { useEffect, useState } from "react";

export default function LosersData(Props) {
    const [LoserList, setLoserList] = useState()

    useEffect(() => {
        let {listLoserData} = Props
        setLoserList(listLoserData)
    })
    return (
      <>
        <li>
          <div className="stock--detail">
            <div className="light--purple--circle"></div>
            <div>
              {LoserList?.LoserTitle && (
                <p className="stock--title">{LoserList?.LoserTitle}</p>
              )}
              {LoserList?.LoserSubTitle && (
                <p className="stock--sub--title">{LoserList?.LoserSubTitle}</p>
              )}
            </div>
          </div>
          <div className="stock--positions loser--stock--position">
            {LoserList?.LoserDat && (
              <div className="stock--dat">{LoserList?.LoserDat}</div>
            )}
            <div>
              {LoserList?.LoserPosition && (
                <p className="stock--position">{LoserList?.LoserPosition}</p>
              )}
              {LoserList?.LoserSubPosition && (
                <p className="stock--subposition">
                  {LoserList?.LoserSubPosition}
                </p>
              )}
            </div>
          </div>
        </li>
      </>
    );
}