import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NewsListCard(Props) {
    const [newsList, setNewsList] = useState()

    useEffect(() => {
        let {listData} = Props
        setNewsList(listData)
    },[])
    return (
      <>
        <div className="card--style">
          {newsList?.NewsTime && (
            <p className="card--title--label label--purple">{newsList?.NewsTime}</p>
          )}
          {newsList?.NewsTitle && (
            <p className="card--title newsTitle">{newsList?.NewsTitle}</p>
          )}
        </div>
      </>
    );
}