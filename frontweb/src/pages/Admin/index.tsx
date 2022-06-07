import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles.css";

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="products" element={<h1>products Crud</h1>} />
          <Route path="categories" element={<h1>Categories Crud</h1>} />
          <Route path="users" element={<h1>Users Crud</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
