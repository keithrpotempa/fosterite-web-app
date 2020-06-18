import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { fosterManager, momentManager } from "../../modules";
import { ProfileCard } from "../../components"

export default function FosterDetails (props) {
  const [user, setUser] = useState({})

  const getFoster = () => {
    fosterManager.getFoster(props.fosterId)
      .then(setUser)
  }

  useEffect(() => {
    getFoster()
  }, [user])

  return (
    <>
      {/* Keeps from rendering until it's loaded */}
      {Object.keys(user).length === 0
        ? <></> 
        : <>
            {/* FIXME: Long load causing "undefined" to appear */}
            <Grid display="flex" container spacing={3} m={3}>

              <Grid item xs={12}>
                <Typography variant="h3" component="h3" spacing={2} gutterBottom>
                  {`${user.first_name} ${user.last_name}`}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Divider variant="middle"/>
              </Grid>

              <Grid item xs={5}>
                <ProfileCard 
                  key={"username"}
                  label={"Username"}
                  value={user.username}
                />

                <ProfileCard 
                  key={"email"}
                  label={"Email"}
                  value={user.email}
                />

                <ProfileCard
                  key={"city"}
                  label={"City"}
                  value={user.foster.city}
                />

              </Grid>

              <Divider orientation="vertical" flexItem/>

              <Grid item xs={5}>
                <ProfileCard 
                  key={"lookingToFoster"}
                  label={"Looking to Foster"}
                  value={
                    user.foster.looking_to_foster
                      ? "Yes"
                      : "No"
                  }
                />

                <ProfileCard
                  key={"phone"}
                  label={"Phone Number"}
                  value={user.foster.phone}
                />

              </Grid>

              <Grid item xs={12}>
                <Divider variant="middle"/>
              </Grid>

              {/* ------------ META INFO ------------ */}
              <Grid 
                container 
                xs={12} 
                direction="row-reverse"
              >
                <Typography color="textSecondary" variant="body2">  
                  {`Created `}  
                  {momentManager.getMomentFromNow(user.foster.created_date)}
                </Typography>
              </Grid>

              <Grid 
                container 
                xs={12} 
                direction="row-reverse"
              >
                <Typography color="textSecondary" variant="body2">
                    Modified: {momentManager.getMomentFromNow(user.foster.modified_date)}
                </Typography>
              </Grid>

            </Grid>
          </>
      }
    </>
  )
}