import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  // useEffect(() => {
  //   // Api Calls
  // }, []);

  useEffect(() => {
    const timer = setInterval(() => console.log("tick"), 1000);

    return () => {
      // cleanup like componentWillUnmount
      clearInterval(timer);
    };
  }, []); // empty array = run only once (like componentDidMount)

  return (
    <div className="user-card">
      <h1>Count : {count} (function)</h1>
      <button onClick={() => setCount(count + 1)}>Count Increase</button>
      <h1>Count : {count2} ( function)</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshay</h4>
    </div>
  );
};

export default User;
