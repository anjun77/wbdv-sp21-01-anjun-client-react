import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"
import "../../index.css"
import moduleActions from "../actions/module-actions";

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
  }, [])
  return (
      <div>
        <ul className="list-group">
          {
            myModules.map(module =>
                <li className={`list-group-item ${module._id === moduleId
                    ? 'active' : ''}`}
                key={module._id}>
                  <EditableItem
                      to={`/courses/${layout}/edit/${courseId}/${module._id}`}
                      updateItem={updateModule}
                      deleteItem={deleteModule}
                      active={true}
                      item={module}
                      type="module"/>
                </li>
            )
          }
          <li className="list-group-item">
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