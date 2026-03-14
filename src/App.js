import React, { lazy, Suspense, use, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
// import About from "./components/About.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error.js";
import RestaurentsMenu from "./components/RestaurentsMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
// import Grocery from "./components/Grocery.js"; instead of static we use dynamic/lazy oading

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading

const Grocery = lazy(() => import("./components/Grocery.js")); //Lazy loading on demand loading

const About = lazy(() => import("./components/About.js")); //Lazy loading on demand loading

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication logic can be added here
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Elon Musk", // static data but it can be dynamic from api
    };
    setUserName(data.name);
  }, []);

  return (
    // Redux store provider
    <Provider store={appStore}>
    {/* provide and pass the userName to entire app using context provider */}
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
