import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function TradeLists(Props) {
    const [list,setList]=useState()

    useEffect(()=>{
        let {listData}=Props
        setList(listData)
    },[])
    return (
      <>
        <li>
          <div className="trade--image">
            <Image
              src={list?.PerChange>=0?"/images/position-up.svg":"/images/position-down.svg"}
              layout="responsive"
              width={34}
              height={20}
              alt=""
            />
          </div>
          <div className="trade--detail">
            <p className="trade--name">{list?.Symbol}</p>
            <p className="trade--position">{list?.PerChange>=0?`+ ${list?.PerChange}%`:`${list?.PerChange}%`}</p>
          </div>
        </li>
      </>
    );
}