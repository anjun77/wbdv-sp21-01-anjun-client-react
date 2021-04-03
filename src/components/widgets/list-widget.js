import React, {useState} from 'react'

const ListWidget = ({widget, updateWidget, deleteWidget}) => {
  const [widgetCache, setWidgetCache] = useState(widget)
  const [editing, setEditing] = useState(false)

  return (
      <>
        {
          editing &&
          <>
            <i onClick={() => {
              updateWidget(widgetCache.id, widgetCache)
              setEditing(false)
            }} className="fas fa-check float-right"/>

            <i onClick={() => {
              deleteWidget(widget)
              setEditing(false)
            }} className="fas fa-trash float-right"/>

            <input onChange={(e) => setWidgetCache(
                widgetCache => ({...widgetCache, ordered: e.target.checked}))}
                   checked={widgetCache.ordered}
                   type="checkbox"/> Ordered
            <br/>

            List Items
            <textarea onChange={(e) => setWidgetCache(
                widgetCache => ({...widgetCache, text: e.target.value}))}
                      rows={10}
                      value={widgetCache.text}
                      className="form-control">
                    </textarea>

          </>
        }
        {
          !editing &&
          <>
            <i onClick={() => setEditing(true)} className="fas fa-cog"/>
            {
              widgetCache.ordered &&
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
      </>
  )
}

export default ListWidget