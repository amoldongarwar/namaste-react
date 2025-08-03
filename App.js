import React from "react";
import ReactDOM from "react-dom/client";

const Title1 = () => {
  return (
    <h1 className="title1" tabIndex="1">Title1</h1>
  )
}
const Title2 = () => {
  return (
    <h1 className="title2" tabIndex="1">Title2</h1>
  )
}
const Title3 = () => {
  return (
    <h1 className="title3" tabIndex="1">Title3</h1>
  )
}
const Title = 
   (
    <h1 className="title1" tabIndex="1">Title1</h1>
  )

function TitleFn(){
  return (
    <h1>TitleFn</h1>
  )
}


// React functional Component
const HeadingComponent = () => (
  <div id="container">
    {Title1}
    {Title2()}
    <Title3/>
    <h1>Namaste React using functional Component 🚀</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
