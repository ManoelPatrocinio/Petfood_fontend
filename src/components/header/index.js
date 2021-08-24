import "./styler.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/searchIconQueen.svg";
import LogoWhite from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = ({ whiteVersion, hideSideBar }) => {
    const { cart } = useSelector((state) => state.shop);

  // evento para abrir a sidebar da sacola de itens,será disparada para toda aplicação
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };
  return (
    <div className="col-12 d-flex header-global">

      <div className="containerSearch d-flex">
        {/* <button className="d-block linkMap">
          <i className="fas fa-street-view"> </i>
          Próximo de ti
        </button> */}
        <div className="menuMobile">
          <i class="fas fa-bars"></i>
        </div>

        <form className="formSearch d-flex">

            <button>
                <img src={SearchIcon} />
            </button>
          <input type="text"
            className="form-control form-control-lg "
            placeholder="O que seu pet precisa ?"/>
        </form>
      </div>

      <div className="logoContainer py-3 px-4 text-center">
        <Link to="/">
          <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" alt="petfood"/>
        </Link>
      </div>

      <div className="ContainerUserAndCart d-flex">
        <div className="dropdown">
          <div className="Userperfil d-flex">
              <button className="d-flex" type="button" id="dropdownMenuButtonPerfil" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user"></i>
                <span>                                                   
                  <p id="ola"> Olá </p>
                  <p>Minha conta</p>
                </span>   

              </button>

              <ul className="dropdown-menu" id="menuHeader" aria-labelledby="dropdownMenuButtonPerfil">
                <li><a className="dropdown-item" href="#">Login</a></li>

                <li><a className="dropdown-item" href="#">Cadastre-se</a></li>
              </ul>
          </div>
        </div>
        {!hideSideBar && (
          // <button onClick={() => openDrawer()} className="btn cart-button">
          //   <span className="mdi mdi-cart"></span>({cart.length})
          // </button>

          <button type="button"onClick={() => openDrawer()} className="btn cart-button position-relative">
            <span className="mdi mdi-cart"></span>
            <span className="position-absolute top-0 start-80 translate-middle rounded-circle">
              <span className="visually">{cart.length}</span>
            </span>
         </button>
        )}
      </div>
  
    </div>
  );
};

export default Header;
