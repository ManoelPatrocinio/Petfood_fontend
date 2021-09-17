import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./styles/global.css";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Sidebar from "./components/sidebar";
import MenuSidebar from "./components/menu_sidebar";
import Checkout from "./pages/checkout";
import Petshop from "./pages/petshop";
import Home from "./pages/home";
import Store from "./pages/store";
import Search from "./pages/search";

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
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/store" exact component={Store} />
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
