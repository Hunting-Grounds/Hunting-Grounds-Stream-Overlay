import React from "react";
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar, DesignDashboard, Dashboard, Overlay } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Navbar />
          <Switch>
            <Route path="/" exact component={() => <DesignDashboard />} />
            <Route path="/dashboard" exact component={() => <Dashboard/>} />
            <Route path="/overlay" exact component={() => <Overlay/>} />
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App;