import { useState, React } from "react";
import { useDispatch } from "react-redux"; //dispara a action p/ a reducer atravez do UI
import { makeLogin as login } from "../../store/modules/shop/actions";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./style.css";

const Login = () => {
  const dispatch = useDispatch(); //dispara a action p/ a reducer atravez do UI
  const history = useHistory(); // p/ redirecionar

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const [customer, makeLogin] = useState({
    email: "",
    cpf: "",
  });

  const goToCheckOut = () => {
    dispatch(login(customer));
  };
  const onSubmit = () => {
    // verificar tratamento de erro
    goToCheckOut(); // salva os dados no customer
    Swal.fire({
      icon: "success",
      title: "Tudo certo",
      text: "Login realizado, Bem vindo !",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/");
      }
    });
  };

  return (
    <div className="container-fluid  login_body">
      <div className="header col-12 d-flex justify-content-center">
        <Header />
      </div>
      <section className="container_section col-12 h-100 d-flex">
        <div className="col-12 d-flex  box_form_cantainer">
          <div className="col-8 h-100 cardDestaque">
            <div className=" d-flex cardDestaque_boxImg">
              <img
                src="https://opendoodles.s3-us-west-1.amazonaws.com/petting.svg"
                alt="pet animal domestico "
              />
            </div>
            <div className="cardDestaque_boxSlogan">
              <p className="text-center">
                Encontre o que há de melhor para seu pet
              </p>
            </div>
          </div>
          <div className="col-4 box-form">
            <form
              className="col-12 mt-5 form
            "
              id="formLogin"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="text-center mb-4 boxHeader" id="boxHeaderLogin">
                <h2 className="text-center">Login</h2>
                <small> Entre e busque o melhor para seu pet </small>
              </div>

              <div className="mb-3">
                <label className="form-label" for="cliEmail">
                  Email<span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="cliEmail"
                  name="client_email"
                  className="form-control form-control-lg"
                  placeholder="E-mail"
                  {...register("client_email", {
                    required: "Informe seu email para continuar",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Informe um e-mail válido",
                    },
                    minLength: {
                      value: 12,
                      message: "O email deve ter mais de 10 caracteres",
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
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <small className="alertCadInput" key={type}>
                            {message}
                          </small>
                        ))
                      : null;
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="cliCpf">
                  CPF<span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="client_cpf"
                  id="cliCpf"
                  className="form-control form-control-lg "
                  placeholder="CPF"
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
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <small className="alertCadInput" key={type}>
                            {message}
                          </small>
                        ))
                      : null;
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg w-100 mt-3 btn-secondary"
              >
                Entrar
              </button>
              <Link to="/cadastro" className="linkPcadastro">
                Não tem uma conta, <span>clique aqui</span> e cadastre-se
              </Link>
              <div id="LineBottomLogin"></div>
              {/* <Link to="/" id="linkRemenberPassword">
                Esqueceu sua senha ?
              </Link> */}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
