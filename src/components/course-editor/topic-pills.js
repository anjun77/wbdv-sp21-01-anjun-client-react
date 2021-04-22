import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicActions from "../../actions/topic-actions";
import "../../index.css"

const TopicPills = (
    {
      topics = [],
      createTopic,
      deleteTopic,
      updateTopic,
      findTopicsForLesson,
      clearTopics
    }) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams();
  useEffect(() => {
    if (lessonId !== "undefined" && typeof lessonId !== "undefined" &&
        moduleId !== "undefined" && typeof moduleId !== "undefined"
    ) {
      findTopicsForLesson(lessonId)
    } else {
      clearTopics();
    }
  }, [moduleId, lessonId])
  return (
      <>
        {
          topics.map(topic =>
              <EditableItem
                  key = {topic._id}
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                  deleteItem={deleteTopic}
                  updateItem={updateTopic}
                  active={topicId === topic._id}
                  type={'topic'}
                  item={topic}/>
          )
        }
        <div className="my-item">
          <i className="fas fa-plus my-fa-plus float-right"
          onClick={() => createTopic(lessonId)}></i>
        </div>

      </>
      )
}

const stpm = (state) => {
  return {
    topics: state.topicReducer.topics
  }
}
const dtpm = (dispatch) => ({
  createTopic: (lessonId) => {
    topicActions.createTopic(dispatch, lessonId)
  },
  deleteTopic: (topicToDelete) => {
    topicActions.deleteTopic(dispatch, topicToDelete)
  },
  updateTopic: (newTopic) => {
    topicActions.updateTopic(dispatch, newTopic)
  },
  findTopicsForLesson: (lessonId) => {
    topicActions.findTopicsForLesson(dispatch, lessonId)
  },
  clearTopics: () => {
    topicActions.clearTopics(dispatch)
  }
})

export default connect(stpm, dtpm)
(TopicPills)