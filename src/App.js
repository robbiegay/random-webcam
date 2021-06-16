import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

var webcamUrl = "https://webcams.windy.com/webcams/stream/1485691420";
var webcamLocation = "Rhodes (Greece)";

function App() {
  return (
    <div className="App">
      <h1>Random Webcam</h1>

      <div className="row">
        <div className="col-2" />

        <div className="col-8">
          <iframe src={webcamUrl} title="Test Webcam" width="100%" height="784"></iframe>

          <div className="row">
            <div className="col-4">
              <p>
                <b>Location: {webcamLocation}</b>
              </p>
            </div>
            <div className="col-4" />
            <div className="col-4">
              <Button variant="primary" onClick={clicked}>New Webcam</Button>
            </div>
          </div>

        </div>

        <div className="col-2" />
      </div>
    </div>
  );
}

function clicked() {
  alert('New webcam requested...');
}

export default App;
