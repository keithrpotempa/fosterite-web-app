import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { catManager, momentManager, fosterManager } from "../../modules";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { ProfileCard } from "../../components"

export default function CatDetails (props) {
  const [cat, setCat] = useState({})
  const [user, setUser] = useState({})

  const getCat = () => {
    catManager.getCat(props.catId)
      .then(resp => {
        setCat(resp)
        getUser(resp.creator_id)
      })
  }

  const getUser = (id) => {
    fosterManager.getFoster(id)
      .then(setUser)
  }

  const handleDelete = () => {
    catManager.delete(props.catId)
      .then(props.history.push('/cats'))
  }

  useEffect(() => {
    getCat()
  }, [])

  return (
    <>
    {/* TODO: Break this up. It's getting too big... */}
      {/* Image: cat.image_path */}
      <Grid display="flex" container spacing={3} m={3}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3" spacing={2} gutterBottom>
            {cat.name}
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Divider variant="middle"/>
        </Grid>

        <Grid item xs={5}>

            <ProfileCard 
              key={"Birth Date"}
              label={"Birth Date"}
              value={
                cat.birth_date
                  ? cat.birth_date
                  : "Unknown"
              }
            />

            <ProfileCard
              key={"Age"}
              label={"Age"}
              value={momentManager.getAge(cat.birth_date)}
            />

            <ProfileCard
              key={"Sex"}
              label={"Sex"}
              value={cat.sex}
            />

        </Grid>

        <Divider orientation="vertical" flexItem/>

        {/* TODO: 
        <Grid item xs={4}>
          Litter: {cat.litter_id}
        </Grid> 
        */}
        <Grid item xs={5}>

            <ProfileCard 
              key={"bondedPair"}
              label={"Bonded Pair"}
              value={
                cat.bonded_pair_cat_id 
                ? cat.bonded_pair_cat_id
                : "No"  
              }
            />

            <ProfileCard
              key={"fixedDate"}
              label={"Fixed Date"}
              value={
                cat.fixed_date
                  ? cat.fixed_date
                  : "None"
              }
            />

          {/* TODO: Update this when bonded pair implemented*/}

        </Grid>

        <Grid item xs={12}>
          <Divider variant="middle"/>
        </Grid>

        <Grid item xs={5}>

          <ProfileCard 
            key={"adoptionStatus"}
            label={"Adoption Status"}
            value={cat.adoption_status ? cat.adoption_status.name : ""}
          />

          {/* NOTE: 4 is the id of "adopted" */}
          {/* TODO: make that not so awkwardly hard-coded */}
          {cat.adoption_status_id === 4
            ? <>
                <ProfileCard 
                  key={"adoptedDate"}
                  label={"Adopted Date"}
                  value={
                    cat.adopted_date
                    ? cat.adopted_date
                    : "None"
                  }
                />

                {/* TODO: Make name, not just adopted_id */}
                {/* <ProfileCard
                  key={"adoptedBy"}
                  label={"Adopted By"}
                  value={cat.adopted_id}
                /> */}
              </>
            : null
          }

        </Grid>

        {/* TODO: STRETCH GOAL */}
        {/* <Grid item xs>
          Breed: {cat.breed}
        </Grid> */}

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
            {momentManager.getMomentFromNow(cat.created_date)}
          </Typography>
        </Grid>
        
        <Grid 
          container 
          xs={12} 
          direction="row-reverse"
        >
          <Typography color="textSecondary" variant="body2">
            {`Created by `}  
            <Link 
              component={RouterLink} 
              to={`/fosters/${user.id}`}
            >
              {user ? user.username : ""}
            </Link>
          </Typography>
        </Grid>

        <Grid 
          container 
          xs={12} 
          direction="row-reverse"
        >
          <Typography color="textSecondary" variant="body2">
              Modified: {momentManager.getMomentFromNow(cat.modified_date)}
          </Typography>
        </Grid>

      </Grid>

      {/* ------------ ACTIONS ------------  */}
      {/* TODO: Change to only show if user 
      has proper permissions or created this cat */}
      {props.hasUser 
        && parseInt(sessionStorage.getItem("user_id")) === parseInt(cat.creator_id) 
          ? <>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => props.history.push(`/cats/edit/${props.catId}`)}
              >
                Edit
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleDelete}
              >
                Delete
              </Button>
            </>
          : <></>
      }
    </>
  )
}