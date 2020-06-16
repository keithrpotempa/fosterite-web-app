import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // useHistory,
} from "react-router-dom";
import { Cats, CatDetails, CatCreate, CatEdit } from "./cats"
import { Register, Login } from "./users" 
import { NavBar } from "../components"
import { Container } from '@material-ui/core';

const Routes = props => {
  const isAuthenticated = () => sessionStorage.getItem("token") !== null;
  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUserToken = (resp) => {
    sessionStorage.setItem("token", resp.token);
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  return (
    <Router>
      <NavBar 
        hasUser={hasUser}
        clearUser={clearUser}
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

          {/* Cat Edit Form */}
          <Route
            exact
            path="/cats/edit/:catId(\d+)"
            render={(props) => (
              <CatEdit
                catId={parseInt(props.match.params.catId)}
                {...props}
              />
            )}
          />

          {/* User Registration Form */}
          <Route
            exact
            path="/register"
            render={(props) => (
              <Register
                setUserToken={setUserToken}
                {...props}
              />
            )}
          />
          {/* User Login Form */}
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                setUserToken={setUserToken}
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