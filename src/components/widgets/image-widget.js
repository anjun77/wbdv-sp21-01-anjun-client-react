import React, {useState} from 'react'

const ImageWidget = ({widget, setEditingWidget, editing}) =>
    <div>
      {
        editing &&
        <>
          Image URL
          <input onChange={(e) => setEditingWidget(
              {...widget, src: e.target.value})}
                 value={widget.src}
                 className="form-control"/>
          Image width
          <input onChange={(e) => setEditingWidget(
              {...widget, width: e.target.value})}
                 value={widget.width}
                 className="form-control"/>
          Image height
          <input onChange={(e) => setEditingWidget(
              {...widget, height: e.target.value})}
                 value={widget.height}
                 className="form-control"/>
        </>
      }
      {
        !editing &&
        <img width={widget.width}
             height={widget.height}
             src={widget.src}/>
      }
    </div>

export default ImageWidget