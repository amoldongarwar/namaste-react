import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // must call super(props) to use this.props
    console.log(props); // props are available here

    this.state = {
      // big object will contains all state variable
      // not touch all value only touch what going to change
      count: 0,
      count2: 1,
    };

    console.log(this.props.name + "Constructor called first then render()");
    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
    // Api calls this method
  }

  render() {
    // const {name, location} = this.props; // destructuring
    // const {count, count2} = this.state; // destructuring

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

        <h2>Name: {this.props.name}</h2>
        {/* <h2>Name: {name}</h2> */}
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: @akshay</h4>
      </div>
    );
  }
}

export default UserClass;
