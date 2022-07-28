import logo from "./logo.svg";
import "./App.css";

import Admin from "./Public/Admin/Admin";
import Public from "./Public/Public";
import Home from "./Public/Module/Home/Home";

function App() {
  return (
    <>
      <Public />
      <Admin />
    </>
  );
}

export default App;
