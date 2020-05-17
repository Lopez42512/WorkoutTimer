import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      minute: 0,
      seconds:0
    };
  }

  countdown = () => {
    //   function hello() {
    //     this.setState({timer: this.state.timer - 1})
    //   }
    // //   const time = 
    //   setInterval(this.setState({timer: this.state.timer - 1}), 1000)
    this.MyInterval = setInterval(() => {
        const {minute, seconds} = this.state
        if(minute === 0 && seconds === 0){
            clearInterval(this.MyInterval)
        }
        else if(seconds === 0){
            this.setState({seconds: 59, minute: minute -1})
        }
        else if(seconds > 0){
            this.setState({seconds: seconds - 1})
        }
        
    }, 1000)
  }
  setTimer = event => {
    const {name, value} = event.target
    console.log(name, value)
    this.setState({[name]: value})
  }
  render() {
      const {minute, seconds} = this.state
    return (
      <div>
        <h1>Time remaining: {minute}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        <input name="minute" onChange={this.setTimer}></input>
        <input name="seconds" onChange={this.setTimer}></input>
        <button onClick={this.countdown}>Start</button>
      </div>
    );
  }
}

export default App;
