import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./User";
import PrivateRoute from "components/PrivateRoute";
import "./styles.css";

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<PrivateRoute path={"/"} />}>
            <Route path="products" element={<h1>blabla product</h1>} />
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
