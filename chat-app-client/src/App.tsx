import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Login from "./pages/Login";
import Home from './pages/Home';

import "./App.css";
import { useState } from "react";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(
    localStorage.getItem("jwt") ? true : false
  );

  return (
    <>
      {isUserLogged ? <Home setIsUserLogged={setIsUserLogged} /> : <Login setIsUserLogged={setIsUserLogged} />}
    </>);
}

export default App;
