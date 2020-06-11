import baseurl from "./baseurl"

export default {
  getCatList() {
    return fetch(`${baseurl}/cats`)
      .then((resp) => resp.json())
  },
  getCat(id) {
    return fetch(`${baseurl}/cats/${id}`)
      .then((resp) => resp.json())
  }
}