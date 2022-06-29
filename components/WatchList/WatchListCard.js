import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function WatchListCard(Props) {
    const [watchList, setWatchList] = useState()

    useEffect(() => {
        let {listData} = Props
        setWatchList(listData)
    },[])
    return (
      <>
        <div className="card--style">
          <div className="card--data">
            <div className="card--row">
              <ul>
                {watchList?.StockName && (
                  <li>
                    <p className="card--title--label">Stock Name</p>
                    <p className="card--title">{watchList?.StockName}</p>
                  </li>
                )}
                {watchList?.CurrentPrice && (
                  <li>
                    <p className="card--title--label">Current Price</p>
                    <p className="card--title">{watchList?.CurrentPrice}</p>
                  </li>
                )}
                {watchList?.StockPositionImage && (
                  <li>
                    <span className="card--image">
                      <Image
                        src={
                          "/images/" + watchList?.StockPositionImage + ".svg"
                        }
                        layout="responsive"
                        width={101}
                        height={70}
                        alt=""
                      />
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <div className="card--row">
              <ul>
                {watchList?.Volume && (
                  <li>
                    <p className="card--title--label">Volume</p>
                    <p className="card--title">{watchList?.Volume}</p>
                  </li>
                )}
                {watchList?.Change && (
                  <li>
                    <p className="card--title--label">Change</p>
                    <p className="card--title">{watchList?.Change}</p>
                  </li>
                )}
                {watchList?.PercentageChange && (
                  <li>
                    <p className="card--title--label">%Change</p>
                    <p className="card--title">{watchList?.PercentageChange}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}