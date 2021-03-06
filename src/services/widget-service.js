//const BASE_URL = "https://localhost:8080/api"
const BASE_URL = "https://wbdv-anjun-shao.herokuapp.com/api"

export const createWidget=(topicId, widget) =>
    fetch(`${BASE_URL}/topics/${topicId}/widgets`, {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${BASE_URL}/widgets/${wid}`, {
      method: "DELETE",
    }).then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${BASE_URL}/widgets/${wid}`, {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {response.json()})


export const findWidgetsForTopic = (tid) =>
    fetch(`${BASE_URL}/topics/${tid}/widgets`).then(res => res.json())

const api = {
  createWidget,
  updateWidget,
  deleteWidget,
  findWidgetsForTopic
}

export default api
