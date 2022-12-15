import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NigerianTimeZone from '../../helpers/Negerian-TimeZone';

const SubscriptionExpire = () => {
  let { user } = useSelector((state) => state.userWrapper);

          const [message,setMessage]=useState('')
          function timeDiffCalc(dateFuture, dateNow) {
                   
                    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
                
                    // calculate days
                    const days = Math.floor(diffInMilliSeconds / 86400);
                    diffInMilliSeconds -= days * 86400;
                
                    // calculate hours
                    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
                    diffInMilliSeconds -= hours * 3600;
                
                    // calculate minutes
                    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
                    diffInMilliSeconds -= minutes * 60;
                
                    let difference = "";
                    if (days > 0) {
                      difference += days === 1 ? `${days} day, ` : `${days} days, `;
                    }
                
                    difference +=
                      hours === 0 || hours === 1 ? `${hours} hour, ` : `${hours} hours, `;
                
                    difference +=
                      minutes === 0 || hours === 1
                        ? `${minutes} minutes`
                        : `${minutes} minutes`;
                
                    return difference;
                  }
                  const timeCount = () => {
                    var today = new Date();
                    var temp = NigerianTimeZone(today);
                    var expired=user?.user?.expiredDate
                    var temp1 = NigerianTimeZone(expired);
                    today=  new Date(moment(temp).format("YYYY-MM-DD HH:mm:ss"))
                    expired=new Date(moment(temp1).format("YYYY-MM-DD HH:mm:ss"))
                   
                  setMessage(timeDiffCalc(expired,today))
                
                   
                  };

                  useEffect(() => {
               if(user?.user?.expiredDate){
                              setInterval(() => {
                                timeCount()
                            
                                }, 1000);
                              }
                         
                          
                     
                  }, [user?.user?.expiredDate])
                  
  return (
    <div style={{color:'red'}}>  {message ?`Your subscription is expired after ${message}`:""}</div>
  )
}

export default SubscriptionExpire