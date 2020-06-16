import React, { useState, useEffect } from "react";
import { catManager } from "../../modules" 
import { CatCard } from "../../components"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const Cats = props => {
  const [catList, setCatList] = useState([]);

  const getCatList = () => {
    catManager.getCatList()
      .then(setCatList)
  }

  useEffect(() => {
    getCatList()
  }, [])

  return (
    <>
      <Typography component="h1" variant="h3">
        Cat List
      </Typography>

      {props.hasUser
        ? <Button 
            variant="contained" 
            color="primary" 
            onClick={() => props.history.push(`/cats/new`)}
          >
            New Cat
          </Button>
        : <></>
      }
      
      <Box display="flex" mx="auto" p={1} flexWrap="wrap">
        {catList.map( cat => (
          <CatCard
            key={cat.id}
            cat={cat}
            {...props}
          />
        ))}
      </Box>
    </>
  )
}

export default Cats