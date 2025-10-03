import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Header() {
  console.log("Header render"); // check is it re-render when state update e.g login/logout button

  const [btnName, setButton] = useState("Logout");

  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);

  // Other Method
  // function handleButton() {
  //   let isButton = btnName == "Logout" ? "Login" : "Logout";
  //   setButton(isButton);
  // }

  // utility function
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
              Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          {/* <button className="login" onClick={handleButton}>
            {btnName}
          </button> */}

          <button
            className="login"
            onClick={() =>
              btnName == "logout" ? setButton("login") : setButton("logout")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}
