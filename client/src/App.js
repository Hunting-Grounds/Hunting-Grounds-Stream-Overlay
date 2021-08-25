import React from "react";
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar, TeamManagement, PlayerManagement, OverlayMenu, LeagueTable } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Navbar />
          <Switch>
            <Route path="/db/team" exact component={() => <TeamManagement />} />
            <Route path="/db/player" exact component={() => <PlayerManagement />} />
            <Route path="/overlays" exact component={() => <OverlayMenu/>} />
            <Route path="/overlays/leaguetable" exact component={() => <LeagueTable/>} />
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App;