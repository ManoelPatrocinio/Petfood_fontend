import "./styler.css";
import {  useSelector } from "react-redux";

import ProductInCard from "../../components/products/card";
import Header from "../../components/header";
import Footer from "../../components/footer"

const Search = () => {

  const { products } = useSelector((state) => state.shop);


  const renderProducts =(
    <div className="col-10 containerProdutos">
     
      <div className="row">
        {products?.map((p,index) => (
          <ProductInCard product={p} key={index} />
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
          {products && renderProducts}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
