import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import CustomAlert from "../../Components/CustomAlert";
import InputPassword from "../../Components/InputPassword";
import InputText from "../../Components/InputText";
import useGlobalContextProvider from "../../Hooks/useGlobalContextProvider";
import api from "../../Services/api";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();
  const { setToken, setUser } = useGlobalContextProvider();

  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = useState("");

  function handleCloseAlert() {
    setError(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (values.password === "" || email === "") {
      setError(true);
      setTitle("Preencha todos os campos ou cadastre-se");
      return;
    }

    if (values.password.length < 8) {
      setError(true);
      setTitle("A senha deve ter no mínimo 8 caracteres");
      return;
    }

    try {
      const response = await api.post("/login", {
        email,
        password: values.password,
      });

      const token = response.data.token;
      const user = response.data.user;

      setUser(user);
      localStorage.setItem("token", token);

      navigate("/home");
    } catch (error) {
      setError(true);
      setTitle("Email ou senha incorretos");
    }
  }

  return (
    <div className="containerLogin">
      <div className="loginLeft">
        <div className="loginLeftContent">
          <h3>Gerencie todos os pagamentos da sua empresa em um só lugar.</h3>
        </div>
      </div>
      <div className="loginRight">
        <form className="loginForm" onSubmit={handleSubmit}>
          <InputText name={"Email"} value={email} setValue={setEmail} />
          <InputPassword name={"Senha"} values={values} setValues={setValues} />
          <span>
            Esqueceu sua senha? <Link to="/">Clique aqui!</Link>
          </span>
          <br />
          <Button name={"Entrar"} type={"submit"} />
        </form>
        <CustomAlert
          title={title}
          type="error"
          error={error}
          handleCloseAlert={handleCloseAlert}
        />
        <br />
        <span>
          Ainda não possui uma conta? <a href="registerName">Cadastre-se</a>
        </span>
      </div>
    </div>
  );
}
