import Navbar from "components/Navbar";
import Home from "pages/Home";
import Catalog from "pages/Catalog";
import Admin from "pages/Admin";
import ProductDetails from "pages/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Rota = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/products" caseSensitive={false} element={<Catalog />} />
        <Route
          path="/products/:productId"
          caseSensitive={false}
          element={<ProductDetails />}
        />

        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default Rota;
