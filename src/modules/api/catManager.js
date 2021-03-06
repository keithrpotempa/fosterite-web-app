import baseurl from "./baseurl"

export default {
  getCatList() {
    return fetch(`${baseurl}/cats`)
      .then((resp) => resp.json())
  },
  getCat(id) {
    return fetch(`${baseurl}/cats/${id}`)
      .then((resp) => resp.json())
  },
  // TODO: Add authentication
  delete(id) {
    return fetch(`${baseurl}/cats/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        // "Authorization": `Token ${token}`
      }
    })
  },
  getAdoptionStatusList() {
    return fetch(`${baseurl}/adoptionstatus`)
      .then((resp) => resp.json())
  },
  post(token, obj){
    // Note: Content-type cannot be set when uploading a file
    
    const headers = {
      Authorization: `Token ${token}`,
    }

    // If there is no image, 
    // then content-type and accept are needed in the fetch call
    if (obj.image_path === null) { 
      headers["Accept"] = "application/json";
      headers["Content-Type"] = "application/json";
    } 

    return fetch(`${baseurl}/cats`, {
      method: "POST",
      headers: headers,
      body: obj
    }).then((resp) => resp.json())
  },
  put(token, obj, id){
    // Note: Content-type cannot be set when uploading a file

    const headers = {
      Authorization: `Token ${token}`,
    }

    // If there is no image, 
    // then content-type and accept are needed in the fetch call
    if (obj.image_path === null) { 
      headers["Accept"] = "application/json";
      headers["Content-Type"] = "application/json";
    } 

    return fetch(`${baseurl}/cats/${id}`, {
      method: "PUT",
      headers: headers,
      body: obj
    })
  }
}