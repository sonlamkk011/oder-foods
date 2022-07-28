import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Login from "./Module/Auth/Login/Login";
import BreadDetails from "./Module/Home/Foods/BreadDetails/BreadDetails";
import RiceDetails from "./Module/Home/Foods/RiceDetails/RiceDetails";
import Home from "./Module/Home/Home";

const Public = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/rice-details" >
            <RiceDetails />
          </Route>
          <Route path="/bread-details" >
            <BreadDetails />
          </Route>
          <Route path="/user-login" exact>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Public;
