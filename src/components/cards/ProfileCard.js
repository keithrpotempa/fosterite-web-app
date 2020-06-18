import React from "react";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const ProfileCard = (props) => {
  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs={6}>
            <Typography spacing={2}>
              {props.label}: 
            </Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>
              {props.value}
            </Typography>
          </Grid>
      </Grid>            
    </>  
  )
}

export default ProfileCard