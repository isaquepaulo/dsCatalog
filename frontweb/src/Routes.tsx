import Navbar from "components/Navbar";
import Home from "pages/Home";
import Catalog from "pages/Catalog";
import Admin from "pages/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Rota = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/products" caseSensitive={false} element={<Catalog />} />
        <Route path="/admin" caseSensitive={false} element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default Rota;
