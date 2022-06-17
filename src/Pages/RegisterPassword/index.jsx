import React from "react";
import Button from "../../Components/Button/index";
import { Link, useNavigate } from "react-router-dom";
import useGlobalContextProvider from "../../Hooks/useGlobalContextProvider";
import InputPassword from "../../Components/InputPassword";
import InputConfirmPassword from "../../Components/InputConfirmPassword";
import { useState } from "react";
import "./style.css";
import CustomAlert from "../../Components/CustomAlert";
import api from "../../Services/api";

export default function RegisterPassword({
  activeStep,
  setActiveStep,
  name,
  setName,
  email,
  setEmail,
}) {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { error, setError } = useGlobalContextProvider();
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const [title, setTitle] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setTitle("");

    if (values.password === "" || values.confirmPassword === "") {
      setError(true);
      setTitle("Todos os campos são obrigatórios");
      return;
    }

    if (values.password !== values.confirmPassword) {
      setError(true);
      setTitle("As senhas não conferem");
      return;
    }

    if (values.password.length < 8) {
      setError(true);
      setTitle("A senha deve ter no mínimo 8 caracteres");
      return;
    }

    try {
      await api.post("/signup", {
        name,
        email,
        password: values.password,
      });

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      navigate("/registerConcluded");
    } catch (error) {
      setTitle("E-mail já cadastrado");
    }
  }

  function handleCloseAlert() {
    setError(false);
  }

  return (
    <div className="containerRegister">
      <div className="registerRight">
        <form className="registerForm" onSubmit={handleSubmit}>
          <h1>Escolha uma senha</h1>

          <div className="registerInput">
            <InputPassword
              name={"Senha"}
              values={values}
              setValues={setValues}
            />

            <InputConfirmPassword
              name={"Repetir senha"}
              values={values}
              setValues={setValues}
            />
          </div>
          <Button name={"Entrar"} type={"submit"} />
        </form>
        <CustomAlert
          title={title}
          type="error"
          error={error}
          handleCloseAlert={handleCloseAlert}
        />
        <br />
        <span className="redirectToLogin">
          Já possui conta? Faça seu <Link to="/">Login</Link>
        </span>
        <div className="stepperFooter">
          <div className="horizontalLine first faded"></div>
          <div className="horizontalLine second "></div>
          <div className="horizontalLine third faded"></div>
        </div>
      </div>
    </div>
  );
}
