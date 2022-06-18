import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";
import PrivateRoute from "components/PrivateRoute";
import Products from "./Products";
import "./styles.css";

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<PrivateRoute path={"products"} />}>
            <Route path="products/*" element={<Products />} />
            <Route path="categories" element={<h1>Categories Crud</h1>} />
          </Route>
          <Route
            path="/"
            element={<PrivateRoute path={"/"} roles={["ROLE_ADMIN"]} />}
          >
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
