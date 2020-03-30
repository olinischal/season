import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader.js";

class App extends React.Component {
  //constructor is not mandatory; compiler will itself rectify while initializing state without constructor
  // constructor(props) {
  //   // calling constructor
  //   super(props); //super is a reference is a parent of the constructor function and is compulsory

  //   // this is only time to assign state object directly
  //   this.state = { lat: null, errorMessage: "" }; //initialize state object
  // }

  state = { lat: null, errorMessage: "" }; // initialize state

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), //setState to update value of state

      error => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />; // when you are sending the object from class to class you use state
    }

    return <Loader message="Please accept location request" />;
  }

  //render method normally use for returning JSX
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
