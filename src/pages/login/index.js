import { useState, React } from "react";
import { useDispatch } from "react-redux"; //dispara a action p/ a reducer atravez do UI
import { makeLogin as login } from "../../store/modules/shop/actions";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import IllustrationLogin from "../../assets/loginLogoGreen.svg";
import Logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";

const Login = () => {
  const dispatch = useDispatch(); //dispara a action p/ a reducer atravez do UI
  const history = useHistory(); // p/ redirecionar
  
  const { register,formState: { errors }, handleSubmit,} = useForm({
    criteriaMode: "all",
  });

  const [customer, makeLogin] = useState({
    email: "",
    cpf: "",
  });

  const goToCheckOut = () => {
    dispatch(login(customer));
  };
  const onSubmit = () =>{
    // verificar tratamento de erro
    goToCheckOut() // salva os dados no customer
    Swal.fire({
      icon: "success",
      title: "Tudo certo",
      text: "Login realizado, Bem vindo !",
    }).then((result) => {
      
      if (result.isConfirmed) {
       history.push("/");
      }; 
   })
  }

  return (
    <div className="container-fluid  login_body">
   
      <section className="login_container">
        <div className="header col-12 d-flex justify-content-center">
           <div className="logoContainer py-3 px-4 text-center" >
            <Link to="/">
              <img src={Logo} className="img-fluid" alt="petfood"/>
            </Link>
          </div>

        </div>
        <div className="col-12 d-flex  login_box">
          <div className="d-flex col-6 h-100 cadDestaque" id="cadDestaqueLogin">
            <div className="ImgDestaque"><img src={IllustrationLogin} className="col-12 h-100" alt="pet animal domestico "/></div>

            <h1>Encontre o que há de melhor para seu pet</h1>
            <p>E veja no map quais Petshops estão mais próximas de você</p>
          </div>

           <form
            className="col-4 formCadastro
            " id="formLogin"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-center mb-4 boxHeader">
              <h2 className="text-center">Login</h2>
              <small> Entre e busque o melhor para seu pet </small>
            </div>
     
            <input
              type="email"
              name="client_email"
              className="form-control form-control-lg mt-3"
              placeholder="E-mail"
              {...register("client_email", {
                required: "Informe seu email para continuar",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Informe um e-mail válido",
                },
                minLength: {
                  value: 10,
                  message: "O nome deve ter mais de 10 caracteres",
                },
              })}
              onChange={(e) => {
                makeLogin({ ...customer, email: e.target.value }); //pega tudo de custumer e atualiza apenas o Name
              }}
            />
            <ErrorMessage
              errors={errors}
              name="client_email"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <small className="alertCadInput" key={type}>
                        {message}
                      </small>
                    ))
                  : null;
              }}
            />
            <input
              type="password"
              className="form-control form-control-lg mt-3"
              placeholder="Seu CPF"
              name="client_cpf"
              {...register("client_cpf", {
                required: "Informe um CPF valido",
                pattern: {
                  value: /\d+/,
                  message: "Apenas Números",
                },
                minLength: {
                  value: 11,
                  message: "O CPF deve ter 11 números",
                },
              })}
              onChange={(e) => {
                makeLogin({ ...customer, cpf: [e.target.value] }); //pega tudo de custumer e atualiza apenas o
              }}
            />
            <ErrorMessage
              errors={errors}
              name="client_cpf"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <small className="alertCadInput" key={type}>
                        {message}
                      </small>
                    ))
                  : null;
              }}
            />

            <button type="submit" className="btn btn-lg w-100 mt-3 btn-secondary">
              Finalizar Cadastro
            </button>
             <Link
                to="/cadastro"
                className="linkPcadastro"
              >
                Não tem uma conta, <span>clique aqui</span> e cadastre-se
              </Link>
              <div id="LineBottomLogin"></div>
              <Link
                to="/"
                id="linkRemenberPassword"
              >
                Esqueceu sua senha
              </Link>
          
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
