import { AxiosRequestConfig } from "axios";
import Pagination from "components/Pagination";
import ProductCrudCard from "pages/Admin/Products/ProductCrudCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "types/product";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/request";
import "./styles.css";

const List = () => {
  const [page, setpage] = useState<SpringPage<Product>>();

  useEffect(() => {
    getProducts(0);
  }, []);

  const getProducts = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/products`,
      params: {
        page: pageNumber,
        size: 3,
      },
    };

    requestBackend(config).then((response) => {
      setpage(response.data);
    });
  };

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <Link to="/admin/products/create">
          <button className="btn btn-primary text-white btn-crud-add">
            Adicionar
          </button>
        </Link>

        <div className="base-card product-filter-container">Search bar</div>
      </div>
      <div className="row">
        {page?.content.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-12">
            <ProductCrudCard product={product} onDelete={() => getProducts(page.number)} />
          </div>
        ))}
      </div>
      <Pagination pageCount={page ? page.totalPages : 0} range={3} onChange={getProducts} />
    </div>
  );
};

export default List;
