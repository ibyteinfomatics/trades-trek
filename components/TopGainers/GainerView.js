import React from "react";
import GainersData from "./GainersData";
import { GainersList } from "./GainersList";

export default function GainerView() {
    return(
        <>
            <div className="card--style card--list--style">
                <ul>
                    {GainersList.map((data, index) => {
                        if(index <= 5){
                            return <GainersData key={index} listGainerData={data} />
                        }
                    })}
                </ul>
            </div>
        </>
    )
}

export const GainerView2 = () => {
    return (
      <>
        <div className="card--style card--list--style">
          <ul>
            {GainersList.map((data, index) => {
                return <GainersData key={index} listGainerData={data} />
            })}
          </ul>
        </div>
      </>
    )
}