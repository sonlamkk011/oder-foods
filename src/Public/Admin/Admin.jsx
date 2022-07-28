import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateFoods from "./CreateFoods/CreateFoods";
import Dasboard from "./Dasboard/Dasboard";

const Admin = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" exact>
            <CreateFoods />
          </Route>
          <Route path="/create-food" exact>
            <CreateFoods />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Admin;
