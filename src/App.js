import logo from "./logo.svg";
import "./App.css";

import Admin from "./Public/Admin/Admin";
import Public from "./Public/Public";
import Home from "./Public/Module/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
