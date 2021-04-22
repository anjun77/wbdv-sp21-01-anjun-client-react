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

const CourseEditor = ({history, params}) => {
  const {layout, courseId, moduleId} = useParams();
  const [courseTitle, setCourseTitle] = useState("Selected Course")
  useEffect(() => {
    courseService.findCourseById(courseId).then(
        (course) => setCourseTitle(course.title))
  }, [])

  return (
      <Provider store={store}>
        <div>
          <div id="my-editor">
            <div className="row">
              <div className="col-4 nav-left">
                <div className="left-icon">
                  <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left"></i>
                  </Link>
                </div>
                <div className="left-text-container">
                  <div className="left-text">
                    <h4>{courseTitle}</h4>
                  </div>
                </div>
              </div>

              <div className="nav nav-tabs col-8 nav-right">
                <LessonTabs/>
              </div>
            </div>

            <div className="row content">
              <div className="col-4 left-part">
                <ModuleList/>
              </div>

              <div className="col-8 right-part">
                <div className="content-right-part">
                  <TopicPills/>
                </div>
                <WidgetList/>

              </div>
            </div>
          </div>
        </div>

      </Provider>
  )
}

export default CourseEditor



