import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import { FosterCard } from "../cards"

const FosterList = props => {
  const fosterList = props.fosterList

  useEffect(() => {}, [fosterList])

  return (
    <>
      <Box display="flex" mx="auto" flexWrap="wrap">
        {fosterList
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