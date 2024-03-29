import "./styler.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartProduct } from "../../../store/modules/shop/actions";

const ProductInCard = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop);
  const added = cart.findIndex((p) => p._id === product._id) !== -1; //verifica se item já existe

  return (
    <div className="product col-3 d-flex">
      <div className="imgCard">
        <img
          src={product.capa}
          className="img-fluid align-center"
          alt="ração"
        />
      </div>
      <div className="prod_info">
        <h1 className="CardP_price">{product.nome}</h1>
        <div className="d-flex justify-content-between">
          <p className="badge badge-primary">R$ {product.preco.toFixed(2)}</p>
          <div className="wrapper-avaliation">
            <span className="mdi mdi-star"></span>
            <p>
              <b>{product.avaliacoes}</b>
            </p>
            <small>(140)</small>
          </div>
        </div>
      </div>
      <div className="btnFooter">
        <button
          onClick={() => dispatch(toggleCartProduct(product))}
          className={`btn btn-${added ? "secondary" : "primary"} `}
        >
          {added ? (
            "Remover"
          ) : (
            <span className="mdi mdi-cart"> Adicionar </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductInCard;
