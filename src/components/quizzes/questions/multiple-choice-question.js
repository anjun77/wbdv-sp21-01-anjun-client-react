import React, {useState} from "react";

const MultipleChoiceQuestion = ({question, gradeStatus}) => {
  const [yourAnswer, setYourAnswer] = useState("")

  return (
      <div>
        <h4>
          {question.question}
          {
            gradeStatus &&
            question.correct === yourAnswer &&
            <i className="fas fa-check my-fa-check float-right"></i>
          }
          {
            gradeStatus &&
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
                  ${gradeStatus && question.correct === choice
                      ? "list-group-item-success" : ""}
                  ${gradeStatus && question.correct !== choice && yourAnswer
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
                      gradeStatus && question.correct === choice &&
                      <i className="fas fa-check my-fa-check float-right"></i>
                    }
                    {
                      gradeStatus && question.correct !== choice && yourAnswer
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
      </div>
  )
}

export default MultipleChoiceQuestion;