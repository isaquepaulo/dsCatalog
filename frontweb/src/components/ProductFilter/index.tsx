import { ReactComponent as SearchIcon } from "assets/images/search-icon.svg";
import "./styles.css";

const ProductFilter = () => {
  return (
    <div className="base-card product-filter-container">
      <form action="">
        <div className="product-filter-name-container">
          <input
            type="text"
            className="form-control"
            placeholder="Nome do Produto"
          />
          <SearchIcon />
        </div>
        <div className="product-filter-botton-container">
          <div className="product-filter-category-container">
            <select name="" id="">
              <option value="">Livros</option>
            </select>
          </div>
          <button className="btn btn-outline-secondary">Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
