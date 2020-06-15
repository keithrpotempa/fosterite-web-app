
export default {
  gatherFormData(formState) {
    const formdata = new FormData();
    for(const key in formState) {
      formdata.append(key, formState[key])
    };
    return formdata
  },
  handleFieldChange(evt, formState, setFunction) {
    const stateToChange = { ...formState };
    if (evt.target.id) {
      stateToChange[evt.target.id] = evt.target.value;
    // Some Material UI components (select) have names, not ids:
    } else if (evt.target.name) {
      stateToChange[evt.target.name] = evt.target.value;
    }
    setFunction(stateToChange);
  }
}