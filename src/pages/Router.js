import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // useHistory,
} from "react-router-dom";
import { Cats, CatDetails, CatCreate } from "./cats" 
import { NavBar } from "../components"
import { Container } from '@material-ui/core';

const Routes = props => {
  return (
    <Router>
      <NavBar 
      />

      <Container maxWidth="md">

        <Switch>

          {/* Cat List */}
          <Route
            exact
            path="/cats"
            render={(props) => 
              <Cats {...props} />
            }
          />

          {/* Cat Details */}
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

          {/* Cat Creation Form */}
          <Route
            exact
            path="/cats/new"
            render={(props) =>
              <CatCreate {...props}/>
            }
          />

        </Switch>

      </Container>

    </Router>
  )
}

export default Routes