import React, {useState} from 'react'

const ListWidget = ({widget, setEditingWidget,editing}) => {
  return (
      <div>
        {
          editing &&
          <>
            <input onChange={(e) => setEditingWidget(
                widget => ({...widget, ordered: e.target.checked}))}
                   checked={widget.ordered}
                   type="checkbox"/> Ordered
            <br/>

            List Items
            <textarea onChange={(e) => setEditingWidget(
                widget => ({...widget, text: e.target.value}))}
                      rows={10}
                      value={widget.text}
                      className="form-control">
                    </textarea>

          </>
        }
        {
          !editing &&
          <>
            {
              widget.ordered &&
              <ol>
                {
                  widget.text.split("\n").map(item => {
                    return (
                        <li>{item}</li>
                    )
                  })
                }
              </ol>
            }
            {
              !widget.ordered &&
              <ul>
                {
                  widget.text.split("\n").map(item => {
                    return (
                        <li>{item}</li>
                    )
                  })
                }
              </ul>
            }
          </>
        }
      </div>
  )
}

export default ListWidget