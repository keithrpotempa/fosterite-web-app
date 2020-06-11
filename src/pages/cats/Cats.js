import React, { useState, useEffect } from "react";
import { catManager } from "../../modules" 
import { CatCard } from "../../components"

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
      {catList.map( cat => (
        <CatCard
          key={cat.id}
          cat={cat}
        />
      ))}
    </>
  )
}

export default Cats