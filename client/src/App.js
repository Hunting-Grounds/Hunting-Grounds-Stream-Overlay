import React from "react";
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar, TeamManagement, PlayerManagement, Overlay } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Navbar />
          <Switch>
            <Route path="/db/team" exact component={() => <TeamManagement />} />
            <Route path="/db/player" exact component={() => <PlayerManagement />} />
            <Route path="/overlay" exact component={() => <Overlay/>} />
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App;