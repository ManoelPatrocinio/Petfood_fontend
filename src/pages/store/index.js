import { Footer, Header, Loading, ProductInCard } from "../../components";

import "./style.css";

// ************* DEPEDENCIAS *************//
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import {
  requestPetshops,
  requestProducts,
} from "../../store/modules/shop/actions";

const Store = () => {
  // retorna a lista das petshops
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestPetshops());
    dispatch(requestProducts());
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
            <img src="https://raw.githubusercontent.com/ManoelPatrocinio/Assets/cffb28767946674ad15450b48029089de90902a7/petfood/catDog.svg" alt="categoria cachorros " />
          </div>
          <div className="categoria_item h-100">
            <img src="https://raw.githubusercontent.com/ManoelPatrocinio/Assets/cffb28767946674ad15450b48029089de90902a7/petfood/catCat.svg" alt="categoria gatos" />
          </div>
          <div className="categoria_item h-100">
            <img src="https://raw.githubusercontent.com/ManoelPatrocinio/Assets/cffb28767946674ad15450b48029089de90902a7/petfood/catbird.svg" alt="categoria passaros" />
          </div>
          <div className="categoria_item h-100">
            <img src="https://raw.githubusercontent.com/ManoelPatrocinio/Assets/cffb28767946674ad15450b48029089de90902a7/petfood/catFish.svg" alt="categoria peixes" />
          </div>
          <div className="categoria_item h-100">
            <img src="https://raw.githubusercontent.com/ManoelPatrocinio/Assets/cffb28767946674ad15450b48029089de90902a7/petfood/catroedor.svg" alt="categoria roedores" />
          </div>
          <div className="categoria_item h-100">
            <img src="https://raw.githubusercontent.com/ManoelPatrocinio/Assets/cffb28767946674ad15450b48029089de90902a7/petfood/catreptiles.svg" alt="categoria repties" />
          </div>
        </div>
        <div className="categoryPhrase d-flex">
          <div className="LineSubTitle" style={{ width: "20%" }}></div>
          <p> Explore o Melhor</p>
          <div className="LineSubTitle" style={{ width: "20%" }}></div>
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
          <div className="carousel-item h-100 active">
            <img src="https://raw.githubusercontent.com/ManoelPatrocinio/Assets/cffb28767946674ad15450b48029089de90902a7/petfood/slide1.svg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item h-100">
            <img src="https://github.com/ManoelPatrocinio/Assets/blob/master/petfood/slide2.png?raw=true" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item h-100">
            <img src="https://github.com/ManoelPatrocinio/Assets/blob/master/petfood/slide3.png?raw=true" className="d-block w-100" alt="..." />
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
          <h3 className="SectionTitleText">Destaques</h3>
          <div className="LineSubTitle"></div>
        </header>

        <div className="Cards_content col-12 d-flex justiy-content-center">
          {products.length <= 0 && (<Loading/>)}
          {products
            .filter((p) => p.avaliacoes >= 4.8)
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
          <h3 className="SectionTitleText">Lojas Bem Avaliadas</h3>
          <div className="LineSubTitle"></div>
        </header>

        <div className="Cards_content col-12 d-flex">
          {petshops.length <= 0  && (<Loading/>)}
          {petshops
            .filter((p) => p.avaliacao > 4.5)
            .map((p, index) => (
              <Link
                to={`/petshop/${p._id}`}
                className="PetshopCardLogo"
                key={index}
              >
                <img src={p.logo} alt="logo petshop" />
              </Link>
            ))}
        </div>
      </section>
      {/* End Section Marcas Bem avaliadas */}

      {/* main Section Produtos em Destaque */}
      <section className="Section_container col-12">
        <header className="SectionTitleContent d-flex col-12">
          <div className="LineSubTitle"></div>
          <h3 className="SectionTitleText">Mais Buscados</h3>
          <div className="LineSubTitle"></div>
        </header>

        <div className="Cards_content col-12 d-flex">
          {products.length <= 0 && (<Loading/>)}
          
          {products
            .filter((p) => p.avaliacoes === 5)
            .map((p, index) => (
              <ProductInCard key={index} product={p} />
            ))}
        </div>
      </section>
      {/* End Section Marcas Bem avaliadas */}

      {/*  Float Btn for Map page*/}
      <Link to={'/map'} className="d-block linkMap">
        <i className="fas fa-street-view"> </i>
      </Link>
      {/* End Float Btn for Map page*/}


      <Footer />
    </div>
  );
};

export default Store;
