import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar(props) {
console.log(props)

    return (
        <React.Fragment>
            

            <nav className="navbar navbar-expand-lg navbar-light bg-nav p-3 fixed-top shadow">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto text-center">
                
                <li className="nav-item mr-3 mt-1">
                  <Link to="/ocr" className="nav-links">
                      <button className="btn btn-info">Optical Character Recognition</button>
                    </Link>
                </li>
                <li className="nav-item mr-3 mt-1">
                  <Link to="/textAnalyzer" className="nav-links">
                      <button className="btn btn-info">Text Analyzer</button>
                    </Link>
                </li>
                <li className="nav-item mr-3 mt-1">
                  <Link to="/tts" className="nav-links">
                    <button className="btn btn-info">Text To Speech</button>
                  </Link>
                
                </li>
               
               
              </ul>

            </div>
          </nav>
            
        </React.Fragment>
    )
}

export default Navbar
