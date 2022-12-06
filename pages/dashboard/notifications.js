
import React, { useEffect, useState } from 'react';
import HighlightTrades from '../../components/HighlightTrades/HighlightTrades';

import Sidebar from '../../components/Sidebar/Sidebar';
;
import { useSelector } from 'react-redux';
import { notificationService } from '../../services/notification.service';


export default function Notifications() {

  const [notifications,setNotifications]=useState([])
  let { user } = useSelector((state) => state.userWrapper);
  useEffect(() => {
    GetAllNotification()
  }, [])

  const GetAllNotification=()=>{
    notificationService.getUserAllNotification().then((res)=>{
      console.log(res)
      setNotifications(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  
 
  return (
    <>
      <Sidebar />

      <div className="site--content">
        {/* <UpgradePlan /> */}
        <HighlightTrades />

        {/* welcome block */}
      

        <div className="wrapper--hgroup">
        <div className="page--title--block">
          <div className="card-no-gap trade-data">
            {
              notifications.map((notification)=>{
                return( <div>
                      <h1>Nitesh</h1>
                </div>)
              })
            }
                   
                    </div>
                    </div>
       
        </div>
      </div>
    </>
  );
}
