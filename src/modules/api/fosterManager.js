import baseurl from "./baseurl"

export default {
  getFosterList() {
    return fetch(`${baseurl}/fosters`)
      .then((resp) => resp.json())
  },
  getFoster(id) {
    return fetch(`${baseurl}/fosters/${id}`)
      .then((resp) => resp.json())
  },
}