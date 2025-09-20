import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// import { Component } from "react"; or destructure way of React

class About extends React.Component {

  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount(){
    console.log("Parent Component Did Mount");
    // Api calls this method
  }

  render() {
    console.log("Parent Render");
    
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <User name={"Akshay Shaini (function)"} />
        <UserClass
          name={"Akshay Shaini (classComponent)"}
          location={"Dehradun (class)"}
        />
        <UserClass
          name={"Elon Musk (classComponent)"}
          location={"US (class)"}
        />
      </div>
    );
  }
}

export default About;

// export default function About(){
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <User name={"Akshay Shaini (function)"}/>
//             <UserClass name={"Akshay Shaini (classComponent)"} location={"Dehradun (class)"}/>
//         </div>
//     )
// }
