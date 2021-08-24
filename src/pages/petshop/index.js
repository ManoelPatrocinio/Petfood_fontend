import "./styler.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPetshop } from "../../store/modules/shop/actions";

import ProductInCard from "../../components/products/card";
import Header from "../../components/header";

const Petshop = ({ match }) => {
  const dispatch = useDispatch();
  const { petshop } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(requestPetshop(match.params.id));
  }, []);  

  return (
    <div className="h-100">
      <Header/>
      <div className="container">
        <div className="row containerPetInfo">

          <div className="col-2 petshopDestaque">
            <div className="col-12 containerImg">
              <img
                src={petshop.logo}
                className="img-fluid petshop-image"
                alt="petshop"
              />
            </div>

            <div className="petshop-infos">
              <b>{petshop.nome}</b>
              <div className="classificacao d-fle">
                  <span className="mdi mdi-star"></span>
                  <text>
                    <b>{petshop.destaque}</b>
                  </text>
                  <span className="mdi mdi-cash-usd-outline"></span>
                  <text>{petshop.categoria}</text>
                  <span className="mdi mdi-crosshairs-gps"></span>
                  <text>2,9Km</text>
                </div>    
              <label className="badge badge-primary">Frete Grátis</label>
            </div>
          </div>

          <div className="col-10 containerProdutos">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              {petshop.products?.map((p) => (
                <ProductInCard product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petshop;
