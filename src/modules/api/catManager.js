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
  }
}