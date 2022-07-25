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

export default function Profie() {
  return (
    <>
      <Sidebar />
      <div className="site--content">
        <div className="page--title--block">
          <div className="card-no-gap">
            <div className="trade-data">
              <Tabs>
                <TabList>
                  <Tab>Account</Tab>
                  <Tab>Security</Tab>
                  <Tab>Invite a Friend</Tab>
                  <Tab>Help & Support</Tab>
                  <Tab>Write a Review</Tab>
                  <Tab>Terms & Conditions</Tab>
                </TabList>
                {/* account ... */}
                <TabPanel>
                  <Account />
                </TabPanel>
                {/* Security  */}
                <TabPanel>
                  <Security />
                </TabPanel>
                {/* invite Friend */}
                <TabPanel>
                  <InviteFriend />
                </TabPanel>
                {/* Help and support  */}
                <TabPanel>
                    <HelpSupport />
                </TabPanel>
                {/* write Review  */}
                <TabPanel>
               <WriteReview />
                </TabPanel>
                {/* Term and Conditions */}
                <TabPanel>
                 <TermCondition />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
