import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from "./components/Alert";

function App() {

  // Check Whether the dark mode is enabled or not
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
  };


  return (
    <>
      {/* If you are not give any props and you set defualt props in Navbar.js file it will take default value */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />

      {/* For default props */}
      {/* <Navbar /> */}

      <Alert alert={alert} />

      <TextForm showAlert={showAlert} heading="Address" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
