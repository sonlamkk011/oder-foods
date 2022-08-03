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
import TestApi from "./Public/Module/Home/Foods/TestApi/TestApi";

import { CartProvider } from "./Public/Module/Contexts/Cart";
import { useEffect, useState } from "react";
import ViewCart from "./Public/Module/Home/Drinks/ViewCart/ViewCart";
import { Login } from "./Public/Module/Auth/Login/Login";
import { Register } from "./Public/Module/Auth/Register/Register";
import { PageError } from "./Public/Module/Shared/ErrorPage/PageError";

function App() {
  const [cart, setCart] = useState([])

  const handleClick = (list) => {
    if (cart.indexOf(list) !== -1) return;
    setCart([...cart, list]);
  }

  const handleChange = (list, d) => {
    const ind = cart.indexOf(list);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);

  };
  // useEffect(() => {
  //   console.log("cartttttt");
  // },[cart]);
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route path="home" element={<Home />} />
            <Route path="rice-details" element={<RiceDetails />} />
            <Route path="view-cart" element={<ViewCart cart={cart} setCart={setCart} />} />
            <Route path="soft-drinks" element={<SoftDrinks handleClick={handleClick} />} />
            <Route path="coffee" element={<Coffee />} />
          </Route>
        </Routes>
      </CartProvider>

      <Routes>
        <Route path="/account-login" element={<Login />} />
        <Route path="/account-register" element={<Register />} />

      </Routes>


      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="admin-create-foods" element={<CreateFoods />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
