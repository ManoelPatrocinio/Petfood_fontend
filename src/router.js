import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/global.css";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Sidebar from "./components/sidebar";
import Checkout from "./pages/checkout";
import Petshop from "./pages/petshop";
import Home from "./pages/home";
import Store from "./pages/store";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/store" exact component={Store} />
        <Route path="/petshop/:id" exact component={Petshop} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/login" exact component={Login} />
        <Sidebar />
      </Router>
    </>
  );
};

export default Routes;
