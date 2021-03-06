import React, {useState} from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import CourseService, {findAllCourses} from "../services/course-service"

class CourseManager extends React.Component {
  state = {
    courses: [],
    courseTitle: ''
  }

  setTitle(title) {
    this.setState(
        {courseTitle: title}
    )
  }

  componentDidMount = () =>
      CourseService.findAllCourses()
      .then(courses => this.setState({courses}))

  addCourse = () => {
    const newCourse = {
      title: this.state.courseTitle,
      owner: "Me",
      lastModified: "02/20/2021"
    }
    this.setTitle('');
    CourseService.createCourse(newCourse)
    .then(course => this.setState(
        (prevState) => ({
          ...prevState,
          courses: [
            ...prevState.courses,
            course
          ]
        })))
  }

  updateCourse = (course) => {
    CourseService.updateCourse(course._id, course)
    .then(status => this.setState((prevState) => ({
      ...prevState,
      courses: prevState.courses.map(
          (c) => c._id === course._id ? course : c)
    })))
  }

  deleteCourse = (courseToDelete) => {
    CourseService.deleteCourse(courseToDelete._id)
    .then(status => {
      this.setState((prevState) => ({
        ...prevState,
        courses: prevState.courses.filter
        (course => course !== courseToDelete)
      }))
    })
  }

  render() {
    return (
        <div>
          <Route path="/courses/table" exact={true}>
            <div className="row">
              <div className="col-1">
                <i className="fa fa-2x fa-bars"></i>
              </div>
              <div className="col-3 d-none d-lg-block">
                <h3>Course Manager</h3>
              </div>
              <div className="col-7">
                <input className="form-control"
                       onChange={(event) => this.setTitle(event.target.value)}
                       placeholder="New Course Title"
                       value={this.state.courseTitle}/>
              </div>
              <div className="col-1">
                <i onClick={this.addCourse}
                   className="fas fa-2x fa-plus float-right"></i>
              </div>
            </div>
            <CourseTable
                updateCourse={this.updateCourse}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
          </Route>

          <Route path="/courses/grid" exact={true}>
            <div className="row">
              <div className="col-1">
                <i className="fa fa-2x fa-bars"></i>
              </div>
              <div className="col-3 d-none d-lg-block">
                <h3>Course Manager</h3>
              </div>
              <div className="col-7">
                <input className="form-control"
                       onChange={(event) => this.setTitle(event.target.value)}
                       placeholder="New Course Title"
                       value={this.state.courseTitle}/>
              </div>
              <div className="col-1">
                <i onClick={this.addCourse}
                   className="fas fa-2x fa-plus float-right"></i>
              </div>
            </div>
            <CourseGrid
                updateCourse={this.updateCourse}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
          </Route>

          <Route path={[
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId",
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
            "/courses/:layout/edit/:courseId/modules/:moduleId",
            "/courses/:layout/edit/:courseId/:moduleId/:lessonId",
            "/courses/:layout/edit/:courseId/:moduleId",
            "/courses/:layout/edit/:courseId"]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>
        </div>
    )
  }
}

export default CourseManager

