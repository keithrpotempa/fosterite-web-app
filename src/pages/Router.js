import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  // useHistory,
} from "react-router-dom";
import { Cats, CatDetails, CatCreate, CatEdit } from "./cats";
import { Fosters, FosterDetails } from "./fosters";
import { Register, Login } from "./users" ;
import { NavBar } from "../components";
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
              <Cats
                hasUser={hasUser}
                {...props} 
              />
            }
          />

          {/* Cat Details */}
          <Route
            exact
            path="/cats/:catId(\d+)"
            render={(props) => (
              <CatDetails
                catId={parseInt(props.match.params.catId)}
                hasUser={hasUser}
                {...props}
              />
            )}
          />

          {/* Cat Creation Form */}
          <Route
            exact
            path="/cats/new"
            render={(props) =>
              hasUser 
              ? (<CatCreate {...props}/>)
              : (<Redirect to="/" />)
            }
          />

          {/* Cat Edit Form */}
          <Route
            exact
            path="/cats/edit/:catId(\d+)"
            render={(props) => 
              hasUser
              ? (
                  <CatEdit
                    catId={parseInt(props.match.params.catId)}
                    {...props}
                  />
                )
              : (<Redirect to="/" />)
            }
          />

          {/* Foster List */}
          <Route
            exact
            path="/fosters"
            render={(props) => 
              <Fosters
                hasUser={hasUser}
                {...props} 
              />
            }
          />

          {/* Foster Details */}
          <Route
            exact
            path="/fosters/:fosterId(\d+)"
            render={(props) => (
              <FosterDetails
                fosterId={parseInt(props.match.params.fosterId)}
                hasUser={hasUser}
                {...props}
              />
            )}
          />

          {/* User Registration Form */}
          <Route
            exact
            path="/register"
            render={(props) => 
              hasUser
              ? (<Redirect to="/" />) 
              : (
                  <Register
                    setUserToken={setUserToken}
                    {...props}
                  />
                )
            }
          />
          {/* User Login Form */}
          <Route
            exact
            path="/login"
            render={(props) => 
              hasUser
              ? (<Redirect to="/" />) 
              : (
                  <Login
                    setUserToken={setUserToken}
                    {...props}
                  />
                )
            }
          />

        </Switch>

      </Container>

    </Router>
  )
}

export default Routes