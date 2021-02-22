import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends React.Component{
  state = {
    courses: [
      {title: "CS5610", owner:"me", lastModified: "02/15/2021"},
      {title: "CS4550", owner:"me", lastModified: "02/16/2021"},
      {title: "CS3200", owner:"you", lastModified: "02/14/2021"},
      {title: "CS5200", owner:"you", lastModified: "02/09/2021"},
        ]
  }

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastModified: "02/15/2021"
    }
    this.state.courses.push(newCourse)
    this.setState(this.state)
  }

  render() {
    return(
        <div>
          <h2>Course Table</h2>
          <button onClick={this.addCourse}>
            Add Course
          </button>
          <table className="table">
            {/*{*/}
            {/*  this.courses.map(course =>*/}
            {/*  <CourseRow*/}
            {/*  title={course.title}*/}
            {/*  owner={course.owner}*/}
            {/*  lastModified={course.lastModified}/>)*/}
            {/*}*/}
          </table>
        </div>
    )
  }
}