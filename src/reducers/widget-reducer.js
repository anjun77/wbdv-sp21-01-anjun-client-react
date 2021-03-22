const initialState = {
  widgets: []
}

const widgetReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_WIDGET":
      return {
        widgets: [
          ...state.widgets,
          action.widget
        ]
      }

    case "DELETE_WIDGET":
      const newState1= {
        widgets: state.widgets.filter(widget => {
          if(widget.id === action.widgetToDelete.id) {
            return false
          } else {
            return true
          }
        })
      }
      return newState1

    case "UPDATE_WIDGET":
      return {
        widgets: state.widgets.map(widget => {
          if(widget.id === action.updatedWidget.id) {
            return action.updatedWidget
          } else {
            return widget
          }
        })
      }
    default:
      return state

    case "FIND_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgets
      }
  }
}
export default widgetReducer