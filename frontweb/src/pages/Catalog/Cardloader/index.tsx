import ContentLoader from "react-content-loader";
import "./styles.css";
const CardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={350}
      height={400}
      viewBox="0 0 350 400"
      backgroundColor="#ecebeb"
      foregroundColor="#d6d2d2"
    >
      <rect x="0" y="0" rx="4" ry="4" width="271" height="9" />
      <rect x="0" y="0" rx="3" ry="3" width="119" height="6" />
      <rect x="0" y="0" rx="10" ry="10" width="388" height="217" />
    </ContentLoader>
  </div>
);

export default CardLoader;
