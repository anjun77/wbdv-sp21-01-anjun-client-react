import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {connect} from "react-redux"
import widgetActions from "../../actions/widget-actions";

const WidgetList = (
    {
        widgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic
    }) => {
  const {topicId} = useParams();
  useEffect(() => {
    if(topicId !== "undefined" || typeof topicId !== "undefined") {
      findWidgetsForTopic(topicId)
    }
  }, [topicId])

  return(
      <div>
        <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
        <h2>Widget List</h2>
        <ul className="list-group">
          {
            widgets.map(widget =>
                <li key={widget.id}
                    className="list-group-item">

                  {
                    widget.type === "HEADING" &&
                        <HeadingWidget
                            updateWidget={updateWidget}
                            deleteWidget={deleteWidget}
                            widget={widget}/>
                  }
                  {
                    widget.type === "PARAGRAPH" &&
                    <ParagraphWidget
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
                  }
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

const dtpm = (dispatch) => {
  return {
    createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
    updateWidget: (wid, widget) => widgetActions.updateWidget(dispatch,
        wid, widget),
    deleteWidget: (widgetToDelete) => widgetActions.deleteWidget(dispatch,
        widgetToDelete),
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(
        dispatch, topicId)
  }
}

export default connect(stpm, dtpm)
(WidgetList)