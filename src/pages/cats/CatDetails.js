import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { catManager, momentManager, userManager } from "../../modules";
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

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
    userManager.getUser(id)
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
        <Grid item xs={4}>
          Birth Date: {cat.birth_date}
        </Grid>
        <Grid item xs={4}>
          Age: {momentManager.getAge(cat.birth_date)}
        </Grid>
        <Grid item xs={4}>
          Sex: {cat.sex}
        </Grid>
        <Grid item xs={4}>
          {/* TODO: */}
          Litter: {cat.litter_id}
        </Grid>
        <Grid item xs={4}>
          {/* TODO: */}
          Bonded Pair: 
          {cat.bonded_pair_cat_id 
            ? cat.bonded_pair_cat_id
            : "No"
          }
        </Grid>
        <Grid item xs>
          {/* TODO: */}
          Fixed Date: 
            {cat.fixed_date
              ? cat.fixed_date
              : "None"
            }
        </Grid>
        <Grid item xs={4}>
          Adoption Status: {cat.adoption_status ? cat.adoption_status.name : ""}
        </Grid>
        {/* NOTE: 4 is the id of "adopted" */}
        {/* TODO: make that not so awkwardly hard-coded */}
        {cat.adoption_status_id === 4
          ? <>
              <Grid item xs={4}>
                Adopted Date: 
                {cat.adopted_date
                  ? cat.adopted_date
                  : "None"
                }
              </Grid>
              <Grid item xs={4}>
                Adopted By: {cat.adopted_id}
              </Grid>
            </>
          : null
        }
        {/* TODO: STRETCH GOAL */}
        {/* <Grid item xs>
          Breed: {cat.breed}
        </Grid> */}

        {/* ------------ META INFO ------------ */}
        <Grid item xs={6}>
          Profile Creator: 
          <Link 
            component={RouterLink} 
            to={`/fosters/${user.id}`}
          >
            {`${user.username}`}
          </Link>
        </Grid>
        <Grid item xs={6}>
          Profile Creation: {momentManager.getMomentFromNow(cat.created_date)}
        </Grid>
        <Grid item xs={6}>
          Last Modified: {momentManager.getMomentFromNow(cat.modified_date)}
        </Grid>

      </Grid>

      {/* ------------ ACTIONS ------------  */}
      {/* TODO: Change to only show if user 
      has proper permissions or created this cat */}
      {props.hasUser 
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