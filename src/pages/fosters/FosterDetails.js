import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { fosterManager, momentManager } from "../../modules";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FosterDetails (props) {
  const [foster, setFoster] = useState({})

  const getFoster = () => {
    fosterManager.getFoster(props.fosterId)
      .then(setFoster)
  }

  useEffect(() => {
    getFoster()
  }, [foster])

  return (
    <>
      {/* Keeps from rendering until it's loaded */}
      {Object.keys(foster).length === 0
        ? <></> 
        : <>
            {/* FIXME: Long load causing "undefined" to appear */}
            <Grid display="flex" container spacing={3} m={3}>
              <Grid item xs={12}>
                <Typography variant="h3" component="h3" spacing={2} gutterBottom>
                  {`${foster.first_name} ${foster.last_name}`}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                Username: {foster.username}
              </Grid>
              <Grid item xs={4}>
                Email: {foster.email}
              </Grid>
              <Grid item xs={4}>
                City: 
                  {foster.foster.city}
              </Grid>
              <Grid item xs={4}>
                Looking to Foster: 
                  {foster.foster.looking_to_foster
                    ? "Yes"
                    : "No"
                  }
              </Grid>
              <Grid item xs={4}>
                Phone: 
                  {foster.foster.phone}
              </Grid>
              <Grid item xs={4}>
                Created: 
                  {momentManager.getMomentFromNow(foster.foster.created_date)}
              </Grid>
              <Grid item xs={4}>
                Last Modified: 
                  {momentManager.getMomentFromNow(foster.foster.modified_date)}
              </Grid>
            </Grid>
          </>
      }
    </>
  )
}