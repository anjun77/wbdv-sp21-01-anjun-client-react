// const TOPICS_URL = "https://localhost:8080/api/topics";
// const WIDGETS_URL = "https://localhost:8080/api/widgets";
const WIDGET_URL = "http://wbdv-server-java.herokuapp.com/api"

export const createWidget = (tid, widget) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
      method: "POST",
      body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`)
    .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
      method: "DELETE"
    })
    .then(response => response.json())

const api = {
  findWidgetsForTopic,
  createWidget,
  deleteWidget,
  updateWidget
};

export default api;