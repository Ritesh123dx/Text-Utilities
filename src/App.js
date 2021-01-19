import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import OCR from './OCR';
import TTS from './TTS';
import TextAnalyzer from './TextAnalyzer';


function App(props) {
  console.log(props)

  return (
    <>
      <React.Fragment>
        <Router>
          <Navbar />


          <div className="container border shadow pb-5" style={{ marginTop : '120px'}}>
            <div className="row">
              {/* <div className="col-3" style={{ paddingLeft: '0px' }}>
                <Navbar />
              </div> */}
              <div className="col-12">

                <Switch>
                  <Route path="/ocr" exact component={OCR} />
                  <Route path="/tts" component={TTS} />
                  <Route path="/textAnalyzer" component={TextAnalyzer} />
                  <Route path="/" component={OCR} />
                </Switch>
              </div>
            </div>
          </div>


        </Router>
      </React.Fragment>
    </>
  );
}



export default App;
