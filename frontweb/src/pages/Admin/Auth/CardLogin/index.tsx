import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonIcon from "components/ButtonIcon";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "AuthContext";
import { requestBackendLogin } from "util/request";
import { saveAuthData } from "util/storage";
import { getTokenData } from "util/auth";
import "./styles.css";

type CredentialsDTO = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
};

const Login = () => {
  const location = useLocation();

  const { from } = (location.state as LocationState) || {
    from: { pathname: "/admin/products" },
  };

  const { setAuthContextData } = useContext(AuthContext);
  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsDTO>();

  const history = useNavigate();

  const onSubmit = (formData: CredentialsDTO) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });

        history(from, { replace: true });
      })
      .catch((error) => {
        setHasError(true);
        console.log("ERRO", error);
      });
  };
  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Email ou senha estão incorretas
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.username ? "is-invalid" : ""
            }`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register("password", {
              required: "Campo obrigatório",
            })}
            type="password"
            className={`form-control base-input ${
              errors.password ? "is-invalid" : ""
            }`}
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <Link to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha
        </Link>
        <div className="login-submit">
          <ButtonIcon text="Fazer login" />
        </div>
        <div className="signup-container">
          <span className="not-registered">Não tem Cadastro?</span>
          <Link to="/admin/auth/signup" className="login-link-register">
            CADASTRAR
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
