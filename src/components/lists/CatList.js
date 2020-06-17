import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { CatCard } from "../cards"

const CatList = props => {
  const catList = props.catList

  useEffect(() => {}, [catList])

  return (
    <>
      <Box display="flex" mx="auto" flexWrap="wrap">
        {/* TODO: This message displays before the foster list is loaded... */}
        {catList.length === 0 
        ? <Typography component="p">
            No cats found. Try adjusting your filters.
          </Typography>
        : catList.map( cat => (
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
export default CatList