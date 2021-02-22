import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

  constructor(props) {
    super(props);
  }

  // state = {
  //   courses: [
  //     {title: "CS5610", owner:"me", lastModified: "02/15/2021"},
  //     {title: "CS4550", owner:"me", lastModified: "02/16/2021"},
  //     {title: "CS3200", owner:"you", lastModified: "02/14/2021"},
  //     {title: "CS5200", owner:"you", lastModified: "02/09/2021"},
  //       ]
  // }
  //
  // addCourse = () => {
  //   const newCourse = {
  //     title: "New Course",
  //     owner: "me",
  //     lastModified: "02/15/2021"
  //   }
  //   this.state.courses.push(newCourse)
  //   this.setState(this.state)
  // }

  render() {
    return (
        <div>
          <Link to="/courses/grid">
            <i className="fas fa-2x fa-th float-right"></i>
          </Link>
          <h2>Course Table</h2>
          <table className="table">
            <tbody>
            {
              this.props.courses.map((course, ndx) =>
                  <CourseRow
                      updateCourse={this.props.updateCourse}
                      deleteCourse={this.props.deleteCourse}
                      key={ndx}
                      course={course}
                      title={course.title}
                      owner={course.owner}
                      lastModified={course.lastModified}
                  />)
            }
            </tbody>
          </table>
        </div>
    )
  }
}