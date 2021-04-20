import React, {useState} from "react";
import "../../../index.css"

const TrueFalseQuestion = ({question, gradeStatus}) => {
  const [yourAnswer, setAnswer] = useState(null);

  return (
      <div>
        <h4>
          {question.question}
          {
            gradeStatus && yourAnswer === question.correct &&
            <i className="fas fa-check my-fa-check float-right"></i>
          }
          {
            gradeStatus && yourAnswer !== question.correct && yourAnswer !== "" &&
            <i className="fas fa-times my-fa-times float-right"></i>
          }
        </h4>

        <ul className="list-group">
          <li className={`list-group-item
         ${gradeStatus && question.correct === "true" ? "list-group-item-success" : ""}
         ${gradeStatus && question.correct != "true" && yourAnswer === "true" ? "list-group-item-danger" : ""}
         `}>
            <label>
              <input
                  type="radio"
                  onClick={() => setAnswer("true")}
                  name={question._id}/>
              True
            </label>
            {
              gradeStatus && question.correct === "true" &&
              <i className="fas fa-check my-fa-check float-right"></i>
            }
            {
              gradeStatus && question.correct !== "true" && yourAnswer === "true" &&
              <i className="fas fa-times my-fa-times float-right"></i>
            }
          </li>

          <li className={`list-group-item
         ${gradeStatus && question.correct === "false" ? "list-group-item-success"
              : ""}
         ${gradeStatus && question.correct !== "false" && yourAnswer === "false"
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
              gradeStatus && question.correct === "false" &&
              <i className="fas fa-check my-fa-check float-right"></i>
            }
            {
              gradeStatus && question.correct !== "false" && yourAnswer === "false" &&
              <i className="fas fa-times my-fa-times float-right"></i>
            }
          </li>
        </ul>
        <p>
          Your answer: {yourAnswer}
        </p>

        {/*<button type="button"*/}
        {/*        className="btn btn-success"*/}
        {/*        onClick={() => {*/}
        {/*          setGrade(true)*/}
        {/*        }*/}
        {/*        }>*/}
        {/*  Grade*/}
        {/*</button>*/}
      </div>
  )
}

export default TrueFalseQuestion;

