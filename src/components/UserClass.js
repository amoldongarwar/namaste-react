import React from "react";

class UserClass extends React.Component {
  // Never compare React lifecycle method with functional component

  constructor(props) {
    super(props); // must call super(props) to use this.props
    console.log(props); // props are available here

    this.state = {
      // big object will contains all state variable
      // not touch all value only touch what going to change
      count: 0,
      count2: 1,

      userInfo: {
        // we can pass below data
        // name: "Dummy",
        // location: "Default",
      },
    };

    console.log(this.props.name + "Constructor called first then render()");
    console.log("Child constructor");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");

    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);

    // Api calls this method
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    console.log("data", data);

    const json = await data.json();
    console.log("json", json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update"); // called after every update
  }

  componentWillUnmount() {
    // Removing from UI
    clearInterval(this.timer);
    console.log("Component Did Unmount");
  }

  render() {
    // const {name, location} = this.props; // destructuring
    // const {count, count2} = this.state; // destructuring

    const { name, location, avatar_url } = this.state.userInfo;

    console.log("Render called after Constructor");
    console.log("Child render");

    return (
      <div className="user-card">
        <h1>Count : {this.state.count} (class)</h1>
        <h1>Count2 : {this.state.count2} (class)</h1>

        <button
          onClick={() => {
            // Never Update state variables directly
            // this.state.count = this.state.count + 1; don't use this
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>

        {/* <h2>Name: {this.props.name}</h2> */}
        {/* <h2>Name: {name}</h2> */}
        {/* <h3>Location: {this.props.location}</h3> */}
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshay</h4>
      </div>
    );
  }
}

export default UserClass;
