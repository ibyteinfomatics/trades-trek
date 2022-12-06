import React, { useEffect, useState } from "react";
import HighlightTrades from "../../components/HighlightTrades/HighlightTrades";

import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { notificationService } from "../../services/notification.service";
import TimeAgo from "timeago-react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  let { user } = useSelector((state) => state.userWrapper);
  useEffect(() => {
    GetAllNotification();
  }, []);

  const GetAllNotification = () => {
    notificationService
      .getUserAllNotification()
      .then((res) => {
        console.log(res);
        setNotifications(res.data);
      })
      .catch((err) => {
        console.log(err);
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
          {notifications?.map((notification) => {
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
