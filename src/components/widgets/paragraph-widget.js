import React, {useState} from 'react'

const ParagraphWidget = ({widget, setEditingWidget, editing}) => {
  return (
      <>
        {editing &&
        <div>
          <textarea
              className="form-control"
              value={widget.text}
              onChange={(e) => {
                setEditingWidget({
                  ...widget,
                  text: e.target.value
                })
              }}
          ></textarea>
        </div>
        }
        {
          !editing &&
            <p>{widget.text}</p>
        }
      </>

  )
}
export default ParagraphWidget