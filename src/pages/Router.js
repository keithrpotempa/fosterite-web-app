import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // useHistory,
} from "react-router-dom";
import { Cats } from "./cats" 

const Routes = props => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/cats"
          render={(props) => 
            <Cats {...props} />
          }
        />
      </Switch>
    </Router>
  )
}

export default Routes