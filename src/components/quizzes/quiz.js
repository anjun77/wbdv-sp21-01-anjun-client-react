import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import QuestionService from "../../services/question-service"
import QuizService from "../../services/quizzes-service"
import AttemptService from "../../services/attemp-service"

const Quiz = () => {
  const {quizId} = useParams()
  const [questions, setQuestions] = useState([])
  const [attempts, setAttempts] = useState([])
  const [quiz, setQuiz] = useState([])
  const [isGraded, setGrade] = useState(false)
  const [currentAttempt, setCurrentAttempt] = useState([])
  const findAttempt = () => {
    AttemptService.findAttemptsForQuiz(quizId)
    .then((attempts) => {
      setAttempts(attempts)
        }
    )
  }

  useEffect(() => {
    QuizService.findQuizById(quizId)
    .then((quiz) => {
      setQuiz(quiz)
        }
    )
    QuestionService.findQuestionsForQuiz(quizId)
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
                              isGraded = {isGraded}
                    />
                  </li>
              )
            })
          }
        </ul>
        <div type="button" className="btn btn-success" onClick={() => {
          setGrade(true)
          QuizService.submitQuiz(quiz._id,questions).then((attempt)=> {
            findAttempt();
            setCurrentAttempt(attempt)
          })
        }}>Submit</div>

        {
          isGraded &&

          <ul className={"list-group"}>
            <h6>Current Score : {currentAttempt.score}</h6>

            {
              attempts.length > 1 &&
              <h6>Past Attempt:</h6>
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
  );
}

export default Quiz;
