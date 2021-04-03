import React, {useState} from 'react'

const ImageWidget = ({widget, updateWidget, deleteWidget}) => {
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

            Image URL
            <input onChange={(e) => setWidgetCache(
                widgetCache => ({...widgetCache, src: e.target.value}))}
                   value={widgetCache.src}
                   className="form-control"/>
            Image width
            <input onChange={(e) => setWidgetCache(
                widgetCache => ({...widgetCache, width: e.target.value}))}
                   value={widgetCache.width}
                   className="form-control"/>
            Image height
            <input onChange={(e) => setWidgetCache(
                widgetCache => ({...widgetCache, height: e.target.value}))}
                   value={widgetCache.height}
                   className="form-control"/>
          </>
        }
        {
          !editing &&
              <>
                <i onClick={() => setEditing(true)}
                   className="fas fa-cog float-right"></i>
                <img width={widgetCache.width}
                     height={widgetCache.height}
                     src={widgetCache.src}/>
              </>
        }
      </>
  )
}

export default ImageWidget