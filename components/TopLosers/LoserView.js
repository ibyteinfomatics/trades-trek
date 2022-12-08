import { Loader } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { stockService } from "../../services/stock.service";
import LosersData from "./LosersData";

export default function LoserView({showLosersList}) {
    const [LosersList,setLosersList]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    useEffect(() => {
        setIsLoading(true)
     stockService.getTopLooser().then((res)=>{
        setLosersList(res.data)
        setIsLoading(false)
     }).catch((err)=>{
        setIsLoading(false)
     })
    }, [])
    
    return(
        <>
            <div className="card--style card--list--style">
                {isLoading?<div
                  style={{
                    width: "100%",
                    height: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                 flexDirection:'column'
                  }}
                >
                  <Loader color="#8000ff" />
                  <h1>Please Wait ...</h1>
                </div>:<ul>
                   {showLosersList? LosersList.map((data, index) => {
                        if(index <= 5){
                            return <LosersData key={index} listLoserData={data} />
                        }
                    }):LosersList.map((data, index) => {
                       
                            return <LosersData key={index} listLoserData={data} />
                    
                    })}
                </ul>}
            </div>
        </>
    )
}

