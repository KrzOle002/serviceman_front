import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotesPage from "../pages/NotesPage/NotesPage";
import AddOrderPage from "../pages/AddOrderPage/AddOrderPage";
import AccountSettings from "../pages/AccountSettings/AccountSettings";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
const Routes = () => {
  return (
    <Switch>
      <Route path="/account">
        <AccountSettings />
      </Route>
      <Route path="/orders">
        <OrdersPage />
      </Route>
      <Route path="/notes">
        <NotesPage />
      </Route>
      <Route path="/add">
        <AddOrderPage />
      </Route>
      <Route path="/panel">
        <AdminPanel />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
