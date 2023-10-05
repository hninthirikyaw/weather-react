import React from "react";
import "./index.css";
import Form from "./Components/Form";

import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="m-5">
      <div className="border rounded p-3 w-75">
        <h1>Weather App</h1>
        <Navbar />
        <Form />
        
      </div>
      <p>
        <a href="#">open-source code</a> by Hnin Thiri Kyaw
      </p>
    </div>
  );
};

export default App;
