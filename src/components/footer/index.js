import "./styler.css";

const Footer = () =>{

    return (
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
            <img
              src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/02/bandeiras-3.png"
              alt="formas de pagamento"
              id="imgCartoes"
            />
            <div className=" mt-4">
              <h3 className="footerTitle col-12"> Segurança </h3>
              <div className="wrapperImg col-12 d-flex">
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
          <div className="col-3 social_myConta d-flex ">
            <h3 className="footerTitle"> Nossas Redes</h3>

            <div className="wrapperSocialMedia col-12 d-flex">
              <a href="#" className="SocialMediaIcon">
                {" "}
                <img
                  src="https://image.flaticon.com/icons/png/512/733/733558.png"
                  alt="instagram"
                />
              </a>
              <a href="#" className="SocialMediaIcon">
                {" "}
                <img
                  src="https://image.flaticon.com/icons/png/512/145/145807.png"
                  alt="instagram"
                />
              </a>
              <a href="#" className="SocialMediaIcon">
                {" "}
                <img
                  src="https://image.flaticon.com/icons/png/512/145/145802.png"
                  alt="instagram"
                />
              </a>
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
            <button
              type="button"
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="btnCreditImg"
            >
              Crédito pelas imagens
            </button>
            <ul class="dropdown-menu" id="ulCreditoImg">
              <li>
                {" "}
                <a
                  href="https://www.freepik.com"
                  title="Freepik"
                  target="_blank"
                >
                  Freepik
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.flaticon.com/br/" title="Flaticon">
                  Flaticon
                </a>
              </li>
              <li>
                <a href="https://www.opendoodles.com/">Open Doodles</a>
              </li>
            </ul>
          </div>
          <p>Copyright © 2020 Petfood.com.br TODOS OS DIREITOS RESERVADOS.</p>
          <p>
            Desenvolvido por Manoel Patrocinio &{" "}
            <a href="https://irmaomaisvelho.com.br/" target="_blank">
              {" "}
              Irmão mais Velho{" "}
            </a>{" "}
          </p>
        </div>
      </footer>
    );    
}

export default Footer;