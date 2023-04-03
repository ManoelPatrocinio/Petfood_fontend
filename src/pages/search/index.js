import { useSelector } from "react-redux";
import "./styler.css";

import { Footer, Header, Loading, ProductInCard } from "../../components";


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
    <div className="h-auto">
      <Header />
      <div className="container">
        <div className="row w-100">
          <h5>Resultados da sua busca</h5>
          <br />
          {products && renderProducts}
          {products.length <= 0 && (<Loading/>)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
