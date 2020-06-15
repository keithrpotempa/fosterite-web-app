import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';

const UserForm = props => {
  let isEdit = false
  if (Object.keys(props.formData).length !== 0) {
    isEdit = true
  }
  const classes = props.classes;
  const handleFieldChange = props.handleFieldChange;
  const handleSubmit = props.handleSubmit;

  return (
    <>
      <form 
        className={classes.form} 
        onSubmit={handleSubmit}
        autocomplete="on"
      >
        <Grid container spacing={2}>
          {/* For now, this is the most common error we will be facing */}
          {props.failedLogin 
            ? <p>{props.failedLoginMessage}</p>
            : <></> 
          }
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              onChange={handleFieldChange}
              value={isEdit ? props.formData.firstName : null}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              onChange={handleFieldChange}
              value={isEdit ? props.formData.lastName : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={handleFieldChange}
              value={isEdit ? props.formData.username : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleFieldChange}
              value={isEdit ? props.formData.email : null}
            />
          </Grid>
          {isEdit 
            ? <></> 
            : <>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleFieldChange}
                  />
                </Grid>
              </>
          }
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="street"
              label="Street Address"
              id="street"
              onChange={handleFieldChange}
              value={isEdit ? props.formData.street : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="city"
              label="City"
              id="city"
              onChange={handleFieldChange}
              value={isEdit ? props.formData.city : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="state"
              label="State"
              id="state"
              onChange={handleFieldChange}
              value={isEdit ? props.formData.state : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="zip"
              label="Zip Code"
              id="zip"
              onChange={handleFieldChange}
              value={isEdit ? props.formData.zip : null}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
              {/* <FormControl> */}
                <InputLabel id="looking_to_foster">Looking to Foster</InputLabel>
                  <Select
                    inputProps={{
                      required: true,
                    }}
                    native={false}
                    required
                    name="looking_to_foster"
                    fullWidth
                    labelId="looking_to_foster"
                    id="looking_to_foster"
                    onChange={handleFieldChange}
                    // FIXME: If user editing gets implemented
                    // value={isEdit ? `${props.formData.looking_to_foster}` : ""}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem key="Yes" value={true}>Yes</MenuItem>
                    <MenuItem key="No" value={false}>No</MenuItem>
                  </Select>
              {/* </FormControl> */}
            </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              id="phoneNumber"
              autoComplete="phoneNumber"
              onChange={handleFieldChange}
              value={isEdit ? props.formData.phoneNumber : null}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
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
    </>
  ) 
}

export default UserForm