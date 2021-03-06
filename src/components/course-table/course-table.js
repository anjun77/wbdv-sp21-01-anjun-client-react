import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <table className="table">
            <thead>
            <tr>
              <th className="d-md-table-cell">Title</th>
              <th className="d-none d-md-table-cell">Owned by</th>
              <th className="d-none d-lg-table-cell">Last modified
              </th>
              <th>
                <i className="fas fa-folder"></i>
                <i className="fas fa-sort-alpha-down"></i>
                <Link to="/courses/grid">
                  <i className="fas fa-th"></i>
                </Link>
              </th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.courses.map((course) =>
                  <CourseRow
                      updateCourse={this.props.updateCourse}
                      deleteCourse={this.props.deleteCourse}
                      key={course._id}
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