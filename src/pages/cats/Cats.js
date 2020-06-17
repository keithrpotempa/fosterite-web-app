import React, { useState, useEffect } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { catManager, formHandler } from "../../modules" 
import { CatCard, CatList } from "../../components"

const Cats = props => {
  const [catList, setCatList] = useState([]);
  const [filteredCatList, setFilteredCatList] = useState([]);
  const [filter, setFilter] = useState({})
  const [adoptionStatusList, setAdoptionStatusList] = useState([]);

  const getCatList = () => {
    catManager.getCatList()
      .then(setCatList)
  }

  const getAdoptionStatusList = () => {
    catManager.getAdoptionStatusList()
      .then(setAdoptionStatusList)
  }

  const handleFieldChange = (evt) => formHandler.handleFieldChange(evt, filter, setFilter);

  useEffect(() => {
    getCatList()
    getAdoptionStatusList()
    if (Object.keys(filter).length !== 0) {
      formHandler.filterList(catList, filter, setFilteredCatList)
    }
  }, [filter])

  return (
    <>
      <Typography component="h1" variant="h3">
        Cat List
      </Typography>

      <InputLabel id="adoption_status_id">Adoption Status</InputLabel>
      <Select
        native={false}
        name="adoption_status_id"
        fullWidth
        labelId="adoption_status_id"
        id="adoption_status_id"
        onChange={handleFieldChange}
      >
        <MenuItem value="">Select</MenuItem>
        {adoptionStatusList.map(status => 
          <MenuItem key={status.id} value={status.id}>
            {status.name}
          </MenuItem>
        )}
      </Select>

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
      
      <CatList 
        catList={
          Object.keys(filter).length !== 0
            ? filteredCatList
            : catList
        }
        {...props}
      />
    </>
  )
}

export default Cats