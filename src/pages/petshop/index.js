import "./styler.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPetshop } from "../../store/modules/shop/actions";

import ProductInCard from "../../components/products/card";
import Header from "../../components/header";

const Petshop = ({ match }) => {
  const dispatch = useDispatch();
  const [filtedList, setFiltedList] = useState();
  const { petshop } = useSelector((state) => state.shop);
  var arrayFilted = petshop

  useEffect(() => {
    dispatch(requestPetshop(match.params.id));
  }, []);

  
  const FilterByMark = (markSelected) => {
    const newList = petshop.products?.filter((produto) =>
      produto.marca.toLowerCase().includes(markSelected.toLowerCase())
    );
    setFiltedList(newList);
  };

  const FilterByLowestPrice = (value) => {
    if (value === "menorPreco") {
      arrayFilted.products?.sort((a,b) =>a.preco - b.preco );
    console.log("arrayFilted", arrayFilted);

    } else {
      console.log(" não foi", value);
    }
  };

  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row containerPetInfo">
          <div className="col-2 pet_info_filters">
            <div className="Petshop_Information">
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
                  <span>
                    <b>{petshop.destaque}</b>
                  </span>
                  <span className="mdi mdi-cash-usd-outline"></span>
                  <span>{petshop.categoria}</span>
                  <span className="mdi mdi-crosshairs-gps"></span>
                  <span>2,9Km</span>
                </div>
                <label className="badge badge-primary">Frete Grátis</label>
              </div>
            </div>

            <div className="Filter_Container d-flex">
              <h3 className="Content_title">Filtrar Por:</h3>

              <div className="filter_Content d-flex" id="marca_filter_content">
                <h4 className="Content_title">Marca:</h4>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="PEDIGREE"
                    onClick={() => FilterByMark("")}
                  />
                  <label className="form-check-label" htmlFor="PEDIGREE">
                    Todos
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="PEDIGREE"
                    onClick={() => FilterByMark("PEDIGREE®")}
                  />
                  <label className="form-check-label" htmlFor="PEDIGREE">
                    Pedrigree
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="Royal Canin"
                    onClick={() => FilterByMark("Royal")}
                  />
                  <label className="form-check-label" htmlFor="Royal Canin">
                    Royal Canin
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value="Monello "
                    id="Monello "
                    onClick={() => FilterByMark("Monello")}
                  />
                  <label className="form-check-label" htmlFor="Monello ">
                    Monello
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value="PremieR "
                    id="PremieR "
                    onClick={() => FilterByMark("PremieR")}
                  />
                  <label className="form-check-label" htmlFor="PremieR ">
                    PremieR
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value="Golden "
                    id="Golden "
                    onClick={() => FilterByMark("PremieR")}
                  />
                  <label className="form-check-label" htmlFor="Golden ">
                    Golden
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value="Dog Chow "
                    id="Dog Chow "
                    onClick={() => FilterByMark("Dog")}
                  />
                  <label className="form-check-label" htmlFor="Dog Chow ">
                    Dog Chow
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value="Pro Plan"
                    id="Pro Plan "
                    onClick={() => FilterByMark("Pro Plan")}
                  />
                  <label className="form-check-label" htmlFor="Pro Plan">
                    Pro Plan
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value="WHISKAS"
                    id="WHISKAS "
                    onClick={() => FilterByMark("WHISKAS")}
                  />
                  <label className="form-check-label" htmlFor="WHISKAS">
                    WHISKAS
                  </label>
                </div>
              </div>

              <div className="filter_Content d-flex">
                <h4 className="Content_title">Pet:</h4>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value=""
                    id="PetLove"
                  />
                  <label className="form-check-label" htmlFor="PetLove">
                    Cães
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Gatos
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-10 containerProdutos">
            <header className="col-12 d-flex">
              <h1>Produtos</h1>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => FilterByLowestPrice(e.target.value)}
              >
                <option>Ordernar por:</option>
                <option value="menorPreco">Menor Preço</option>
                <option value="maiorPreco">Maior Preço</option>
                <option value="az">Nome (a-z)</option>
                <option value="za">Nome (z-a)</option>
              </select>

              <button className="btn btn_filter">
                <i className="fas fa-filter"></i>
              </button>
            </header>
            <div className="row col-12 justify-content-around">
              {filtedList
                ? filtedList.map((p, index) => (
                    <ProductInCard product={p} key={index} />
                  ))
                : petshop.products?.map((p, index) => (
                    <ProductInCard product={p} key={index} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petshop;
