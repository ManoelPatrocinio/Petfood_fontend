import { useState, React } from "react";
import { useDispatch } from "react-redux"; //dispara a action p/ a reducer atravez do UI
import { setCustomer as setStoreCustomer } from "../../store/modules/shop/actions";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Header from "../../components/header";
import Illustration from "../../assets/background_img2.jpg";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";

const Login = () => {
  const dispatch = useDispatch(); //dispara a action p/ a reducer atravez do UI
  const history = useHistory(); // p/ redirecionar
  
  const { register,formState: { errors }, handleSubmit,} = useForm({
    criteriaMode: "all",
  });

  const [customer, setCustomer] = useState({
    external_id: new Date().getTime().toString(),
    email: "",
    password: "",
    
  });

  const goToCheckOut = () => {
    dispatch(setStoreCustomer(customer));
  };
  const onSubmit = () =>{
    goToCheckOut() // salva os dados no customer
    Swal.fire({
      icon: "success",
      title: "Tudo certo",
      text: "Seu cadastro foi realizado !",
    }).then((result) => {
      
      if (result.isConfirmed) {
       history.push("/");
      }; 
   })
  }

  return (
    <div className="container-fluid  login_body">
      <img src={Illustration} className="imgFundo" />
      <section className="login_container">
        <div className="header">
          <Header whiteVersion hideSideBar />
        </div>
        <div className="col-12 d-flex login_box">
          <form
            className="col-3
            "
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
                setCustomer({ ...customer, email: e.target.value }); //pega tudo de custumer e atualiza apenas o Name
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
              placeholder="Sua senha"
              name="client_password"
              {...register("client_contato", {
                required: "Informe seu senha para continuar",
            
                minLength: {
                  value: 6,
                  message: "Senha precisa ter no minimo 6 caracteres",
                },
              })}
              onChange={(e) => {
                setCustomer({ ...customer, password: [e.target.value] }); //pega tudo de custumer e atualiza apenas o
              }}
            />
            <ErrorMessage
              errors={errors}
              name="client_password"
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

            <button type="submit" className="btn btn-lg w-100 btn-secondary">
              Finalizar Cadastro
            </button>
             <Link
                to="/cadastro"
                className="linkPcadastro"
              >
                Não tem uma conta, <span>clique aqui</span> e cadastre-se
              </Link>
          
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
