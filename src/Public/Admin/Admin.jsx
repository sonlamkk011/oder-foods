import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateFoods from "./CreateFoods/CreateFoods";
import Dasboard from "./Dasboard/Dasboard";
import HeaderAdmin from "./Shared/Header/HeaderAdmin";
import SidebarAdmin from "./Shared/Sidebar/SidebarAdmin";


const Admin = () => {
  return (
    <>
    {/* <HeaderAdmin /> */}
    <SidebarAdmin />
      <BrowserRouter>
        <Switch>
          
          <Route path="/admin-create-foods" exact>
            <CreateFoods />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Admin;
