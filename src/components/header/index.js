import "./styler.css";
import Logo from "../../assets/logo.png";
import LogoWhite from "../../assets/logo-white.png";
import SearchIcon from "../../assets/searchIconQueen.svg";
import { isAuthenticated, logout } from "../../services/auth";
import { makeSearch as searchAction } from "../../store/modules/shop/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, React } from "react";
import { useForm } from "react-hook-form";

import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Header = ({ whiteVersion, hideSideBar }) => {
  const dispatch = useDispatch(); //dispara a action p/ a reducer atravez do UI
  const history = useHistory(); // p/ redirecionar
  const { cart } = useSelector((state) => state.shop);
  // logica do form de  busca
  const { handleSubmit } = useForm({
    criteriaMode: "all",
  });

  const [Datasearch, makeSearch] = useState();

  const onSubmit = () => {
    dispatch(searchAction(Datasearch));
    history.push("/search");
  };

  /* ***********FIM ********/

  //logica da validação da sessão do user
  let UserNameLoged = "";
  if (isAuthenticated()) {
    UserNameLoged = localStorage.getItem("UserName");
  }

  const CheckLogout = () => {
    Swal.fire({
      icon: "question",
      title: "Sair",
      text: "Deseja mesmo nos deixar ?",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        window.location.reload();
      }
    });
  };
  /* ***********FIM ********/
  // evento para abrir a sidebar da sacola de itens,será disparada para toda aplicação
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };
  // evento para abrir a sidebar da sacola de itens,será disparada para toda aplicação
  const openMenuSidebar = () => {
    const event = new CustomEvent("openMenu");
    window.dispatchEvent(event);
  };

  const renderUserLoged = (
    <div className="userLogado d-flex ">
      <button
        className="d-flex"
        type="button"
        id="dropdownMenuButtonPerfil"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-user"></i>
        <span>
          <span>{UserNameLoged.split(" ", 1)}</span>
        </span>
      </button>

      <ul
        className="dropdown-menu"
        id="menuHeader"
        aria-labelledby="dropdownMenuButtonPerfil"
      >
        <li>
          <Link to="#" className="dropdown-item">
            {" "}
            Menu Perfil
          </Link>{" "}
        </li>
        <li className="dropdown-item">
          <Link onClick={() => CheckLogout()} to="" className="dropdown-item">
            Sair
          </Link>
        </li>
      </ul>
    </div>
  );
  const renderUserNotLoged = (
    <div className="Notuser">
      <button
        className="d-flex"
        type="button"
        id="dropdownMenuButtonPerfil"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-user"></i>
        <span>
          <p id="ola"> Olá</p>
          <p>Minha conta</p>
        </span>
      </button>

      <ul
        className="dropdown-menu"
        id="menuHeader"
        aria-labelledby="dropdownMenuButtonPerfil"
      >
        <li>
          <Link to="/login" className="dropdown-item">
            Login
          </Link>
        </li>
        <li>
          <Link to="/cadastro" className="dropdown-item">
            Cadastre-se
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="col-12 d-flex header-global">
      <div className="containerMenuMobile">
        <button
          type="button"
          onClick={() => openMenuSidebar()}
          className="menuMobile "
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className="containerSearch d-flex">
        {/* <button className="d-block linkMap">
          <i className="fas fa-street-view"> </i>
          Próximo de ti
        </button> */}
        <form className="formSearch d-flex" onSubmit={handleSubmit(onSubmit)}>
          <button type="submit">
            <img src={SearchIcon} alt="pesquisar" />
          </button>
          <input
            type="search"
            className="form-control form-control-lg "
            placeholder="O que seu pet precisa ?"
            onChange={(e) => {
              makeSearch({ Datasearch: e.target.value }); //pega tudo de custumer e atualiza apenas o
            }}
          />
        </form>
      </div>

      <div className="logoContainer py-3 px-4 text-center">
        <Link to="/">
          <img
            src={whiteVersion ? LogoWhite : Logo}
            className="img-fluid"
            alt="petfood"
          />
        </Link>
      </div>

      <div className="ContainerUserAndCart d-flex">
        <div className="dropdown">
          <div className="Userperfil d-flex">
            {isAuthenticated() ? renderUserLoged : renderUserNotLoged}
          </div>
        </div>
        {!hideSideBar && (
          <button
            type="button"
            onClick={() => openDrawer()}
            className="btn cart-button position-relative"
          >
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
