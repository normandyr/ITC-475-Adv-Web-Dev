import React from "react";

class Timereact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let hours = this.state.date.getHours();
    let suffix = hours >= 12 ? "PM":"AM";
    hours = ((hours + 11) % 12 + 1);
    const min = this.state.date.getMinutes();
    const sec = this.state.date.getSeconds();
    return (
        <div>
            <span>Current Time:</span>
            <span>{hours + ":" + min + ":" + sec + suffix}</span>
        </div>
    );
  }
}

export default Timereact;