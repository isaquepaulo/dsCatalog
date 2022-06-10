import Navbar from "components/Navbar";
import Home from "pages/Home";
import Catalog from "pages/Catalog";
import Admin from "pages/Admin";
import ProductDetails from "pages/ProductDetails";
import Auth from "pages/Admin/Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "util/history";

const Rota = () => {
  return (
    <HistoryRouter history={history}>
      <Navbar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/products" caseSensitive={false} element={<Catalog />} />
        <Route
          path="/products/:productId"
          caseSensitive={false}
          element={<ProductDetails />}
        />

        <Route
          path="/admin/auth/*"
          caseSensitive={false}
          element={<Auth />}
        ></Route>

        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </HistoryRouter>
  );
};

export default Rota;
