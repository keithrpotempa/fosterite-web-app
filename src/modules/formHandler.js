
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
  },
  filterList(list, filter, setFilteredListFunction) {
    let filteredList = list
    for (const key in filter) {
      filteredList = filteredList
        // Tricky way to deal with searching for 
        // varying depths on this key/value pair:
        // https://stackoverflow.com/a/31871016/798303
        .filter(item => {
          return JSON.stringify(item)
            .indexOf(`"${key}":${filter[key]}`) !== -1
        }) 
    }
    setFilteredListFunction(filteredList)
  }
}