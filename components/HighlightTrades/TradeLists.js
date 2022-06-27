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
              src={"/images/" + list?.tradeImage + ".svg"}
              layout="responsive"
              width={34}
              height={20}
              alt=""
            />
          </div>
          <div className="trade--detail">
            <p className="trade--name">{list?.tradeTitle}</p>
            <p className="trade--position">{list?.tradePosition}</p>
          </div>
        </li>
      </>
    );
}