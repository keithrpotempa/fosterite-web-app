import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { fosterManager, formHandler } from "../../modules"
import { FosterList } from "../../components"

const Fosters = props => {
  const [fosterList, setFosterList] = useState([]);
  const [filteredFosterList, setFilteredFosterList] = useState([]);
  const [filter, setFilter] = useState({})

  const getFosterList = () => {
    fosterManager.getFosterList()
      // Make sure the user is listed as a foster
      .then(resp => resp.filter( foster => foster.foster))
      .then(setFosterList)
  }

  const handleFieldChange = (evt) => formHandler.handleFieldChange(evt, filter, setFilter);

  useEffect( () => {
    getFosterList()
    if (Object.keys(filter).length !== 0) {
      formHandler.filterList(fosterList, filter, setFilteredFosterList)
    }
  }, [filter])

  return (
    <>
      <Typography component="h1" variant="h3">
        Foster List
      </Typography>

      <InputLabel id="looking_to_foster">Looking to Foster</InputLabel>
      <Select
        native={false}
        name="looking_to_foster"
        fullWidth
        labelId="looking_to_foster"
        id="looking_to_foster"
        onChange={handleFieldChange}
      >
        <MenuItem value="">Select</MenuItem>
        <MenuItem key="Yes" value={true}>Yes</MenuItem>
        <MenuItem key="No" value={false}>No</MenuItem>
      </Select>

      <FosterList
        fosterList={
          // If there's no filter, 
          // just use the regular list
          Object.keys(filter).length !== 0
          ? filteredFosterList
          : fosterList
        }
        {...props}
      />
    </>
  )
}

export default Fosters