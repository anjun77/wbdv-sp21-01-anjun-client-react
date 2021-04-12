import React, {useState} from "react";
import "../../../index.css"

const TrueFalseQuestion = ({question}) => {
  const [yourAnswer, setAnswer] = useState(null);
  const [grade, setGrade] = useState(false);
  return (
      <div>
        <h4>
          {question.question}
          {
            grade && yourAnswer === question.correct &&
            <i className="fas fa-check my-fa-check float-right"></i>
          }
          {
            grade && yourAnswer !== question.correct && yourAnswer !== "" &&
            <i className="fas fa-times my-fa-times float-right"></i>
          }
        </h4>

        <ul className="list-group">
          <li className={`list-group-item
         ${grade && question.correct === "true" ? "list-group-item-success" : ""}
         ${grade && question.correct != "true" && yourAnswer === "true" ? "list-group-item-danger" : ""}
         `}>
            <label>
              <input
                  type="radio"
                  onClick={() => setAnswer("true")}
                  name={question._id}/>
              True
            </label>
            {
              grade && question.correct === "true" &&
              <i className="fas fa-check my-fa-check float-right"></i>
            }
            {
              grade && question.correct !== "true" && yourAnswer === "true" &&
              <i className="fas fa-times my-fa-times float-right"></i>
            }
          </li>

          <li className={`list-group-item
         ${grade && question.correct === "false" ? "list-group-item-success"
              : ""}
         ${grade && question.correct !== "false" && yourAnswer === "false"
              ? "list-group-item-danger" : ""}
         `}>
            <label>
              <input
                  type="radio"
                  onClick={() => setAnswer("false")}
                  name={question._id}/>
              False
            </label>
            {
              grade && question.correct === "false" &&
              <i className="fas fa-check my-fa-check float-right"></i>
            }
            {
              grade && question.correct !== "false" && yourAnswer === "false" &&
              <i className="fas fa-times my-fa-times float-right"></i>
            }
          </li>
        </ul>
        <p>
          Your answer: {yourAnswer}
        </p>

        <button type="button"
                className="btn btn-success"
                onClick={() => {
                  setGrade(true)
                }
                }>
          Grade
        </button>
      </div>
  )
}

export default TrueFalseQuestion;

