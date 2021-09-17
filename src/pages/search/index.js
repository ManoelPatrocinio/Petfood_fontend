import "./styler.css";
import {  useSelector } from "react-redux";

import ProductInCard from "../../components/products/card";
import Header from "../../components/header";
import Footer from "../../components/footer"
import {useHistory } from "react-router-dom";

const Search = () => {

  const { petshop, products } = useSelector((state) => state.shop);
  const history = useHistory(); // p/ redirecionar
    console.log("lista de petshop no search", petshop);
    console.log("lista de petshop no products", products);

  const requestPetshopProd = ()=>{
     history.push(`/petshop/${petshop._id}`);
  }

  const renderPetshop = (
      <div className="col-2 petshopDestaque">

        <div className="col-12 containerImg">
          <img
            src={petshop.logo}
            className="img-fluid petshop-image"
            alt="petshop"
            onClick={() => requestPetshopProd()}
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
  )

  const renderProducts =(
    <div className="col-10 containerProdutos">
     
      <div className="row">
        {products?.map((p) => (
          <ProductInCard product={p} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row containerPetInfo">
          <h5>Resultados da sua busca</h5>
          <br />

          {petshop && renderPetshop}
          {products && renderProducts}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
