import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { catManager } from "../../modules";

const CatForm = props => {
  const [adoptionStatusList, setAdoptionStatusList] = useState([]);

  let isEdit = false
  if (Object.keys(props.formData).length !== 0) {
    isEdit = true
  }
  const classes = props.classes;
  const handleFieldChange = props.handleFieldChange;
  const handleSubmit = props.handleSubmit;

  const getAdoptionStatusList = () => {
    catManager.getAdoptionStatusList()
      .then(setAdoptionStatusList)
  }

  useEffect( () => {
    getAdoptionStatusList()
  }, [])

  return (
    <>
      <div>
        <form 
          className={classes.form} 
          onSubmit={handleSubmit}
          autoComplete="on"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={handleFieldChange}
                value={isEdit ? props.formData.name : null}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            {/* CREATOR ID */}
            {/* <SELECT/> */}
            {/* TODO: SELECT SEX */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="birth_date"
                name="birth_date"
                label="Birthday"
                type="date"
                className={classes.textField}
                onChange={handleFieldChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            {/* TODO: Stretch Goal: Breed */}
            <InputLabel id="adoption_status">Adoption Status</InputLabel>
              <Select
                inputProps={{
                  required: true,
                }}
                required
                name="adoption_status"
                fullWidth
                labelId="adoptionStatus"
                id="adoption_status"
                onChange={handleFieldChange}
              >
                <MenuItem value="">Select</MenuItem>
                {adoptionStatusList.map((status, i) => (
                  <MenuItem key={i} value={status.id}>
                    {status.name}
                  </MenuItem>
                ))}
              </Select>


            {/* TODO: If Adopted, 
                Adopted Date,
                Adopted Id 
            */}
            {/* TODO: Optional: Bonded Pair Cat */}
            {/* TODO: Optional: Litter */}
            <Grid item xs={12} sm={6}>
              <TextField
                id="fixed_date"
                label="fixed_date"
                type="date"
                className={classes.textField}
                onChange={handleFieldChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            {/* TODO: Optional: Image Upload */}

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  ) 
}

export default CatForm