import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
  const [yourAnswer, setYourAnswer] = useState("")
  const [grade, setGrade] = useState("")
  return (
      <div>
        <h4>
          {question.question}
          {
            grade &&
            question.correct === yourAnswer &&
            <i className="fas fa-check my-fa-check float-right"></i>
          }
          {
            grade &&
            question.correct !== yourAnswer &&
            <i className="fas fa-times my-fa-times float-right"></i>
          }
        </h4>
        <ul className="list-group">
          {
            question.choices.map((choice) => {
              return (
                  //todo: show green or red color depending on answer
                  <li className={`list-group-item
                  ${grade && question.correct === choice
                      ? "list-group-item-success" : ""}
                  ${grade && question.correct !== choice && yourAnswer
                  === choice ? "list-group-item-danger" : ""}
                  `}>
                    <label>
                      <input
                          onClick={() => {
                            setYourAnswer(choice)
                          }
                          }
                          type="radio"
                          name={question._id}/>
                      {choice}
                    </label>
                    {
                      grade && question.correct === choice &&
                      <i className="fas fa-check my-fa-check float-right"></i>
                    }
                    {
                      grade && question.correct !== choice && yourAnswer
                      === choice &&
                      <i className="fas fa-times my-fa-times float-right"></i>
                    }
                  </li>
              )
            })
          }
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

export default MultipleChoiceQuestion;