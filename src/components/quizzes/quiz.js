import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import QuestionService from "../../services/question-service"
import QuizzesService from "../../services/quizzes-service"

const Quiz = () => {
  const {courseId, quizId} = useParams()
  const [questions, setQuestions] = useState([])
  const [attempts, setAttempts] = useState([])

  useEffect(() => {
    QuestionService.findQuestionsForQuiz(quizId)
    .then((res) => {
      setQuestions(res)
    })
  }, [])

  return(
      <div>
        <h2>Quiz {quizId}</h2>
        <ul>
          {
            questions.map(question =>
                <li>
                  <Question question={question}/>
                  {question.answer}
                </li>)
          }
        </ul>
        <button onClick={() => {
          QuizzesService.submitQuiz(quizId, questions)
          setAttempts(true)
        }}>
          Submit
        </button>
        <br/>
        <br/>
        {
          attempts &&
          <div className="row">
            <h6>Quiz submitted</h6>
          </div>
        }
        <br/>
      </div>
  );
}

export default Quiz;
