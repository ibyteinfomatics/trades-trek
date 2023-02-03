import Image from "next/image";
import React from "react";

export default function WatchListCard({listData,removeItem}) {
    
    return (
      <>
        <div className="card--style">
          <div className="card--data">
            <div className="card--row">
              <ul>
                {listData?.Name && (
                  <li>
                    <p className="card--title--label">Stock Name</p>
                    <p className="card--title">{listData?.Name}</p>
                  </li>
                )}
                {listData?.Last && (
                  <li>
                    <p className="card--title--label">Current Price</p>
                    <p className="card--title">{listData?.Last}</p>
                  </li>
                )}
                
                  <li>
                    <span className="card--image">
                      <Image
                        src={
                          listData?.PerChange>=0?"/images/position-up.svg" :"/images/position-down.svg"
                        }
                        layout="responsive"
                        width={101}
                        height={70}
                        alt=""
                      />
                    </span>
                  </li>
                
              </ul>
            </div>
            <div className="card--row">
              <ul>
               
                  <li>
                    <p className="card--title--label">Volume</p>
                    <p className="card--title">{listData?.Volume 
                          ?.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  </li>
               
               
                  <li>
                    <p className="card--title--label">Change</p>
                    <p className="card--title">{listData?.Change ?.toFixed(2)
                          ?.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  </li>
              
               
                  <li>
                    <p className="card--title--label">%Change</p>
                    <p className="card--title">{listData?.PerChange ?.toFixed(2)
                          ?.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} %</p>
                          
                  </li>
                 
                 
                    <p className="card--title--label removeWatch" onClick={()=>{
                      removeItem(listData?.Symbol)
                    
                    }}>*</p>
                   
                          
                
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}