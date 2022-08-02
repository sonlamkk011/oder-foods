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
import ViewCart from "./Public/Module/Home/ViewCart/ViewCart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (products) => {
    const exist = cartItems.find((x) => x.name === products.name);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.name === products.name ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }else{
      setCartItems([...cartItems, {...products, qty:1}]);
    }
  };
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route path="home" element={<Home />} />
            <Route path="rice-details" element={<RiceDetails onAdd={onAdd} />} />
            <Route path="view-cart" element={<ViewCart onAdd={onAdd} cartItems={cartItems} />} />
            <Route path="soft-drinks" element={<SoftDrinks />} />
            <Route path="coffee" element={<Coffee />} />
          </Route>
        </Routes>
      </CartProvider>
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="admin-create-foods" element={<CreateFoods />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
