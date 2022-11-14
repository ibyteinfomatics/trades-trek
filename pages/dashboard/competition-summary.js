import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CompetationSummeryView from "../../components/Competition/CompetitionSummaryView";
import MyCompetationView from "../../components/Competition/MyCompetitionView";
import JoinCompetation from "../../components/Competition/JoinCompetition";
import CreateCompetation from "../../components/Competition/CreateCompetition";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import SelectGame from "../../components/SelectGame/SelectGame";
import WinnerListView from "../../components/Competition/CompetitionListView";
import PastCompetitionView from "../../components/Competition/PastCompetitionView";

export default function CompetationSummery() {
  const [beginnerOption, setBeginnerOption] = useState(false);
  let { user } = useSelector((state) => state.userWrapper);
  const router = useRouter();
  useEffect(() => {
    if (user.subscription == "Freemium") {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <>
      <Sidebar />
      <div className="site--content competation-page">
        <div className="page--title--block">
          <div className="grid--2">
            <div className="grid-block-left wrapper--title">
              <h3>
                Welcome,{" "}
                {user &&
                  `${user?.user?.firstName || ""} ${user?.user?.lastName ||
                    ""}`}{" "}
              </h3>
            </div>
            <SelectGame />
            {/* <div className="grid-block-right right-align">
                            <div className="beginner-option">
                                Current Competition
                                <span
                                    className="btn"
                                    onClick={() => setBeginnerOption(!beginnerOption)}
                                >
                                    Beginners
                                </span>
                                {beginnerOption && (
                                    <div className="option--list">
                                        <ul>
                                            <li>Beginners </li>
                                            <li>Beginners 1</li>
                                            <li>Beginners 2</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div> */}
          </div>
        </div>
        <div className="card--wrapper learning-research">
          <div className="trade-data">
            <div className="">
              <Tabs>
                <TabList>
                  <Tab>Summary</Tab>
                  <Tab>My Competitions</Tab>
                  <Tab>Join Competition</Tab>
                  <Tab>Create Competition</Tab>
                  <Tab>Winner List</Tab>
                </TabList>
                <TabPanel className="tab-content-gap">
                  <div className="myCompetation">
                    <CompetationSummeryView />
                  </div>
                </TabPanel>
                <TabPanel className="tab-content-gap">
                  <div className="myCompetation">
                    <MyCompetationView />
                    <div style={{margin:'10px 0px'}}>
                      <h1 style={{fontSize:"18px"}}>Past Games</h1>
                    </div>
                    <PastCompetitionView />
                  </div>
                </TabPanel>
                <TabPanel className="tab-content-gap">
                  <div className="summeryData">
                    <JoinCompetation />
                  </div>
                </TabPanel>
                <TabPanel className="tab-content-gap">
                  <div className="summeryData">
                    <CreateCompetation />
                  </div>
                </TabPanel>
                <TabPanel className="tab-content-gap">
                  <div className="summeryData">
                    <WinnerListView />
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
