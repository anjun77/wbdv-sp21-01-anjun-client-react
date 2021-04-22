import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonActions from "../../actions/lesson-action";
import "../../index.css"

const LessonTabs = (
    {
      lessons = [],
      findLessonsForModule,
      createLesson,
      updateLesson,
      deleteLesson,
      clearLesson
    }) => {
  const {layout, courseId, moduleId, lessonId} = useParams();
  useEffect(() => {
    if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
      findLessonsForModule(moduleId)
    } else {
      clearLesson();
    }
  }, [moduleId])

  return (
      <>
        {
          lessons.map(lesson =>
              <EditableItem
                  key={lesson._id}
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                  active={lesson._id === lessonId}
                  deleteItem={deleteLesson}
                  updateItem={updateLesson}
                  type={'lesson'}
                  item={lesson}/>
          )
        }
        <div className="nav-item">
          <a className="nav-item-link" href="#">
            <i className="fas fa-plus fa-2x my-fa-plus"
               onClick={() => createLesson(moduleId)}></i>
          </a>
        </div>
      </>
  )
}

const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
  findLessonsForModule: (moduleId) => {
    lessonActions.findLessonsForModule(dispatch, moduleId)
  },
  createLesson: (moduleId) => {
    if (moduleId === "" || moduleId === "undefined" || typeof moduleId
        === "undefined") {
      lessonActions.createLesson(dispatch, moduleId)
    }
  },
  deleteLesson: (lessonToDelete) => {
    lessonActions.deleteLesson(dispatch, lessonToDelete)
  },
  updateLesson: (newItem) => {
    lessonActions.updateLesson(newItem)
  },
  clearLesson: () => {
    lessonActions.createLesson(dispatch)
  }
})

export default connect(stpm, dtpm)(LessonTabs)