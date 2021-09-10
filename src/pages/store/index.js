import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

// ********* IMAGENS *************** //
// slide img
import slide1 from "../../assets/slide1.svg"
import slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"

// categoria img
import catDog from "../../assets/catDog.svg"
import catCat from "../../assets/catCat.svg"
import catFish from "../../assets/catFish.svg"
import catBirt from "../../assets/catbird.svg"
import catRept from "../../assets/catreptiles.svg"
import catRoedores from "../../assets/catroedor.svg"

// ************* DEPEDENCIAS *************//
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { requestPetshops } from "../../store/modules/shop/actions";
import Petshop from "../../components/petshop";

const Store = () => {

  // retorna a lista das petshops
  const dispatch = useDispatch();
  const {petshops} = useSelector((state)=> state.shop)
  useEffect(()=>{
    dispatch(requestPetshops());
  },[])
  // ******* fim ***********


  return (
    
    <div className="col-12">
      <Header/>

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
            <div id="categoriaFrase">
               <p> O Melhor Para Seu Pet</p>
            </div>
        </section>
        {/*start caroulsel slide */}
        <div id="slideDestaques" className="carousel slide col-12" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#slideDestaques" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#slideDestaques" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#slideDestaques" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner h-100">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#slideDestaques" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#slideDestaques" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
          {/*end caroulsel slide */}
       
       <section className="container_destaques col-12">
            <header >
              <h3 className="HomeTitle"> As Melhores Marcas</h3>
            </header>

            <div className="containerDestaqueCards">
              <ul className="col-12 petshop-list">
                {petshops.map((p) => (
                  <Petshop petshop={p} />
                ))}
              </ul>
            </div>
       </section> 

      <Footer/>
    </div>
  );
};

export default Store;
