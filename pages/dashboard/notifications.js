import React, { useEffect, useState } from "react";
import HighlightTrades from "../../components/HighlightTrades/HighlightTrades";

import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { notificationService } from "../../services/notification.service";
import TimeAgo from "timeago-react";
import { Loader } from "@mantine/core";
import SubscriptionExpiredMessage from "../../components/MarketOpenClose/SubscriptionExpiredMessage";
import ToolTipCustome from "../../components/Competition/ToolTip";
import { toast, ToastContainer } from "react-toastify";
import NoficationCart from "../../components/Notification/NoficationCart";
import { Modal, useMantineTheme } from "@mantine/core";
import { userService } from "../../services";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { user } = useSelector((state) => state.userWrapper);
  const [status, setStaus] = useState(false);
  const [modelOpened, setModelOpened] = useState(false);
  const [modelOpened1, setModelOpened1] = useState(false);

  const [selectedId, setSelectedId] = useState("");
  useEffect(() => {
    GetAllNotification();
    setStaus(user?.user?.allowNotification);
  }, [user]);

  const theme = useMantineTheme();

  const GetAllNotification = () => {
    setIsLoading(true);
    notificationService
      .getUserAllNotification()
      .then((res) => {
        setNotifications(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const handleStatus = (value) => {
    setStaus(value);
    userService
      .allowNotificationStatus(value)
      .then((res) => {
        if (res.success) {
          toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const deleteNotificationById = (id) => {
    notificationService
      .notificationDeleteById(id)
      .then((res) => {
        setModelOpened(false);
        GetAllNotification();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const deleteAll = () => {
    notificationService
      .deleteAllNotifications()
      .then((res) => {
        setModelOpened1(false);
        GetAllNotification();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Sidebar />

      <div className="site--content pageCenterWidth">
        {/* <UpgradePlan /> */}
        {user?.user && <SubscriptionExpiredMessage />}

        {/* welcome block */}
        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="center--block" style={{ marginTop: "20px" }}>
          <div className="form--item toggle rightAlign">
            {notifications.length >1 && (
              <button
                onClick={() => setModelOpened1(true)}
                className="btn clear"
              >
                Clear All
              </button>
            )}
            <div className="box_1">
              <input
                value={status}
                checked={status}
                type="checkbox"
                className="switch_1"
                onChange={(e) => handleStatus(e.target.checked)}
              />
              <ToolTipCustome text={`Email and Notification Allowed.`} />
            </div>
          </div>
          {isLoading ? (
            <div
              style={{
                width: "100%",
                height: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader color="#8000ff" />
            </div>
          ) : notifications.length == 0 ? (
            <div className="notFound">Notification Not Found!</div>
          ) : (
            notifications?.map((notification, index) => {
              return (
                <NoficationCart
                  setSelectedId={setSelectedId}
                  GetAllNotification={GetAllNotification}
                  modelOpened={modelOpened}
                  setModelOpened={setModelOpened}
                  key={index}
                  notification={notification}
                />
              );
            })
          )}
        </div>
        <Modal
          withCloseButton={false}
          overlayColor={
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2]
          }
          overlayOpacity={0.55}
          overlayBlur={3}
          opened={modelOpened}
          size="35%"
          centered={true}
          onClose={() => {
            setModelOpened(false);
          }}
        >
          <div>
            <h2 style={{ textAlign: "center", margin: "20px 10px" }}>
              <b>Do you want to Delete ? </b>
            </h2>

            <div style={{ border: "1px solid #c9cdd1", marginTop: "40px" }}>
              <button
                style={{
                  width: "50%",
                  borderRight: "0.5px solid #c9cdd1",
                  padding: "10px",
                }}
                onClick={() => {
                  deleteNotificationById(selectedId);
                }}
                className="done"
              >
                Yes
              </button>
              <button
                onClick={() => setModelOpened(false)}
                style={{
                  width: "50%",
                  borderRight: "0.5px solid #c9cdd1",
                  padding: "10px",
                }}
                className="cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          withCloseButton={false}
          overlayColor={
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2]
          }
          overlayOpacity={0.55}
          overlayBlur={3}
          opened={modelOpened1}
          size="35%"
          centered={true}
          onClose={() => {
            setModelOpened1(false);
          }}
        >
          <div>
            <h2 style={{ textAlign: "center", margin: "20px 10px" }}>
              <b>Do you want to Delete All Notifications ? </b>
            </h2>

            <div style={{ border: "1px solid #c9cdd1", marginTop: "40px" }}>
              <button
                style={{
                  width: "50%",
                  borderRight: "0.5px solid #c9cdd1",
                  padding: "10px",
                }}
                onClick={() => {
                  deleteAll();
                }}
                className="done"
              >
                Yes
              </button>
              <button
                onClick={() => setModelOpened1(false)}
                style={{
                  width: "50%",
                  borderRight: "0.5px solid #c9cdd1",
                  padding: "10px",
                }}
                className="cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
