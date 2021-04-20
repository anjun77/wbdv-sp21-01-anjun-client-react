import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import QuestionService from "../../services/question-service"
import QuizService from "../../services/quizzes-service"
import AttemptService from "../../services/attemp-service"

const Quiz = () => {
  const {quizId} = useParams();
  const [questions, setQuestions] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [questionsWithAns, setQuestionsWithAns] = useState([]);
  const [isGraded, setIsGraded] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const [attemptHistory, setAttemptHistory] = useState(false);

  useEffect(() => {
    QuestionService.findQuestionsForQuiz(quizId).then((questions) => {
      setQuestions(questions)
      setQuestionsWithAns(questions)
    })
    QuizService.findQuizById(quizId).then((quiz) => setQuiz(quiz))

  }, [quizId])

  useEffect(() => {
    QuizService.findAttemptsByQuizId(quizId).then((attempts) => setAttempts(attempts))
  }, [quizId])

  return (
      <div className="container">
        <h3>{quiz.title} ({questions.length})</h3>
        <ul className='list-group'>
          {
            questions.map((question) => {
              return (
                  <li>
                    <Question
                        question={question}
                        isGraded={isGraded}
                        setQuestionsWithAns={setQuestionsWithAns}
                    />
                  </li>
              )
            })
          }
          <li className="list-group-item">
            {
              isGraded &&
              <span>Score: {currentScore}</span>
            }
            <button
                onClick={()=> {
                  setIsGraded(true)
                  if (!isGraded) {
                    QuizService.submitQuiz(quizId, questionsWithAns)
                    .then(attempt => setCurrentScore(attempt.score))
                  }
                }}
                className="btn btn-success float-right"
                type = 'button'
            >
              Submit
            </button>
          </li>
          <li className="list-group-item">
            <button
                onClick={()=> {
                  setAttemptHistory(!attemptHistory)
                }}
                className="btn btn-primary float-right"
                type = 'button'
            >
              Histories
            </button>
          </li>

          {
            attemptHistory &&
            attempts.map((attempt) => {
              return (
                  <li className="list-group-item">
                    Last Score: {attempt.score}
                  </li>
              )
            })
          }
        </ul>
      </div>
  )
}

export default Quiz;
