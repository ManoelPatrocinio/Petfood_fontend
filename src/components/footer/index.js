import "./styler.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="global_footer d-flex col-12">
      <div className="d-flex col-12  justify-content-evenly containerInfor">
        <div className="Card-footer infor_apps d-flex">
          <button
            className="footerTitle"
            data-bs-toggle="collapse"
            href="#collapseInfoAndHelp"
            
            aria-expanded="false"
            aria-controls="collapseInfoAndHelp"
          >
            Informações e Ajuda
          </button>
          <ul className="footerList collapse" id="collapseInfoAndHelp">
            <li>
              <Link to=""> Sobre Nós</Link>
            </li>
            <li>
              <Link to=""> Política de Privacidade</Link>
            </li>
            <li>
              <Link to=""> Formas de Pagamento</Link>
            </li>
            <li>
              <Link to=""> Frete e Entregas</Link>
            </li>
            <li>
              <Link to=""> Trocas e Devoluções</Link>
            </li>
          </ul>
          <div>
            <button
              className="footerTitle"
              data-bs-toggle="collapse"
              href="#collapseApp"
              
              aria-expanded="false"
              aria-controls="collapseApp"
            >
              Nosso App
            </button>
            <ul className="footerList collapse" id="collapseApp"></ul>
          </div>
        </div>
        <div className="Card-footer sagurança_pagamento d-flex">
          <button
            className="footerTitle"
            data-bs-toggle="collapse"
            href="#imgCartoes"
            
            aria-expanded="false"
            aria-controls="imgCartoes"
          >
            Formas de pagamento
          </button>
          <img
            id="imgCartoes"
            className="collapse"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/02/bandeiras-3.png"
            alt="formas de pagamento"
          />
          <div className="card-segurança">
            <button
              className="footerTitle col-12"
              data-bs-toggle="collapse"
              href="#collapseSecury"
              
              aria-expanded="false"
              aria-controls="collapseSecury"
            >
              Segurança
            </button>
            <div id="collapseSecury" className="collapse wrapperImg col-12 ">
              <img
                src="https://chico-rei.imgix.net/images/site/seguranca/seal_google_safe_browsing.gif"
                alt="google safe browsing"
              />
              <img
                src="https://www.passagenspromo.com.br/blog/wp-content/uploads/2018/05/RA_1000_PP.png"
                alt="loja confiável"
              />
            </div>
          </div>
        </div>
        <div className="Card-footer social_myConta d-flex ">
          <button
            className="footerTitle mt-2"
            data-bs-toggle="collapse"
            href="#collapseMyConta"
            
            aria-expanded="false"
            aria-controls="collapseMyConta"
          >
            Minha Conta
          </button>
          <ul className="footerList collapse" id="collapseMyConta">
            <li>
              <Link to=""> Meus pedidos</Link>
            </li>
            <li>
              <Link to=""> Meu cadastro</Link>
            </li>
            <li>
              <Link to=""> Fale com a ouvidoria</Link>
            </li>
          </ul>

          <button
            className="footerTitle"
            data-bs-toggle="collapse"
            href="#collapseSocialNetwork"
            
            aria-expanded="false"
            aria-controls="collapseSocialNetwork"
          >
            Nossas Redes
          </button>

          <div
            className="wrapperSocialMedia col-12  collapse"
            id="collapseSocialNetwork"
          >
            <Link to="" className="SocialMediaIcon">
              {" "}
              <img
                src="https://image.flaticon.com/icons/png/512/733/733558.png"
                alt="instagram"
              />
            </Link>
            <Link to="" className="SocialMediaIcon">
              {" "}
              <img
                src="https://image.flaticon.com/icons/png/512/145/145807.png"
                alt="instagram"
              />
            </Link>
            <Link to="" className="SocialMediaIcon">
              {" "}
              <img
                src="https://image.flaticon.com/icons/png/512/145/145802.png"
                alt="instagram"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyrightETC col-12 mt-5">
        <div className="btn-group dropup">
          <button
            type="button"
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="btnCreditImg"
          >
            Crédito pelas imagens
          </button>
          <ul className="dropdown-menu" id="ulCreditoImg">
            <li>
              {" "}
              <a href="https://www.freepik.com" title="Freepik" target="blank">
                Freepik
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.flaticon.com/br/"
                title="Flaticon"
                target="blank"
              >
                Flaticon
              </a>
            </li>
            <li>
              <a href="https://www.opendoodles.com/" target="blank">
                Open Doodles
              </a>
            </li>
          </ul>
        </div>
        <p>Copyright © 2020 Petfood.com.br TODOS OS DIREITOS RESERVADOS.</p>
        <p>
          Desenvolvido por Manoel Patrocinio &{" "}
          <a href="https://irmaomaisvelho.com.br/" target="blank">
            {" "}
            Irmão mais Velho{" "}
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
