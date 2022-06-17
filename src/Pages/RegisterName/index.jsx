import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../Components/Button/index";
import CustomAlert from "../../Components/CustomAlert";
import InputText from "../../Components/InputText";
import useGlobalContextProvider from "../../Hooks/useGlobalContextProvider";
import "./style.css";

export default function RegisterName({
  activeStep,
  setActiveStep,
  name,
  setName,
  email,
  setEmail,
}) {
  const navigate = useNavigate();
  const { error, setError } = useGlobalContextProvider();

  const handleNext = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      setError(true);
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    navigate("/registerPassword");
  };

  function handleCloseAlert() {
    setError(false);
  }

  return (
    <div className="containerRegister">
      <div className="registerRight">
        <form className="registerForm">
          <h1>Adicione seus dados</h1>

          <div className="registerInput">
            <InputText name={"Nome "} value={name} setValue={setName} />

            <InputText name={"E-mail "} value={email} setValue={setEmail} />
          </div>
          <br />
          <Button
            name={"Continuar"}
            handleClick={handleNext}
            handleCloseAlert={handleCloseAlert}
          />
        </form>
        <CustomAlert
          title="Todos os campos são obrigatórios"
          type="error"
          error={error}
        />
        <br />
        <span className="redirectToLogin">
          Já possui conta? Faça seu <Link to="/">Login</Link>
        </span>
        <div className="stepperFooter">
          <div className="horizontalLine first "></div>
          <div className="horizontalLine second faded"></div>
          <div className="horizontalLine third faded"></div>
        </div>
      </div>
    </div>
  );
}
