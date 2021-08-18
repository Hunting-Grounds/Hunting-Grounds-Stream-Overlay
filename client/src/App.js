import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Dashboard, Overlay } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/dashboard" exact component={() => <Dashboard/>} />
          <Route path="/overlay" exact component={() => <Overlay/>} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;