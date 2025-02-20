import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  const [activeForm, setActiveForm] = useState("signup");

  const renderForm = () => {
    if (activeForm === "signup") {
      return <Signup />;
    } else if (activeForm === "login") {
      return <Login />;
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center my-3">
        <button
          className={`btn ${activeForm === "signup" ? "btn-primary" : "btn-outline-primary"} me-2`}
          onClick={() => setActiveForm("signup")}
        >
          Signup
        </button>
        <button
          className={`btn ${activeForm === "login" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setActiveForm("login")}
        >
          Login
        </button>
      </div>
      {renderForm()}
    </div>
  );
};

export default App;
