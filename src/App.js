import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }

  increase(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    var backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      borderRadius: 10,
      textAlign: "center"
    };
    var buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px"
    };
    return (
      <div style={backgroundStyle}>
        <Counter display={this.state.count} />
        <button onClick={this.increase} style={buttonStyle}>+
        </button>
      </div>
    );
  }
}

export default App;
