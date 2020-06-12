import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import { CatForm } from "../../components"
import { catManager } from "../../modules";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CatCreate = props => {
  const [formData, setFormData] = useState({})

  const handleFieldChange = evt => {
    const stateToChange = { ...formData };
    stateToChange[evt.target.id] = evt.target.value;
    setFormData(stateToChange);
  };

  const gatherFormData = () => {
    const formdata = new FormData(formData);
    return formdata
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    // const token = window.sessionStorage.getItem("token");

    const formdata = gatherFormData()
    // const token = sessionStorage.getItem("token")
    catManager.post(formdata)
      .then((resp) => {
        props.history.push({
          pathname: `/cats/${resp.id}`
        })
      })
  };

  return (
    <>
      <h1>Cat Registration Form</h1>
      <CatForm 
        classes={useStyles()}
        handleFieldChange={handleFieldChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </>
  )
}

export default CatCreate