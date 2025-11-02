import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-yellow-400 shadow-lg sm:bg-slate-400 lg:bg-pink-100">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">
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

          <li className="px-4 font-bold">
            {loggedInUser}
          </li>
          
        </ul>
      </div>
    </div>
  );
}
