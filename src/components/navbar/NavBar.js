import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const hasUser = props.hasUser;
  const clearUser = props.clearUser;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Box display="flex" flexGrow={1} justifyContent="flex-start">
            <Typography variant="h6" className={classes.title}>
              <Link component={RouterLink} to="/cats" color="inherit">
                Cats
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link component={RouterLink} to="/" color="inherit">
                Fosters
              </Link>
            </Typography>
          </Box>

          <Box display="flex" justifyContent="flex-end">
            {hasUser 
              ? <>
                  <Box p={2}>
                    <Typography variant="h6" className={classes.title}>
                      <Link 
                        color="inherit"
                        onClick={() => clearUser()} 
                      >
                        Logout
                      </Link>
                    </Typography>
                  </Box>
                </>
              : <>
                  <Box p={2}>
                    <Typography variant="h6" className={classes.title}>
                      <Link component={RouterLink} to="/login" color="inherit">
                        Login
                      </Link>
                    </Typography>
                  </Box>
                  <Box p={2}>
                    <Typography variant="h6" className={classes.title}>
                      <Link component={RouterLink} to="/register" color="inherit">
                        Register
                      </Link>
                    </Typography>
                  </Box>
              </>
            }
          </Box>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}