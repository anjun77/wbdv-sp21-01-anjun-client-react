import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Route} from "react-router-dom"
import {findAllCourses} from ""

export default class CourseManager extends React.Component {
  render() {
    return(
        <div>
          <h1>Course Manager</h1>
          <CourseTable/>
          <CourseGrid/>
        </div>
    )
  }
}