import { ReactComponent as AuthImage } from "assets/images/auth-image.svg";
import { Navigate, Route, Routes } from "react-router-dom";
import CardLogin from "./CardLogin";
import "./styles.css";
const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Divulgue seus produtos no DS catalog</h1>
        <p>
          Faça parte do nosso catálogo de divulgação e aumente a venda dos seus
          produtos.
        </p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Routes>
          <Route path="/login" element={<CardLogin />} />
          <Route path="/signup" element={<h1>Card de signup</h1>} />
          <Route path="/recover" element={<h1>Card de recover</h1>} />
          <Route
            path="*"
            element={<Navigate to="/admin/auth/login" replace />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
