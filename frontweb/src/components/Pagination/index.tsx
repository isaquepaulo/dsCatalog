import "./styles.css";
import { ReactComponent as ArrowIcons } from "assets/images/arrow.svg";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <ArrowIcons className="arrow-inactive arrow-previous" />
      <div className="pagination-item active">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">...</div>
      <div className="pagination-item">10</div>
      <ArrowIcons className="arrow-active arrow-next" />
    </div>
  );
};

export default Pagination;
