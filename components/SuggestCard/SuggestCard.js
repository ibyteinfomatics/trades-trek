import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const SuggestCard = () => {
    const [topCompanies,setTopCompanies]=useState()
    const {topCompany }=useSelector((state)=>state.popularCompanyWrapper)
    useEffect(()=>{
        setTopCompanies(topCompany)
    },[])
    
   
  return (
    <div className="explore--comp">
      <h3 className="heading3">EXPLORE OTHER POPULAR COMPANIES</h3>
      <div className="explore_flex">
      {topCompanies && topCompanies.map((item)=>{
           return(
            <div className="card--style">
            <div className="card--data">
              <div className="card--row">
                <ul>
                  <li>
                    <p className="card--title--label">Stock Name</p>
                    <p className="card--title">{item.Symbol}</p>
                    <p className="card--title">{item.Name}</p>

                  </li>
      
                  <li>
                    <p className="card--title--label">Current Price</p>
                    <p className="card--title">{item.Last?.toFixed(3)}</p>
                  </li>
                </ul>
              </div>
              <div className="card--row">
                <ul>
                  <li>
                    <p className="card--title--label">Volume</p>
                    <p className="card--title">{item?.Volume}</p>
                  </li>
      
                  <li>
                    <p className="card--title--label">Change</p>
                    <p className="card--title">{item?.Change}</p>
                  </li>
      
                  <li>
                    <p className="card--title--label">%Change</p>
                    <p className="card--title">{item?.PerChange}%</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
           )
        })} 
      </div>
      
    </div>
  );
};

export default SuggestCard;
