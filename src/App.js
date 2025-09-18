import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error.js";
import RestaurentsMenu from "./components/RestaurentsMenu.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurentsMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
