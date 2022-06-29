import React from "react";
import { WatchList } from "./WatchList";
import WatchListCard from "./WatchListCard";

export default function WatchListData() {
    return(
        <>
            {WatchList.map((data, index) => {
                if(index <=3){
                    return(
                        <>
                            <WatchListCard key={index} listData={data} />
                        </>
                    )
                }
            })}
        </>
    )
}

export const WatchListData2 = () => {
    return(
        <>
            {WatchList.map((data, index) => {
                return(
                    <>
                        <WatchListCard key={index} listData={data} />
                    </>
                )
            })}
        </>
    )
}