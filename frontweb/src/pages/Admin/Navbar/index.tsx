import { NavLink } from "react-router-dom";
import "./styles.css";
const Navbar = () => {
  return (
    <nav className="admin-nav-container ">
      <ul>
        <li>
          <NavLink to="/admin/products" className="admin-nav-item">
            <p>Produtos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="categories" className="admin-nav-item">
            <p>Categorias</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="users" className="admin-nav-item">
            <p>Usuários</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
