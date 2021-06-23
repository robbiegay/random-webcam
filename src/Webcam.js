import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Webcam extends Component {
  constructor() {
    super();
    this.state = {
        webcamUrl: "",
        webcamTitle: ""
    };
  }

  componentDidMount() {
    var webcamBaseUrl = "https://webcams.windy.com/webcams/stream/";

    fetch("https://random-webcam-api.herokuapp.com/randomWebcam")
      .then(response => response.text())
      .then(data => {
        var webcamArray = data.split(",");

        this.setState({
            webcamUrl: webcamBaseUrl + webcamArray[0].toString(10),
            webcamTitle: webcamArray[1]
        });
      });
  }

  render() {
    return (
      <div>
        <iframe src={this.state.webcamUrl} title="Random Webcam" width="100%" height="750vh"></iframe>
        <p>
          <b>Location: {this.state.webcamTitle}</b>
        </p>

      </div>
    );
  }
}

export default Webcam;
