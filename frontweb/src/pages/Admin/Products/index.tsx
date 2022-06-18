import { Route, Routes } from "react-router-dom";
import List from "./List";
import Form from "./Form";

const Products = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />

      <Route path=":productId" element={<Form />} />
    </Routes>
  );
};

export default Products;
