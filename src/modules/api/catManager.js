import baseurl from "./baseurl"

export default {
  getCatList() {
    return fetch(`${baseurl}/cats`)
      .then((resp) => resp.json())
  }
}