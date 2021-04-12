import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from '../../services/quizzes-service'
import '../../index.css'

const QuizzesList = () => {
  const {courseId} = useParams()
  const [quizzes, setQuizzes] = useState([])
  useEffect(() => {
    //move to service file
    quizzesService.findAllQuizzes()
    .then((quizzes) => {
      setQuizzes(quizzes)
    })
  }, [])
  return (
      <div>
        <h2>Quizzes</h2>
        <ul className="list-group">
          {
            quizzes.map((quiz) => {
              return(
                  <li className="list-group-item">
                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                    {quiz.title}
                      <button type="button" className="btn btn-primary float-right">
                        Start
                      </button>
                    </Link>
                  </li>
              )
            })
          }
        </ul>
      </div>
  );
}

export default QuizzesList;