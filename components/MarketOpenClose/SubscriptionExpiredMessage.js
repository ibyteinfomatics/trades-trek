import moment from "moment-timezone";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NigerianTimeZone from "../../helpers/Negerian-TimeZone";

const SubscriptionExpiredMessage = () => {
  let { user } = useSelector((state) => state.userWrapper);


  return (
    <div className="status-summary font-18">
    <span>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.375 0.25C3.89746 0.25 0.25 3.89746 0.25 8.375C0.25 12.8525 3.89746 16.5 8.375 16.5C12.8525 16.5 16.5 12.8525 16.5 8.375C16.5 3.89746 12.8525 0.25 8.375 0.25ZM8.375 1.5C12.1787 1.5 15.25 4.57129 15.25 8.375C15.25 12.1787 12.1787 15.25 8.375 15.25C4.57129 15.25 1.5 12.1787 1.5 8.375C1.5 4.57129 4.57129 1.5 8.375 1.5ZM7.75 4V10.25H9V4H7.75ZM7.75 11.5V12.75H9V11.5H7.75Z"
          fill="#F45531"
        />
      </svg>
    </span>
   {NigerianTimeZone(new Date())>=NigerianTimeZone(user?.user?.expiredDate)?`Your subscription is expired (${moment(user?.user?.expiredDate).format('ll')}).`:` Your Next Billing Date ${moment(user?.user?.expiredDate).format('ll')}`}
  </div>
  );
};

export default SubscriptionExpiredMessage;
