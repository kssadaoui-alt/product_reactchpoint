import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // 🔹 State initial
    this.state = {
      Person: {
        fullName: "Lionel Messi",
        bio: "Professional football player",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
        profession: "Footballer",
      },
      shows: false,
      timeInterval: 0,
    };
  }

  // 🔹 Lifecycle: component mounted
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  // 🔹 Lifecycle: component unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // 🔹 Toggle show state
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { Person, shows, timeInterval } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        <p>⏱ Time since component mounted: {timeInterval} seconds</p>

        {shows && (
          <div>
            <h2>{Person.fullName}</h2>
            <img
              src={Person.imgSrc}
              alt="profile"
              width="200"
              style={{ borderRadius: "10px" }}
            />
            <p><strong>Bio:</strong> {Person.bio}</p>
            <p><strong>Profession:</strong> {Person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
