import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import {deleteCourse} from "../../services/course-service";

const CourseGrid = ({courses}) =>
    <div>
      <div className="row">
        <div className="col-4">Recent Documents</div>
        <div className="col-4">Owned by me</div>
        <div>
          <i className="fas fa-folder"></i>
          <i className="fas fa-sort-alpha-down"></i>
        </div>
        <Link to="/courses/table">
          <i className="fas fa-th"></i>
        </Link>
        <div className="row">
          {
            courses.map((course, ndx) =>
                <CourseCard key={ndx}
                            course={course}
                            deleteCourse={deleteCourse}/>
                            // updateCourse={updateCourse}/>
            )
          }
        </div>
      </div>
    </div>

export default CourseGrid