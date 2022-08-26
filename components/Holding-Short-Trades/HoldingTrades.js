import Link from "next/link";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MarketOpenClose from "../MarketOpenClose/MarketOpenClose";
import HoldingTables from "./HoldingTables";
import ShortTable from "./Short-Table";

const HoldingTrades = () => {
  return (
    <div className="card-no-gap">
      <div className="trade-data">
        <Tabs>
          <TabList>
            <Tab>Holding Order</Tab>
            <Tab>Short Order</Tab>
          </TabList>

          <TabPanel>
            <div className="tab-data order-status">
              <MarketOpenClose />
              <HoldingTables />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab-data order-status">
              <MarketOpenClose />
              <ShortTable />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default HoldingTrades;
