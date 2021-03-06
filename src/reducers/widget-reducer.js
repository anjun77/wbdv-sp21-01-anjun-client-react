const initialState = {
  widgets: []
}

const widgetReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_WIDGET":
      return {
        ...state,
        widgets: [
          ...state.widgets,
          action.widget
        ]
      }

    case "DELETE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.filter(widget => {
          if(widget.id === action.widgetToDelete.id) {
            return false
          } else {
            return true
          }
        })
      }

    case "UPDATE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.map(widget => {
          if(widget.id === action.updateWidget.id) {
            return action.updateWidget
          } else {
            return widget
          }
        })
      }

    case "FIND_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgets
      }
    case "CLEAR_WIDGET":
      return {
        initialState
      }

    default:
      return state
  }
}
export default widgetReducer