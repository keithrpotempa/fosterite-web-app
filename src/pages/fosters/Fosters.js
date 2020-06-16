import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { fosterManager } from "../../modules"
import { FosterCard } from "../../components"

const Fosters = props => {
  const [fosterList, setFosterList] = useState([]);

  const getFosterList = () => {
    fosterManager.getFosterList()
      .then(setFosterList)
  }

  useEffect(() => {
    getFosterList()
  }, [])

  return (
    <>
      <Typography component="h1" variant="h3">
        Foster List
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
        {fosterList
          // Make sure the user is listed as a foster
          .filter( foster => foster.foster)
          .map( foster => (
          <FosterCard
            key={foster.id}
            foster={foster}
            {...props}
          />
        ))}
      </Box>
    </>
  )
}

export default Fosters