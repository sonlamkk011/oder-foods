import RiceDetails from "./Module/Foods/RiceDetails/RiceDetails";
import Header from "./Module/Shared/Header/Header";
import Navbar from "./Module/Shared/Navbar/Navbar";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import BreadDetails from "./Module/Foods/BreadDetails/BreadDetails";
import NoodlesDetails from "./Module/Foods/NoodlesDetails/NoodlesDetails";
import Coffee from "./Module/Drinks/Coffee/Coffee";
import SoftDrinks from "./Module/Drinks/SoftDrinks/SoftDrinks";
import Home from "./Module/Home/Home";

const Public = () => {
  return (
    <>
      <div id="public">
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/rice-details" exact>
                <RiceDetails />
              </Route>
              <Route path="/bread-details" exact>
                <BreadDetails />
              </Route>
              <Route path="/noodles-details" exact>
                <NoodlesDetails />
              </Route>
              <Route path="/soft-drinks" exact>
                <SoftDrinks />
              </Route>

              <Route path="/coffee" exact>
                <Coffee />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};
export default Public;
