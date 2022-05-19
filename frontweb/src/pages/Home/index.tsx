import { ReactComponent as MainImage } from "assets/images/Desenho.svg";
import "./styles.css";

import ButtonIcon from "components/ButtonIcon";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card base-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o melhor catalogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado.
            </p>
          </div>
          <div>
            <Link to="/products">
              <ButtonIcon />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
