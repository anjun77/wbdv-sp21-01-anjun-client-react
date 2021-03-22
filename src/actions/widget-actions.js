import widgetService from "../services/widget-service";

export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"

export const createWidget = (dispatch, tid) => {
  const defaultWidget = {type: "HEADING", size: 1, text: "New Widget"}
  widgetService.createWidget(tid, defaultWidget)
  .then(actualWidget => dispatch({
    type: CREATE_WIDGET,
    widget: actualWidget
  }))
}

export const deleteWidget = (dispatch, widgetToDelete) =>
    widgetService.deleteWidget(widgetToDelete.id)
    .then(status => dispatch({
      type: DELETE_WIDGET,
      widgetToDelete: widgetToDelete
    }))

export const updateWidget = (dispatch, wid, widget) =>
    widgetService.updateWidget(wid, widget)
    .then(status => dispatch({
      type: UPDATE_WIDGET,
      updatedWidget: widget
    }))

export const findWidgetsForTopic = (dispatch, tid) => {
  // alert(courseId);
  widgetService.findWidgetsForTopic(tid)
  .then(widgets => dispatch({
    type: FIND_WIDGETS_FOR_TOPIC,
    widgets: widgets
  }))
}

const widgetActions = {
  createWidget, findWidgetsForTopic, updateWidget, deleteWidget
}

export default widgetActions;