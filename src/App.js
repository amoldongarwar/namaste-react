import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
// import About from "./components/About.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error.js";
import RestaurentsMenu from "./components/RestaurentsMenu.js";
// import Grocery from "./components/Grocery.js"; instead of static we use dynamic/lazy oading

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading

const Grocery = lazy(() => import("./components/Grocery.js")); //Lazy loading on demand loading

const About = lazy(() => import("./components/About.js")); //Lazy loading on demand loading


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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      // fallback is used for loading
      {
        path: "/restaurants/:resId",
        element: <RestaurentsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
