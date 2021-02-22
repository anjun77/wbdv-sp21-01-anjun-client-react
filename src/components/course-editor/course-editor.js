import React from 'react'
import {Link} from "react-router-dom";
import "./course-editor.css"

const CourseEditor = ({history}) =>
    <div className="container">
      <h2>CS5610 - WebDev</h2>
      <div className="row">
        <div className="col-sm-4">
          <ul className="list-group">
            <li className="list-group-item list-group-item-action list-group-item-dark color-teal">
              Module 1 - jQuery
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark color-teal">
              Module 2 - React
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark color-teal">
              Module 3 - Redux
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark color-teal">
              Module 4 - Native
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark color-teal">
              Module 5 - Angular
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark color-teal">
              Module 6 - Node
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark color-teal">
              Module 7 - Mongo
              <i className="fas fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark color-teal">
              <i className="fas fa-plus-square float-right"></i>
            </li>
          </ul>
        </div>
        <div className="col-sm-8">
          <ul-tab className="nav nav-tabs nav-fill">
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
          </ul-tab>

          <ul-pill className="nav nav-pills">
            <li className="nav-item list-group-item-dark">
              <a className="nav-link" aria-current="page" href="#">Topic 1</a>
            </li>
            <li className="nav-item list-group-item-dark">
              <a className="nav-link active" href="#">Topic 2</a>
            </li>
            <li className="nav-item list-group-item-dark">
              <a className="nav-link" href="#">Topic 3</a>
            </li>
            <li className="nav-item list-group-item-dark">
              <a className="nav-link" href="#">Topic 4</a>
            </li>
            <li className="nav-item list-group-item-dark">
              <a className="nav-link" href="#"></a>
              <i className="fas fa-plus-square center"></i>
            </li>
          </ul-pill>
        </div>
      </div>
    </div>

export default CourseEditor

