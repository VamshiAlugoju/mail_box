import { Theme, ThemePanel } from "@radix-ui/themes";
import Routes from "./pages/Routes";
import "./App.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    token === null ? false : true
  );
  return (
    <Theme>
      <Routes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ThemePanel />
      <ToastContainer />
    </Theme>
  );
}

export default App;
