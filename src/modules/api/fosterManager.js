import baseurl from "./baseurl"

export default {
  getFosterList() {
    return fetch(`${baseurl}/fosters`)
      .then((resp) => resp.json())
  },
}