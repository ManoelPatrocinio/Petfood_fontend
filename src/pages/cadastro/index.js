import { useState, React } from "react";
import { useDispatch } from "react-redux"; //dispara a action p/ a reducer atravez do UI
import { makeRegister as setUserData } from "../../store/modules/shop/actions";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import IllustrationCadastro from "../../assets/manAndDog.svg"
import LogoWhite from "../../assets/logo-white.png";
import { Link,useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./styler.css";

const Cadastro = () => {
  const dispatch = useDispatch(); //dispara a action p/ a reducer atravez do UI
  const history = useHistory(); // p/ redirecionar
  
  const { register,formState: { errors }, handleSubmit,} = useForm({
    criteriaMode: "all",
  });

  const [userData, makeRegister] = useState({
    external_id: new Date().getTime().toString(),
    name: "",
    email: "",
    cpf:"",
    phone: "",
    birthday: "",
  });

 
  const goToCheckOut = () => {
    dispatch(setUserData(userData));
    
  };
  const onSubmit = () =>{
    goToCheckOut() // salva os dados no customer
    Swal.fire({
      icon: "success",
      title: "Tudo certo",
      text: "Seu cadastro foi realizado, Aproveite !",
    }).then((result) => {
      if (result.isConfirmed) {
       history.push("/checkout");
      }; 
   })
  }

  return (
    <div className="container-fluid  cadastro_body">
      <section className="cadastro_container col-12 h-100 d-flex">
        <div className="header col-12 d-flex justify-content-center">
           <div className="logoContainer py-3 px-4 text-center">
            <Link to="/">
              <img src={LogoWhite} className="img-fluid" alt="petfood"/>
            </Link>
          </div>

        </div>
        <div className="col-12 d-flex cadastro_box">
          <div className="d-flex col-6 h-100 cadDestaque">
            <div className="ImgDestaque col-12"><img src={IllustrationCadastro}  className="col-12 h-100" alt="pet animal domestico "/></div>
            <div className="col-12 text-align-center FraseDetaque"> 
              <h1>Encontre o que há de melhor para seu pet</h1>
              <p >E veja no map quais Petshops estão mais próximas de você</p>
            </div>
          </div>

          <form
            className="col-4 h-100  formCadastro"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-center mb-4 boxHeader">
              <h2 className="text-center">Cadastre-se</h2>
              <small>E acompanhe seu pedido</small>
            </div>
            <input
              type="text"
              className="form-control form-control-lg mt-3"
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
              type="text"
              className="form-control form-control-lg mt-3"
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
              type="text"
              name="client_cpf"
              className="form-control form-control-lg mt-3"
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
                  ...userData, cpf: e.target.value  }); //pega tudo de custumer e atualiza apenas o
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
            <input
              type="date"
              className="form-control form-control-lg mt-3"
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

            <button type="submit" className="btn mt-3 btn-lg w-100 btn-secondary">
              Finalizar Cadastro
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Cadastro;
