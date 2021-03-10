import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, deleteCourse, updateCourse}) => {
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(course.title)

  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: title
    }
    updateCourse(newCourse)
  }

  return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="card">
          {editing && <i onClick={() => saveTitle()}
                         className="fas fa-check"></i>}
          {editing && <i onClick={() => deleteCourse(course)}
                         className="fas fa-trash"></i>}
          <img
              src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
              className="card-img-top" alt="..."/>

          <div className="card-body">
            {!editing && <h5 className="card-title">{course.title}</h5>}
            {editing && <input type="text" onChange={(event) => setTitle(
                event.target.value)}
                               value={title}/>}
            <p className="card-text">Some quick example text to build on the
              card
              title and make up the bulk of the card's
              content.</p>
            <img src={``}/>
            <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
              {course.title}
            </Link>
            <div>
              {!editing && <i onClick={() => {
                setEditing(true);
                setTitle(course.title)
              }} className='fas fa-edit'></i>}
            </div>
          </div>
        </div>
      </div>
  )
}

export default CourseCard
