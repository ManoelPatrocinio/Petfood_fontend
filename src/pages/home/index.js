import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { requestPetshops } from "../../store/modules/shop/actions";

import "./styler.css";
import{Header,Petshop,Map} from "../../components"

const Home = () => {
  const dispatch = useDispatch();
  const { petshops } = useSelector((state) => state.shop);
  useEffect(() => {
  
    dispatch(requestPetshops());
  }, [dispatch]);
  return (
    <div className="d-flex col-12 containerHome">
      <Header/>
      <div className="container-fluid petshop-list-container col-12">
        <div className="col-12 px-4 text-center subTitle">
          <h5>Mais próximos de você:({petshops.length})</h5>
        </div>
        <ul className="col-12 petshop-list">
          {petshops.map((p,index) => (
            <Petshop petshop={p} key={index} />
          ))}
        </ul>
      </div>
      <Map petshops={petshops} />
    </div>
  );
};

export default Home;
