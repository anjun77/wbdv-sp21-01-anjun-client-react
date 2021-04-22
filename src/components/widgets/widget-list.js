import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import Widget from "./widget"
import {connect} from "react-redux"
import widgetActions from "../../actions/widget-actions";

const WidgetList = (
    {
      widgets = [],
      createWidget,
      deleteWidget,
      updateWidget,
      findWidgetsForTopic,
      clearWidgets
    }) => {
  const {topicId} = useParams();
  const [editingWidget, setEditingWidget] = useState({})
  useEffect(() => {
    if (topicId !== "undefined" && typeof topicId !== "undefined") {
      findWidgetsForTopic(topicId)
    } else {
      clearWidgets()
    }
  }, [topicId])

  return (
      topicId !== "undefined" && typeof topicId !== "undefined" &&
      <div>
        <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right my-fa-plus"></i>
        <ul className="list-group">
          {
            widgets.map(widget =>
                <li className="list-group-item" key={widget.id}>
                  {
                    editingWidget.id === widget.id &&
                    <>
                      <i onClick={() => {

                        updateWidget(editingWidget).then(
                            setEditingWidget({})
                        )
                      }
                      } className="fas fa-check fa-2x float-right my-fa-check"></i>
                      <i onClick={() => deleteWidget(widget)} className="fas fa-trash fa-2x float-right"></i>

                    </>
                  }
                  {
                    editingWidget.id !== widget.id &&
                    <i onClick={() => setEditingWidget(widget)} className="fas fa-cog fa-2x float-right"></i>
                  }
                  <br></br>
                  <Widget
                      editing={editingWidget.id === widget.id}
                      setEditingWidget={setEditingWidget}
                      widget={editingWidget.id === widget.id ? editingWidget : widget}/>
                </li>
            )
          }
        </ul>
      </div>
  )
}

const stpm = (state) => {
  return {
    widgets: state.widgetReducer.widgets
  }
}

const dtpm = (dispatch) => ({
  createWidget: (topicId) => {
    if (topicId !== undefined) {
      widgetActions.createWidget(dispatch, topicId)
    } else {
      alert("Select a topic first")
    }
  },
  updateWidget: async (newItem) => await widgetActions.updateWidget(dispatch,
      newItem),
  deleteWidget: (widgetToDelete) => widgetActions.deleteWidget(dispatch,
      widgetToDelete),
  findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(
      dispatch, topicId),
  clearWidgets: () => {
    widgetActions.clearWidgets(dispatch)
  }
})

export default connect(stpm, dtpm)
(WidgetList)