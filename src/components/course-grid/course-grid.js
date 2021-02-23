import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import {deleteCourse} from "../../services/course-service";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div>
      <table className="table">
        <thead>
        <tr >
          <th className="d-none d-sm-table-cell">
            Recent Documents
          </th>
          <th className="d-none d-sm-table-cell">
            Owned by me
          </th>
          <th className="d-block">
            <i className="fas fa-folder"></i>
            <i className="fas fa-sort-alpha-down"></i>
            <Link to="/courses/table">
              <i className="fas fa-th"></i>
            </Link>
          </th>
        </tr>
        </thead>
      </table>

      <div className="row">
        {
          courses.map((course, ndx) =>
                  <CourseCard key={ndx}
                              course={course}
                              updateCourse={updateCourse}
                              deleteCourse={deleteCourse}/>
          )
        }
      </div>
    </div>

export default CourseGrid