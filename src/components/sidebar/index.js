import "./styler.css";
import Dock from "react-dock";
import { useState, useEffect } from "react";
import ProductInList from "../products/list";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

const Sidebar = () => {
  let dockSize = 0.35;
  var windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (windowWidth < 600) {
    dockSize = 0.75;
  }
  const history = useHistory();
  const { cart } = useSelector((state) => state.shop);

  const total = cart.reduce((total, product) => {
    //percorre cada item do carrinho para somar o total
    return (total += product.preco);
  }, 0);

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    //   escuto o evendo disparado no Header, para exibir o sidebar Sacola
    window.addEventListener("openCart", () => {
      setOpened(true);
    });
  }, []);

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
      position="right"
      size={dockSize}
    >
      <div className="container-fluid pt-3 sidebar">
        <h5>Minha Sacola ({cart.length})</h5>
        <div className="row products ">
          {cart.map((p,index) => (
            <ProductInList product={p} key={index}/>
          ))}
        </div>
        <div className="row align-items-end footer">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">R$ {total.toFixed(2)}</h3>
          </div>
          <button
            onClick={() => {
              isAuthenticated
                ? history.push("/checkout")
                : history.push("/cadastro");
            }}
            className="btn btn-lg btn-primary rounded-0 "
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </Dock>
  );
};

export default Sidebar;
