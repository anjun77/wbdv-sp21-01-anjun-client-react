import React from 'react'
import {Link} from "react-router-dom";
import "./course-editor.css"

const CourseEditor = ({history}) =>
    <div>
      <nav
          className="navbar navbar-expand-md navbar-dark bg-info sticky-top">
            <div className="navbar-brand">
              <button className="btn-light btn"
                      onClick={() => history.goBack()}>
                <i className="fas fa-times"></i>
              </button>
                CS5610 - WebDev
            </div>

        <div className="collapse navbar-collapse " id="navbar-nav-dropdown">
          <ul className="nav nav-tabs nav-fill w-100">
            <li className="nav-item list-group-item-dark">
              <a className="nav-link" aria-current="page" href="#">Build</a>
            </li>
            <li className="nav-item list-group-item-dark">
              <a className="nav-link active" href="#">Pages</a>
            </li>
            <li className="nav-item list-group-item-dark">
              <a className="nav-link" href="#">Theme</a>
            </li>
            <li className="nav-item list-group-item-dark">
              <a className="nav-link" aria-current="page" href="#">Store</a>
            </li>
            <li className="nav-item list-group-item-dark">
              <a className="nav-link" aria-current="page" href="#">Apps</a>
            </li>
            <li className="nav-item list-group-item-dark">
              <a className="nav-link" aria-current="page" href="#">Settings</a>
            </li>
            <li className="nav-item list-group-item-dark">
              <a className="nav-link" aria-current="page" href="#"></a>
              <i className="fas fa-plus-square center"></i>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row">
        <div className="col-4">
          <ul className="list-group">
            <li className="list-group-item list-group-item-action ">
              Module 1 - jQuery
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item active list-group-item-action">
              Module 2 - React
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action">
              Module 3 - Redux
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action">
              Module 4 - Native
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action">
              Module 5 - Angular
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action">
              Module 6 - Node
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action">
              Module 7 - Mongo
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action">
              <i className="fas fa-plus-square float-right"></i>
            </li>
          </ul>
        </div>


        <div className="col-8">
          <ul className="nav nav-tabs nav-fill w-100">
            <li className="nav-item ">
              <a className="nav-link" aria-current="page" href="#">Topic 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Topic 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Topic 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Topic 4</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
              <i className="fas fa-plus-square center"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>

export default CourseEditor



