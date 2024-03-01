import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";

function App() {
  const [home, setHome] = useState(false);

  function logIn() {
    setHome(true);
  }

  function logOut() {
    setHome(false);
  }

  return <>{home ? <Home logOut={logOut} /> : <Login logIn={logIn} />}</>;
}

export default App;
