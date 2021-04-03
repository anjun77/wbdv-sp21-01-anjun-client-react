import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import "../../index.css"

const LessonTabs = (
    {
      lessons = [],
      findLessonsForModule,
      createLesson,
      updateLesson,
      deleteLesson
    }) => {
  const {layout, courseId, moduleId, lessonId} = useParams();
  useEffect(() => {
    if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
      findLessonsForModule(moduleId)
    } else {
      findLessonsForModule("null")
    }
  }, [moduleId])
  return (
      <div>
        <ul className="nav nav-tabs">
          {
            lessons.map(lesson =>
                <li className="nav-item" key={lesson._id}>
                  <EditableItem
                      active={lesson._id === lessonId}
                      to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lesson._id}`}
                      updateItem={updateLesson}
                      deleteItem={deleteLesson}
                      item={lesson}
                      type="lesson"/>
                </li>
            )
          }
          <li>
            <i onClick={() => createLesson(moduleId)}
               className="fas fa-plus fa-2x justify-content-center my-fa-plus"></i>
          </li>
        </ul>
      </div>)
}

const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
  findLessonsForModule: (moduleId) => {
    lessonService.findLessonsForModule(moduleId)
    .then(lessons => dispatch({
      type: "FIND_LESSONS_FOR_MODULE",
      lessons
    }))
  },
  createLesson: (moduleId) => {
    lessonService
    .createLesson(moduleId, {title: "New Lesson"})
    .then(lesson => dispatch({
      type: "CREATE_LESSON",
      lesson
    }))
  },
  deleteLesson: (lesson) =>
      lessonService.deleteLesson(lesson._id)
      .then(status => dispatch({
        type: "DELETE_LESSON",
        lesson
      })),
  updateLesson: (lesson) =>
      lessonService.updateLesson(lesson._id, lesson)
      .then(status => dispatch({
        type: "UPDATE_LESSON",
        lesson
      }))
})

export default connect(stpm, dtpm)(LessonTabs)