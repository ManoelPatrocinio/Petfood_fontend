import "./styler.css";
import Dock from "react-dock";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, logout } from "../../services/auth";
import Swal from "sweetalert2";

const MenuSidebar = () => {
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

  const [opened, setOpenedMenu] = useState(false);
  //   escuta o evento disparado no Header, para exibir o menu
  useEffect(() => {
    window.addEventListener("openMenu", () => {
      setOpenedMenu(true);
    });
  }, []);

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpenedMenu(visible);
      }}
      position="left"
      size={0.75}
    >
      <div className="h-100 col-12 d-flex flex-direction-column pt-3 Menusidebar">
        <div className="col-12 row perfilImgAndName ">
          <div className="d-flex containerImgPerfil">
            <i className="fas fa-user"></i>
          </div>
          <div className=" d-flex userInfo">
            {/* <h3 id="userName">Minha conta</h3>
              <small id="userEmail">emailExemplo@gmail.com</small> */}
            {isAuthenticated() ? (
              <>
                <div className="userLogadoMobile d-flex ">
                  <button
                    className="d-flex"
                    type="button"
                    id="dropdownMenuButtonPerfil"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <small>{UserNameLoged.split(" ", 1)}</small>
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
                      <Link
                        onClick={() => CheckLogout()}
                        to=""
                        className="dropdown-item"
                      >
                        Sair
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <button
                  className="d-flex"
                  type="button"
                  id="dropdownMenuButtonPerfil"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Minha conta
                </button>

                <ul
                  className="dropdown-menu"
                  id="MyAccountMobile"
                  aria-labelledby="dropdownMenuButtonPerfil"
                >
                  <li>
                    <Link to="/login" className="dropdown-item">
                      {" "}
                      Login
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to="/cadastro" className="dropdown-item">
                      {" "}
                      Cadastre-se
                    </Link>{" "}
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="col-90  align-items-end menuOptions ">
          <form className="mt-1 formSearchMobile d-flex">
            <input
              type="text"
              className=" form-control form-control-lg "
              placeholder="O que seu pet precisa ?"
            />
            <button type="button" className="btn_Search ">
              <i class="fas fa-search"></i>
            </button>
          </form>
          <ul className="categoriasMobile">
            <h2 className="col-12">Categorias</h2>
            <li>CÃES</li>
            <li>GATOS</li>
            <li>PÁSSAROS</li>
            <li>PEIXES</li>
            <li>ROEDORES</li>
            <li>RÉPTEIS</li>
          </ul>
          <form className="mt-2 FormRastrear_pedidos d-flex">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Código do pedido ?"
            />
            <button type="button" className="btn btn-secondary  ">
              Rastrear Pedido
            </button>
          </form>
        </div>
      </div>
    </Dock>
  );
};

export default MenuSidebar;
