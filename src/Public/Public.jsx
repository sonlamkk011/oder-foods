import { Route, Routes } from "react-router-dom";
import Coffee from "./Module/Home/Drinks/Coffee/Coffee";
import SoftDrinks from "./Module/Home/Drinks/SoftDrinks/SoftDrinks";
import BreadDetails from "./Module/Home/Foods/BreadDetails/BreadDetails";
import NoodlesDetails from "./Module/Home/Foods/NoodlesDetails/NoodlesDetails";
import RiceDetails from "./Module/Home/Foods/RiceDetails/RiceDetails";
import Home from "./Module/Home/Home";
import Header from "./Module/Shared/Header/Header";
import Navbar from "./Module/Shared/Navbar/Navbar";






const Public = () => {
  return (
    <>
    <Header />
    <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rice-details" element={<RiceDetails />} />
      <Route path="/bread-details" element={<BreadDetails />} />
      <Route path="/noodles-details" element={<NoodlesDetails />} />
      <Route path="/soft-drinks" element={<SoftDrinks />} />
      <Route path="/coffee" element={<Coffee />} />

      
     </Routes>
    </>
  );
};
export default Public;
