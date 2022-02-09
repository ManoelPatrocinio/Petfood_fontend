import "./styler.css";
import Footer from "../../components/footer";

import { useState, React } from "react";
import { useDispatch } from "react-redux"; //dispara a action p/ a reducer atravez do UI
import { makeRegister as setUserData } from "../../store/modules/shop/actions";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import IllustrationCadastro from "../../assets/womenAndDog.svg";
import Header from "../../components/header";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Cadastro = () => {
  const dispatch = useDispatch(); //dispara a action p/ a reducer atravez do UI
  const history = useHistory(); // p/ redirecionar

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const [userData, makeRegister] = useState({
    external_id: new Date().getTime().toString(),
    name: "",
    email: "",
    cpf: "",
    phone: "",
    birthday: "",
  });

  const goToCheckOut = () => {
    dispatch(setUserData(userData));
  };
  const onSubmit = () => {
    goToCheckOut(); // salva os dados no customer
    Swal.fire({
      icon: "success",
      title: "Tudo certo",
      text: "Seu cadastro foi realizado, Aproveite !",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/checkout");
      }
    });
  };

  return (
    <div className="container-fluid  cadastro_body">
      <div className="header col-12 d-flex justify-content-center">
        <Header />
      </div>
      <section className="container_section col-12 h-100 d-flex">
        <div className=" d-flex box_form_cantainer">
          <div className="col-8 cardDestaque">
            <div className="cardDestaque_boxImg d-flex">
              <img src={IllustrationCadastro} alt="pet animal domestico" />
            </div>
            <div className="cardDestaque_boxSlogan">
              <p className="text-center">
                {" "}
                Encontre o que há de melhor & perto de você
              </p>
            </div>
          </div>
          <div className="col-4 box-form">
            <form
              className="h-100 col-12  form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="text-center mb-4 boxHeader">
                <h2 className="text-center">Cadastro de Novo Cliente</h2>
              </div>

              <div className="mb-3">
                <label className="form-label" for="fullName">
                  {" "}
                  Nome Completo<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control form-control-lg "
                  placeholder="Nome Completo"
                  {...register("client_name", {
                    required: "Informe seu nome para continuar",
                    minLength: {
                      value: 5,
                      message: "O nome deve ter mais de 4 caracteres",
                    },
                  })}
                  onChange={(e) => {
                    makeRegister({ ...userData, name: e.target.value });
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name="client_name"
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
                    makeRegister({ ...userData, email: e.target.value }); //pega tudo de custumer e atualiza apenas o Name
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
                <label className="form-label" for="cliCelular">
                  {" "}
                  Nº Celular<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="cliCelular"
                  className="form-control form-control-lg"
                  placeholder="DDD + Nº do celular"
                  name="client_contato"
                  {...register("client_contato", {
                    required: "Informe seu Nº de celular para continuar",
                    pattern: {
                      value: /\d+/,
                      message: "Apenas Números",
                    },
                    minLength: {
                      value: 11,
                      message: "DDD + Nº de celular",
                    },
                  })}
                  onChange={(e) => {
                    makeRegister({ ...userData, phone: e.target.value }); //pega tudo de custumer e atualiza apenas o
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name="client_contato"
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
                    makeRegister({
                      ...userData,
                      cpf: e.target.value,
                    }); //pega tudo de custumer e atualiza apenas o
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

              <div className="mb-3">
                <label className="form-label" for="clibirthday">
                  {" "}
                  Data de Nascimento <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="clibirthday"
                  className="form-control form-control-lg"
                  name="client_birthday"
                  placeholder="Data de nascimento"
                  {...register("client_birthday", {
                    required: "Informe sua Data de nascimento",
                    pattern: {
                      value: /\d+/,
                      message: "Apenas Números",
                    },
                    minLength: {
                      value: 8,
                      message: "Informe Dia/Mes/Ano",
                    },
                  })}
                  onChange={(e) => {
                    makeRegister({ ...userData, birthday: e.target.value }); //pega tudo de custumer e atualiza apenas o
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name="client_birthday"
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
                className="btn mt-3 btn-lg w-100 btn-secondary"
              >
                Finalizar Cadastro
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cadastro;
