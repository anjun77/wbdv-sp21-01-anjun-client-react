import React, {useEffect, useState} from 'react'
import {connect, Provider} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import "../../index.css"
import moduleActions from "../../actions/module-actions";

const ModuleList = (
    {
      myModules = [],
      createModule,
      deleteModule,
      updateModule,
      findModulesForCourse
    }) => {
  const {layout, courseId, moduleId} = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
  }, [moduleId])
  return (
      <div>
        <ul className="list-group">
          {
            myModules.map(module =>
                <EditableItem
                    key = {module._id}
                    to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                    deleteItem={deleteModule}
                    updateItem={updateModule}
                    active={module._id === moduleId}
                    type = {'module'}
                    item={module}/>
            )
          }
          <li className="list-group-item my-list-group-item">
            <i onClick={() => createModule(courseId)}
               className="fas fa-plus fa-2x d-flex justify-content-center my-fa-plus"></i>
          </li>
        </ul>
      </div>)
}

const stpm = (state) => {
  return {
    myModules: state.moduleReducer.modules
  }
}
const dtpm = (dispatch) => ({
  createModule: (courseId) => moduleActions.createModule(dispatch, courseId),
  updateModule: (newItem) => moduleActions.updateModule(dispatch, newItem),
  deleteModule: (moduleToDelete) => moduleActions.deleteModule(dispatch,
      moduleToDelete),
  findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(
      dispatch, courseId)
})

export default connect(stpm, dtpm)
(ModuleList)