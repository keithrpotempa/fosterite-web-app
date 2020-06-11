import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // useHistory,
} from "react-router-dom";
import { Cats, CatDetails } from "./cats" 
import { NavBar } from "../components"
import { Container } from '@material-ui/core';

const Routes = props => {
  return (
    <Router>
      <NavBar 
      />

      <Container maxWidth="md">

        {/* Cat List */}
        <Switch>
          <Route
            exact
            path="/cats"
            render={(props) => 
              <Cats {...props} />
            }
          />
        </Switch>

        {/* Cat Details */}
        <Switch>
          <Route
            exact
            path="/cats/:catId(\d+)"
            render={(props) => (
              <CatDetails
                catId={parseInt(props.match.params.catId)}
                {...props}
              />
            )}
          />
        </Switch>

      </Container>

    </Router>
  )
}

export default Routes