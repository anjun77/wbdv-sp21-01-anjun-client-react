import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, isGraded}) => {
  return (
      <div>
        {
          question.type === "TRUE_FALSE" &&
          <TrueFalseQuestion question={question} isGraded={isGraded}/>
        }
        {
          question.type === "MULTIPLE_CHOICE" &&
          <MultipleChoiceQuestion question={question} isGraded={isGraded}/>
        }
      </div>
  )
}

export default Question;