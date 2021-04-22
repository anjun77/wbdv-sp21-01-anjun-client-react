import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../index.css"

const EditableItem = (
    {
      to,
      deleteItem,
      updateItem,
      item,
      active,
      type
    }) => {
  const [editing, setEditing] = useState(false)
  const [cachedItem, setCachedItem] = useState(item)
  return (
      <div
          className={`${type === 'module' ? 'list-group-item'
              : ''}
        ${type === 'lesson' ? 'nav-item h4' : ''}
         ${type === 'topic' ? 'nav-item' : ''} 
         ${active ? 'active' : ''}
         ${active && type === 'topic' ? 'select-active' : ''} 
         ${editing ? 'select-active' : ''}
        `
          }>
        {
          !editing &&
          <>
            <div
                className={`${active && type === 'topic' ? 'select-active' : ''} 
                    nav-link ${active ? 'active' : ''} mx-2`}>
              <Link to={to}>
                {item.title}
              </Link>
              <span><i onClick={() => {
                setEditing(true)
              }} className="fas fa-edit my-fa-edit"></i></span>
            </div>
          </>
        }

        {
          editing &&
          <>
            <div className={`select-active`}>
              <input
                  onChange={(e) =>
                      setCachedItem({
                        ...cachedItem,
                        title: e.target.value
                      })}
                  value={cachedItem.title}/>
              <i onClick={() => {
                setEditing(false)
                updateItem(cachedItem)
              }} className="fas fa-check my-fa-check"></i>
              <i onClick={() => deleteItem(item)}
                 className="fas fa-times my-fa-times"></i>
            </div>
          </>
        }
      </div>
  )
}

export default EditableItem
