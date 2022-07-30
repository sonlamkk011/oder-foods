import logo from "./logo.svg";
import "./App.css";

import Admin from "./Public/Admin/Admin";
import Public from "./Public/Public";
import Home from "./Public/Module/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RiceDetails from "./Public/Module/Home/Foods/RiceDetails/RiceDetails";
import BreadDetails from "./Public/Module/Home/Foods/BreadDetails/BreadDetails";
import NoodlesDetails from "./Public/Module/Home/Foods/NoodlesDetails/NoodlesDetails";
import SoftDrinks from "./Public/Module/Home/Drinks/SoftDrinks/SoftDrinks";
import Coffee from "./Public/Module/Home/Drinks/Coffee/Coffee";
import CreateFoods from "./Public/Admin/CreateFoods/CreateFoods";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="home" element={<Home />} />
          <Route path="rice-details" element={<RiceDetails />} />
          <Route path="bread-details" element={<BreadDetails />} />
          <Route path="noodles-details" element={<NoodlesDetails />} />
          <Route path="soft-drinks" element={<SoftDrinks />} />
          <Route path="coffee" element={<Coffee />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="admin-create-foods" element={<CreateFoods />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
