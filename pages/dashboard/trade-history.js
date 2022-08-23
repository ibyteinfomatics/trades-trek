import Link from "next/link";
import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Account from "../../components/profileComponent/Account";
import HelpSupport from "../../components/profileComponent/HelpSupport";
import InviteFriend from "../../components/profileComponent/InviteFriend";
import Security from "../../components/profileComponent/Security";
import TermCondition from "../../components/profileComponent/TermCondition";
import WriteReview from "../../components/profileComponent/WriteReview";
import Sidebar from "../../components/Sidebar/Sidebar";
import TradeOrderTable from "../../components/Table/Table";

export default function TradeHistory() {
  return (
    <>
      <Sidebar />
      <div className="site--content">
        <div className="page--title--block">
          <div className="card-no-gap">
            <div className="trade-data">
              <Link href='/dashboard/portfolio'><a className="btn form--submit">Back to Portfolio</a></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
