import "./style.css";
import Header from "../../components/header";

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

       <footer className="global_footer d-flex col-12">
          <div className="d-flex col-12  justify-content-evenly">
            <div className="col-3 infor_apps d-flex">
                <h3 className="footerTitle"> Informações e Ajuda </h3>
                <ul className="footerList">  
                  <li> Sobre Nós</li>
                  <li> Política de Privacidade</li>
                  <li> Formas de Pagamento</li>
                  <li> Fale Conosco</li>
                  <li> Frete e Entregas</li>
                  <li> Trocas e Devoluções</li>
                </ul>  
            </div>        
            <div className="col-3 sagurança_pagamento d-flex">
              <h3 className="footerTitle"> Formas de pagamento </h3>
              <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/02/bandeiras-3.png" alt="formas de pagamento" id="imgCartoes"/>
              <div className=" mt-4">
                 <h3 className="footerTitle col-12"> Segurança </h3>
                 <div className="wrapperImg col-12 d-flex">
                    <img src="https://chico-rei.imgix.net/images/site/seguranca/seal_google_safe_browsing.gif" alt="google safe browsing" />
                    <img src="https://www.passagenspromo.com.br/blog/wp-content/uploads/2018/05/RA_1000_PP.png" alt="loja confiável" />
                 </div>

              </div>
            </div>        
            <div className="col-3 social_myConta d-flex ">
                <h3 className="footerTitle"> Nossas Redes</h3>

                <div className="wrapperSocialMedia col-12 d-flex">
                  <a href="#"  className="SocialMediaIcon">  <img src="https://image.flaticon.com/icons/png/512/733/733558.png" alt="instagram"/></a>
                  <a href="#"  className="SocialMediaIcon">  <img src="https://image.flaticon.com/icons/png/512/145/145807.png" alt="instagram"/></a>
                  <a href="#"  className="SocialMediaIcon">  <img src="https://image.flaticon.com/icons/png/512/145/145802.png" alt="instagram"/></a>
                </div>

                <h3 className="footerTitle mt-2"> Minha Conta</h3>
                <ul className="footerList">  
                  <li> Meus pedidos</li>
                  <li> Meu cadastro</li>
                  <li> Fale com a ouvidoria</li>
                </ul>  
            </div>   

          </div> 
          <div className="copyrightETC col-12 mt-5">
               
            <div class="btn-group dropup">
              <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="btnCreditImg">
               Crédito pelas imagens
              </button>
              <ul class="dropdown-menu" id="ulCreditoImg">
               <li> <a href="https://www.freepik.com" title="Freepik"  target="_blank" >Freepik</a></li> 
               <li> <a href="https://www.flaticon.com/br/" title="Flaticon">Flaticon</a></li>
              </ul>
            </div>
            <p>Copyright © 2020 Petfood.com.br TODOS OS DIREITOS RESERVADOS.</p>
            <p>Desenvolvido por  Manoel Patrocinio & <a href="https://irmaomaisvelho.com.br/"  target="_blank" > Irmão mais Velho </a> </p>

          </div>      
       </footer>

    </div>
  );
};

export default Store;
