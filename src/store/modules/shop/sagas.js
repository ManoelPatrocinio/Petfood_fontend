import { takeLatest, all, call, put, select } from "redux-saga/effects"; // vincula uma função a uma action
import types from "./types";
import api from "../../../services/api";
import { login } from "../../../services/auth";
import { setPetshops, setPetshop, setProdutos } from "./actions";
import Swal from "sweetalert2";

export function* requestPetshops() {
  const response = yield call(api.get, "/petshops");
  const res = response.data;
  yield put(setPetshops(res.petshops));
}
//payload: objeto com os dados da requisição/action
export function* requestPetshop(payload) {
  const response = yield call(api.get, `/petshop/${payload.id}`);
  const res = response.data;
  yield put(setPetshop(res.petshop));
}

export function* makePurchase() {
  const { transaction } = yield select((state) => state.shop);
  const response = yield call(api.post, "/checked/purchase", transaction);
  const res = response.data;

  if (res.error) {
    Swal.fire({
      icon: "error",
      title: "Oopsss",
      text:"Serviço em manutenção, tente mais tarde"
      // text: res.message,
    });
    return false;
  }
  if (res.data.status !== "paid") {
    Swal.fire({
      icon: "error",
      title: "Oopsss",
      text: res.data.refuse.reason,
    }); 
    return false;
  }

   Swal.fire({
     icon: "success",
     title: "Tudo certo",
     text: 'Sua compra foi aprovada !',
   }); 
}


export function* makeRegister() {
  const { userData } = yield select((state) => state.shop);
  const response = yield call(api.post, "/auth/register",userData);
  const res = response.data;

  if (res.error) {
    Swal.fire({
      icon: "error",
      title: "Oopsss",
      text: "Erro no cadastro, verifique suas informações",
    });
    return false;
  }
  
}

export function* makeLogin() {
  const { user } = yield select((state) => state.shop);
  const response = yield call(api.post, '/auth/login',user);
  const res = response.data;

  if (res.error) {
    Swal.fire({
      icon: "error",
      title: "Oopsss",
      text: res.message,
      //  "Informação inválida ",
      // text: res.message,
    });
    return false;
  }else{
    login(res.token); //salva o token no local storage
    localStorage.setItem("UserName", res.user.name); //salva o nome do user no local storage
  }
  
  
}

export function* makeSearch() {
  const { Datasearch } = yield select((state) => state.shop);
  const response = yield call(api.post, "/search", Datasearch);
  const res = response.data;

  if (res.error) {
    Swal.fire({
      icon: "error",
      title: "Oopsss",
      text: res.message,
      //  "Informação inválida ",
      // text: res.message,
    });
    return false;
  } else {
     if(res.petshop)  {
        yield put(setPetshop(res.petshop));
     }else if(res.products){
        yield put(setProdutos(res.products));
     }else{
       console.log("Sem resultados para sua busca");
     }
     return true
  }
}


//takeLatest: pega a ultima ação disparada
export default all([
  takeLatest(types.REQUEST_PETSHOPS, requestPetshops),
  takeLatest(types.REQUEST_PETSHOP, requestPetshop),
  takeLatest(types.MAKE_PURCHASE, makePurchase),
  takeLatest(types.MAKE_REGISTER, makeRegister),
  takeLatest(types.MAKE_LOGIN, makeLogin),
  takeLatest(types.MAKE_SEARCH, makeSearch),
]);
