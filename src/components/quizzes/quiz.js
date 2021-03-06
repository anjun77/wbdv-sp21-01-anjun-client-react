import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/question-service"
import quizService from "../../services/quizzes-service"
import attemptService from "../../services/attemp-service"

const Quiz = () => {
  const {quizId} = useParams()
  const [questions, setQuestions] = useState([])
  const [quiz, setQuiz] = useState([])
  const [gradeStatus,beginGrade] = useState(false)
  const [attempts, setAttempts] = useState([])
  const [currentAttempt, setCurrentAttempt] = useState([])
  const findAttempt = () => {
    attemptService.findAttemptsForQuiz(quizId)
    .then((attempts) => {
      setAttempts(attempts)
    })
  }
  useEffect(() => {
    quizService.findQuizById(quizId)
    .then((quiz) => {
      setQuiz(quiz)
    })
    questionService.findQuestionsForQuiz(quizId)
    .then((questions) => {
      setQuestions(questions)
    })

  }, [])
  return(
      <div>
        <h3>{quiz.title} </h3>
        <ul className={"list-group"}>
          {
            questions.map((question) => {
              return(
                  <li className={"list-group-item border-top"}>
                    <Question question={question}
                              gradeStatus = {gradeStatus}
                    />
                  </li>
              )
            })
          }
        </ul>
        <div type="button" className="btn btn-success" onClick={() => {
          beginGrade(true)
          quizService.submitQuiz(quiz._id,questions).then((attempt)=> {
            findAttempt();
            setCurrentAttempt(attempt)
          })
        }}>Submit</div>

        {
          gradeStatus &&

          <ul className={"list-group"}>
            <h6>Current Score : {currentAttempt.score}</h6>

            {
              attempts.length > 1 &&
              <h6>Previous Attempt:</h6>
            }
            {
              attempts.filter((attempt) => attempt._id !== currentAttempt._id).map((attempt) => {
                return (
                    <li className={"list-group-item"}>
                      <h6>Score : {attempt.score}</h6>
                    </li>
                )
              })
            }
          </ul>
        }
      </div>
  )
}

export default Quiz;