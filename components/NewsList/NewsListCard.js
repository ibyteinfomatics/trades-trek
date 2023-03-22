import Link from "next/link";
import React, { useEffect, useState } from "react";
import TimeAgo from "timeago-react";

export default function NewsListCard(Props) {
    const [newsList, setNewsList] = useState()

    useEffect(() => {
        let {listData} = Props
        setNewsList(listData)
    },[])
    return (
      <>
        <div className="card--style">
          
            <p className="card--title--label label--purple">{<TimeAgo
              datetime={newsList?.[3]}
              // locale='zh_CN'
            />}</p>
          <img src={newsList?.[8]} />
          
          {newsList?.[1] && (
            <p className="card--title newsTitle">{newsList?.[1]}</p>
          )}
          {newsList?.[5] && (
            <p className="card--title newsTitle">{newsList?.[5]}</p>
          )}
          
            <p className="card--title--label label--purple">Author :-               {newsList?.[2]}
            </p>
            <p className="card--title--label label--purple">Source :-               {newsList?.[4]}
            </p>
          
          <button><a href={newsList?.[6]} target='_blank'>See more</a></button>
        </div>
      </>
    );
}