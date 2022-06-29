import React from "react";
import LosersData from "./LosersData";
import { LosersList } from "./LosersList";

export default function LoserView() {
    return(
        <>
            <div className="card--style card--list--style">
                <ul>
                    {LosersList.map((data, index) => {
                        if(index <= 5){
                            return <LosersData key={index} listLoserData={data} />
                        }
                    })}
                </ul>
            </div>
        </>
    )
}

export const LoserView2 = () => {
    return (
      <>
        <div className="card--style card--list--style">
          <ul>
            {LosersList.map((data, index) => {
                return <LosersData key={index} listLoserData={data} />
            })}
          </ul>
        </div>
      </>
    )
}