import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement = object = HTMLElement(render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React🚀"
// );
// console.log(heading); // object

// JSX is not html inside javascript
// JSX - is html like or XML like syntax in Javascript
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
// Babel is a JavaScript compiler that converts modern JS
// (ES6+, JSX, TypeScript) into older JS (ES5) for browser compatibility.
// Used with bundlers (Parcel, Webpack, Vite) to make code production-ready.

// React Element
const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="1`">
    Namaste React using JSX 🚀
  </h1>
); // single line
const jsxHeading1 = (
  <h1 id="heading" className="head" tabIndex="1">
    Namaste React 🚀
  </h1>
); // Multi-line: Wrap in parentheses for readability

// React Functional Component
// without return keyword
const HeadingComponent = () => <h1>Namaste React using functional Component 🚀</h1>
const HeadingComponent1 = () => (
  <div id="container">
    <h1 className="heading">Namaste React using functional Component 🚀</h1>
  </div>
)
// return keyword
const HeadingComponent2 = () => {
  return <h1>Namaste React using functional Component 🚀</h1>;
};

console.log(jsxHeading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); // replacing
root.render(<HeadingComponent1/>);
