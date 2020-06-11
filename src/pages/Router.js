import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // useHistory,
} from "react-router-dom";
import { Cats } from "./cats" 
import { NavBar } from "../components"

const Routes = props => {
  return (
    <Router>
      <NavBar 
      />
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