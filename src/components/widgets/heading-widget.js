import React, {useState} from 'react'

const HeadingWidget = ({widget, updateWidget, deleteWidget}) => {

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

            <select onChange={(e) => setWidgetCache(
                widgetCache => ({...widgetCache, type: e.target.value}))}
                    value={widgetCache.type} className="form-control">
              <option value={"PARAGRAPH"}>Paragraph</option>
              <option value={"HEADING"}>Heading</option>
              <option value={"LIST"}>List</option>
              <option value={"IMAGE"}>Image</option>
            </select>

            <input onChange={(e) => setWidgetCache(
                widgetCache => ({...widgetCache, text: e.target.value}))}
                   value={widgetCache.title}
                   className="form-control"/>

            <select onChange={(e) => setWidgetCache(
                widgetCache => ({
                  ...widgetCache,
                  size: parseInt(e.target.value)
                }))}
                    value={widgetCache.size} className="form-control">
              <option value={1}>Heading 1</option>
              <option value={2}>Heading 2</option>
              <option value={3}>Heading 3</option>
              <option value={4}>Heading 4</option>
              <option value={5}>Heading 5</option>
              <option value={6}>Heading 6</option>
            </select>

          </>
        }
        {
          !editing &&
          <>
            <i onClick={() => setEditing(true)} className="fas fa-cog"/>
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
            {widget.size === 5 && <h5>{widget.text}</h5>}
            {widget.size === 6 && <h6>{widget.text}</h6>}
          </>
        }
      </>
  )
}
export default HeadingWidget