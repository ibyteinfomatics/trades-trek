import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import CompetationSummeryView from '../../components/Competition/CompetitionSummaryView';
import MyCompetationView from '../../components/Competition/MyCompetitionView';
import JoinCompetation from '../../components/Competition/JoinCompetition';
import CreateCompetation from '../../components/Competition/CreateCompetition';

export default function CompetationSummery() {
    const [beginnerOption, setBeginnerOption] = useState(false);
    return (
        <>
            <Sidebar />
            <div className="site--content competation-page">
                <div className="page--title--block">
                    <div className="grid--2">
                        <div className="grid-block-left wrapper--title">
                            <h3>Welcome, John Adams</h3>
                        </div>
                        <div className="grid-block-right right-align">
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
                        </div>
                    </div>
                </div>
                <div className='card--wrapper learning-research'>
                    <div className="trade-data">
                        <div className=''>
                            <Tabs>
                                <TabList>
                                    <Tab>Summary</Tab>
                                    <Tab>My Competitions</Tab>
                                    <Tab>Join Competition</Tab>
                                    <Tab>Create Competition</Tab>
                                </TabList>
                                <TabPanel className="tab-content-gap">
                                    <div className='myCompetation'>
                                        <CompetationSummeryView />
                                    </div>
                                </TabPanel>
                                <TabPanel className="tab-content-gap">
                                    <div className='myCompetation'>
                                        <MyCompetationView />
                                    </div>
                                </TabPanel>
                                <TabPanel className="tab-content-gap">
                                    <div className='summeryData'>
                                        <JoinCompetation />
                                    </div>
                                </TabPanel>
                                <TabPanel className="tab-content-gap">
                                    <div className='summeryData'>
                                        <CreateCompetation />
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}