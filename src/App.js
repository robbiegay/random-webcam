import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Webcam from "./Webcam"

function App() {
  return (
    <div className="App">
      <h1>Random Webcam</h1>

      <div className="row">
        <div className="col-lg-2 col-md-1 col-sm-0" />

        <div className="col-lg-8 col-md-10 col-sm-12">

          <p className="text-muted">
            <i>
              Note: Webcam links are occasionally broken. If a webcam does not
              load after a few seconds, please reload the page to get a new random webcam.
            </i>
          </p>

          <Webcam />

        </div>

        <div className="col-lg-2 col-md-1 col-sm-0" />
      </div>
    </div>
  );
}

export default App;
