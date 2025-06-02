import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";

const StartRoutes = () => {
  return (
    <Switch>
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default StartRoutes;
