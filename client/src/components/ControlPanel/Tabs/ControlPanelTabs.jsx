import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

import WebcamLowerThird from './FormsOLD/WebcamLowerThird';
import WebcamVeto from './FormsOLD/WebcamVeto';
import HUD from './FormsOLD/HUD';
import PlaydayUpcomingMatches from './FormsOLD/PlaydayUpcomingMatches';
import CurrentMatchup from './FormsOLD/CurrentMatchup';
import LeagueTable from './FormsOLD/LeagueTable';

const { TabPane } = Tabs;

const ControlPanelTabs = () => {
  return (
    <>
      <br />
      <Tabs
        defaultActiveKey="1"
        centered
        size="50%"
      >
        <TabPane tab="League Table" key="1">
          <LeagueTable/>
        </TabPane>
        <TabPane tab="Current Matchup" key="2">
          <CurrentMatchup/>
        </TabPane>
        <TabPane tab="Playday Upcoming Matches" key="3">
          <PlaydayUpcomingMatches/>
        </TabPane>
        <TabPane tab="Webcam Lower Third" key="4">
          <WebcamLowerThird />
        </TabPane>
        <TabPane tab="Webcam Veto" key="5">
          <WebcamVeto/>
        </TabPane>
        <TabPane tab="HUD" key="6">
          <HUD/>
        </TabPane>
      </Tabs>
    </>
  );
};

export default ControlPanelTabs;
