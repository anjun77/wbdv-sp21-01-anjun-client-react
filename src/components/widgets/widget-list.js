import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget"
import ImageWidget from "./image-widget"
import {connect} from "react-redux"
import widgetActions, {updateWidget} from "../../actions/widget-actions";

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
    findWidgetsForTopic(topicId)
  }, [findWidgetsForTopic, topicId])

  return (
      <div>
        <i onClick={() => createWidget(topicId)}
           className="fas fa-plus fa-2x my-fa-plus"></i>
        <ul className="list-group">
          {
            widgets.map(widget =>
                <li className="list-group-item" key={widget.id}>
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

                  {
                    widget.type === "LIST" &&
                    <ListWidget
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
                  }
                  {
                    widget.type === "IMAGE" &&
                    <ImageWidget
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
    createWidget: (topicId) => {
      if (topicId !== undefined) {
        widgetActions.createWidget(dispatch, topicId)
      } else{
        alert("Select a topic first")
      }
    },
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