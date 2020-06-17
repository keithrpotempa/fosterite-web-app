import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { FosterCard } from "../cards"

const FosterList = props => {
  const fosterList = props.fosterList

  useEffect(() => {}, [fosterList])

  return (
    <>
      <Box display="flex" mx="auto" flexWrap="wrap">
        {/* TODO: This message displays before the foster list is loaded... */}
        {fosterList.length === 0 
        ? <Typography component="p">
            No fosters found. Try adjusting your filters.
          </Typography>
        : fosterList
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
export default FosterList