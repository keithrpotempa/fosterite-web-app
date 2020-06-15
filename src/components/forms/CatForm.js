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

  const classes = props.classes;
  const handleFieldChange = props.handleFieldChange;
  const handleSubmit = props.handleSubmit;
  const formState = props.formState;

  let isEdit = false
  if (Object.keys(props.formState).length !== 0) {
    isEdit = true
  }

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
                value={isEdit ? props.formState.name : null}
              />
            </Grid>

            {/* TODO: CREATOR ID, once auth is built */}

            <Grid item xs={12} sm={6}>
              <InputLabel id="sex">Sex</InputLabel>
                <Select
                  inputProps={{
                    required: true,
                  }}
                  required
                  name="sex"
                  fullWidth
                  labelId="sex"
                  id="sex"
                  onChange={handleFieldChange}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem key="Male" value="Male">Male</MenuItem>
                  <MenuItem key="Female" value="Female">Female</MenuItem>
                </Select>
            </Grid>
            
            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={4}>  
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
            </Grid>
            
            {/* Adopted Status 4 is "Adopted", so then we ask for the date and the adopter */}
            {formState.adoption_status === 4
              ? <>
                  {/* TODO: If Adopted, Adopted Id */}
                  <Grid item xs={12} sm={4}>
                    <TextField
                      id="adopted_date"
                      label="adopted_date"
                      type="date"
                      className={classes.textField}
                      onChange={handleFieldChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </>
              : <>
                </>
            }

            {/* TODO: Optional: Bonded Pair Cat */}
            {/* TODO: Optional: Litter */}
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