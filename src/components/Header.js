import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";

export default function Header() {
  console.log("Header render"); // check is it re-render when state update e.g login/logout button

  const [btnName, setButton] = useState("Logout");

  useEffect(() => {
    console.log("useEffect Called");
  },[btnName]);

  // Other Method
  // function handleButton() {
  //   let isButton = btnName == "Logout" ? "Login" : "Logout";
  //   setButton(isButton);
  // }

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
