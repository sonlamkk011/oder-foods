import RiceDetails from "./Module/Foods/RiceDetails/RiceDetails";
import Header from "./Module/Shared/Header/Header";
import Navbar from "./Module/Shared/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BreadDetails from "./Module/Foods/BreadDetails/BreadDetails";
import NoodlesDetails from "./Module/Foods/NoodlesDetails/NoodlesDetails";
import Coffee from "./Module/Drinks/Coffee/Coffee";

const Public = () => {
  return (
    <>
      <div id="public">
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route path="/rice-details" exact>
                <RiceDetails />
              </Route>
              <Route path="/bread-details" exact>
                <BreadDetails />
              </Route>
              <Route path="/noodles-details" exact>
                <NoodlesDetails />
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
