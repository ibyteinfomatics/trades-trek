import React, { useEffect, useState } from "react";
import HighlightTrades from "../../components/HighlightTrades/HighlightTrades";

import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { notificationService } from "../../services/notification.service";
import TimeAgo from "timeago-react";
import { Loader } from "@mantine/core";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  let { user } = useSelector((state) => state.userWrapper);
  useEffect(() => {
    GetAllNotification();
  }, []);

  const GetAllNotification = () => {
    setIsLoading(true)
    notificationService
      .getUserAllNotification()
      .then((res) => {
        
        setNotifications(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  };

  return (
    <>
      <Sidebar />

      <div className="site--content pageCenterWidth">
        {/* <UpgradePlan /> */}
        <HighlightTrades />

        {/* welcome block */}

        <div className="center--block" style={{ marginTop: "20px" }}>
          {isLoading?<div
            style={{
              width: "100%",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader color="#8000ff" />
          </div>: notifications?.map((notification) => {
            return (
              <div className="notificationGroup">
                <div className="flexBox">
                  <h1 className="name">
                    {notification?.username.toUpperCase()}
                  </h1>
                  <div className="time">
                  <TimeAgo
  datetime={notification.createdAt}
  // locale='zh_CN'
/>
                  </div>
                </div>
                <p>{notification?.message}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
