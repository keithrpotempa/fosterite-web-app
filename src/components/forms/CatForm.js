import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const CatForm = props => {
  const [adoptionStatusList, setAdoptionStatusList] = useState();

  let isEdit = false
  if (Object.keys(props.formData).length !== 0) {
    isEdit = true
  }
  const classes = props.classes;
  const handleFieldChange = props.handleFieldChange;
  const handleSubmit = props.handleSubmit;

  // const getAdoptionStatusList = () => {

  // }

  useEffect( () => {
    // setUserToEdit()
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            {/* TODO: Stretch Goal: Breed */}
            {/* TODO: Adoption Status */}
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