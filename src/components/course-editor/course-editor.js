import React, {useEffect, useState} from 'react'
import "./course-editor.css"
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "../widgets/widget-list";
import courseService from "../../services/course-service"
import "../../index.css"

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer,
  widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
  const {layout, courseId, moduleId} = useParams();
  const [courseTitle, setCourseTitle] = useState("")
  useEffect(() => {
    courseService.findCourseById(courseId).then(
        (course) => setCourseTitle(course.title))
  }, [])

  return (
      <Provider store={store}>
        <div>
          <h2 className="my-title">
            <Link to={`/courses/${layout}`}>
              <i className="fas fa-arrow-left"></i>
            </Link>
            {courseTitle}
          </h2>
          {/*<i onClick={() => history.goBack()}*/}
          {/*   className="fas fa-times float-right"></i>*/}

          <div className="editor-container">
            <div className="row">
              <div className="col-3">
                <ModuleList/>
              </div>
              <div className="col-9">
                <div className="row">
                  <LessonTabs/>
                </div>
                <div className="row">
                  <TopicPills/>
                </div>
                <div className="row">
                  <WidgetList/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>)
}

export default CourseEditor



