import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./styles/global.css";

import {Cadastro,Login, Checkout, Petshop, MapView, Store, Search} from "./pages";
import { Sidebar, MenuSidebar } from "./components";
import useGaTracker from "./useGaTracker";
import { isAuthenticated } from "./services/auth";

// define as rotas que só serão exibidas se o user estiver auth
//state:para não perder o historico de rotas do user

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => {
  useGaTracker();
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Store} />
        </Switch>
        <Switch>
          <Route path="/map" exact component={MapView} />
        </Switch>
        <Switch>
          <Route path="/petshop/:id" exact component={Petshop} />
        </Switch>
        <Switch>
          <PrivateRoute path="/checkout" exact component={Checkout} />
        </Switch>
        <Switch>
          <Route path="/cadastro" exact component={Cadastro} />
        </Switch>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
        <Switch>
          <Route path="/search" exact component={Search} />
        </Switch>
        <Sidebar />
        <MenuSidebar />
      </Router>
    </>
  );
};

export default Routes;
