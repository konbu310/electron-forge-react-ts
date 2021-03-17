import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App: FC = () => {
  return (
    <div>
      <h1>Hello, from React!</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
