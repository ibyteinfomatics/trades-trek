import React from "react";
import { NewsList } from "./NewsList";
import NewsListCard from "./NewsListCard";

export default function NewsListData() {
    return (
      <>
        {NewsList.map((data, index) => {
          if (index <= 3) {
            return <NewsListCard key={index} listData={data} />
          }
        })}
      </>
    );
}

export const NewsListData2 = () => {
    return(
        <>
            {NewsList.map((data, index) => {
                return(
                    
                        <NewsListCard key={index} listData={data} />
                 
                )
            })}
        </>
    )
}