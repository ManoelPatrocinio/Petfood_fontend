import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductInCard from "../../components/products/card";

// ********* IMAGENS *************** //
// slide img
import slide1 from "../../assets/slide1.svg";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";

// categoria img
import catDog from "../../assets/catDog.svg";
import catCat from "../../assets/catCat.svg";
import catFish from "../../assets/catFish.svg";
import catBirt from "../../assets/catbird.svg";
import catRept from "../../assets/catreptiles.svg";
import catRoedores from "../../assets/catroedor.svg";

// ************* DEPEDENCIAS *************//
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { requestPetshops } from "../../store/modules/shop/actions";

const Store = () => {
  // retorna a lista das petshops
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestPetshops());
  }, [dispatch]);
  const { petshops } = useSelector((state) => state.shop);
  const { products } = useSelector((state) => state.shop);
  
  // ******* fim ***********

  return (
    <div className="col-12">
      <Header />

      <section className="containerCategorias col-12">
        <div className="box_categoria_circle d-flex">
          <div className="categoria_item h-100 ">
            <img src={catDog} alt="" />
          </div>
          <div className="categoria_item h-100">
            <img src={catCat} alt="" />
          </div>
          <div className="categoria_item h-100">
            <img src={catBirt} alt="" />
          </div>
          <div className="categoria_item h-100">
            <img src={catFish} alt="" />
          </div>
          <div className="categoria_item h-100">
            <img src={catRoedores} alt="" />
          </div>
          <div className="categoria_item h-100">
            <img src={catRept} alt="" />
          </div>
        </div>
        <div className="categoryPhrase d-flex">
          <div className="LineSubTitle"></div>
          <p> Explore o Melhor</p>
          <div className="LineSubTitle"></div>
        </div>
      </section>
      {/*start caroulsel slide */}
      <div
        id="slideDestaques"
        className="carousel slide col-12"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#slideDestaques"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#slideDestaques"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#slideDestaques"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner h-100">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slideDestaques"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slideDestaques"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*end caroulsel slide */}

      {/* main Section Produtos em Destaque */}
      <section className="Section_container col-12">
        <header className="SectionTitleContent d-flex col-12">
          <div className="LineSubTitle"></div>
          <h3 className="SectionTitleText">Produtos Em Destaque</h3>
          <div className="LineSubTitle"></div>
        </header>

        <div className="Cards_content col-12 d-flex">
          {products
            .filter((p) => p.avaliacoes > 4.6)
            .map((p, index) => (
               <ProductInCard key={index} product={p} />

            ))}
        </div>
      </section>
      {/* End Section Marcas Bem avaliadas */}

      {/* main Section Marcas Bem avaliadas */}
      <section className="Section_container col-12">
        <header className="SectionTitleContent d-flex col-12">
          <div className="LineSubTitle"></div>
          <h3 className="SectionTitleText">Marcas Bem Avaliadas</h3>
          <div className="LineSubTitle"></div>
        </header>

        <div className="Cards_content col-12 d-flex">
          {petshops
            .filter((p) => p.avaliacao > 4)
            .map((p, index) => (
              <div className="PetshopCardLogo" key={index}>
                <img src={p.logo} alt="logo petshop" />
              </div>
            ))}
        </div>
      </section>
      {/* End Section Marcas Bem avaliadas */}

      <Footer />
    </div>
  );
};

export default Store;
