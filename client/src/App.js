import React from "react";
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar, TeamManagement, PlayerManagement, OverlayMenu, HUD, LeagueTable, WebcamVeto, WebcamLowerThird, ControlPanel, Login, CurrentMatchup } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/db/teams" exact component={() => <><Navbar /><TeamManagement /></>} />
            <Route path="/db/players" exact component={() => <><Navbar /><PlayerManagement /></>} />
            <Route path="/controlpanel" exact component={() => <><Navbar /><ControlPanel /></>} />
            <Route path="/overlays" exact component={() => <><Navbar /><OverlayMenu/></>} />
            <Route path="/overlays/hud" exact component={() => <HUD/>} />
            <Route path="/overlays/leaguetable" exact component={() => <LeagueTable/>} />
            <Route path="/overlays/currentmatchup" exact component={() => <CurrentMatchup/>} />
            <Route path="/overlays/webcamveto" exact component={() => <WebcamVeto/>} />
            <Route path="/overlays/webcamlowerthird" exact component={() => <WebcamLowerThird/>} />
            <Route path="/login" exact component={() => <Login />} />
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App;