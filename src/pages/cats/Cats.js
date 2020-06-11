import React, { useState, useEffect } from "react";
import { catManager } from "../../modules" 
import { CatCard } from "../../components"
import Box from '@material-ui/core/Box';
// import { flexbox } from '@material-ui/system';
// import { spacing } from '@material-ui/system';

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
      <h1>Cats Page</h1>
      <Box display="flex" mx="auto" p={1} flexWrap="wrap">
        {catList.map( cat => (
          <CatCard
            key={cat.id}
            cat={cat}
          />
        ))}
      </Box>
    </>
  )
}

export default Cats