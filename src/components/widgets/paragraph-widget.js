import React, {useState} from 'react'

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {
  const [widgetCache, setWidgetCache] = useState(widget)
  const [editing, setEditing] = useState(false)
  return (
      <>
        {editing &&
        <>
          <select onChange={(e) => setWidgetCache(
              widgetCache => ({...widgetCache, type: e.target.value}))}
                  value={widgetCache.type} className="form-control">
            <option value={"PARAGRAPH"}>Paragraph</option>
            <option value={"HEADING"}>Heading</option>
            <option value={"LIST"}>List</option>
            <option value={"IMAGE"}>Image</option>
          </select>
          <br/>
          <textarea
              className="form-control"
              value={widgetCache.text}
              onChange={(e) => {
                setWidgetCache({
                  ...widgetCache,
                  text: e.target.value
                })
              }}
          />
          <br/>

          <i onClick={() => {
            updateWidget(widgetCache.id, widgetCache)
            setEditing(false)
          }} className="fas fa-check float-right"/>

          <i onClick={() => {
            deleteWidget(widget)
            setEditing(false)
          }} className="fas fa-trash float-right"/>

        </>
        }
        {
          !editing &&
          <>
            <i onClick={() => setEditing(true)} className="fas fa-cog"/>
            <p>{widget.text}</p>
          </>
        }
      </>

  )
}
export default ParagraphWidget