import React from "react";
import TimeAgo from "timeago-react";

const NoficationCart = ({setSelectedId, notification,setModelOpened }) => {
         
  return (
    <>
      <div className="notificationGroup">
        <div className="flexBox">
          <h1 className="name">{notification?.username.toUpperCase()}</h1>
          <div className="time">
            <TimeAgo
              datetime={notification.createdAt}
              // locale='zh_CN'
            />
          </div>
          <div onClick={()=>{
                    setSelectedId(notification._id)
                    setModelOpened(true)
          }} className="ClearNotification">X</div>
        </div>
        <p>{notification?.message}</p>
      </div>
      
    </>
  );
};

export default NoficationCart;
