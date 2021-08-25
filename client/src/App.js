import React from "react";
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar, TeamManagement, PlayerManagement, OverlayMenu, LeagueTable, ControlPanel } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Navbar />
          <Switch>
            <Route path="/db/teams" exact component={() => <TeamManagement />} />
            <Route path="/db/players" exact component={() => <PlayerManagement />} />
            <Route path="/controlpanel" exact component={() => <ControlPanel />} />
            <Route path="/overlays" exact component={() => <OverlayMenu/>} />
            <Route path="/overlays/leaguetable" exact component={() => <LeagueTable/>} />
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App;