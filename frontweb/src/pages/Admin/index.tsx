import { Route, Routes } from "react-router-dom";
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
          <Route path="/" element={<PrivateRoute />}>
            <Route path="products" element={<h1>blabla product</h1>} />
            <Route path="categories" element={<h1>Categories Crud</h1>} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
