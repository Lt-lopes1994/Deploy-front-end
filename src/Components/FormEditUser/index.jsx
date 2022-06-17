import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import "../../Styles/margin.css";
import CrossIcon from "../../Assets/icons/CrossIcon.svg";
import OpenEyeIcon from "../../Assets/icons/OpenEyeIcon.svg";
import CloseEyeIcon from "../../Assets/icons/CloseEyeIcon.svg";
import { useState } from "react";
import api from "../../Services/api";

function FormEditUser({ setShowEdit }) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      phone: "",
    },
  });

  async function getUser() {
    try {
      const response = await api.get("/user");

      setValue(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    getUser();
  }); //eslint-disable-line

  const onSubmit = (data) => {
    console.log(data);
  };
  const requiredMessage = "Este campo deve ser preenchido";
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (passwordConfirm) => {
    return (
      passwordConfirm === getValues("password") || "As senhas não coincidem"
    );
  };

  return (
    <div className="modal">
      <div className="editClient">
        <h1 className="mb-32">Edite seu cadastro</h1>
        <img
          className="closeModal"
          src={CrossIcon}
          alt="Fechar"
          onClick={() => setShowEdit(false)}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="position--relative">
            <label htmlFor="name">Nome*</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              className={errors?.name?.type && "inputError"}
              {...register("name", {
                required: requiredMessage,
              })}
            />
            {errors?.name?.type && <span>{errors.name.message}</span>}
          </div>

          <div className="position--relative">
            <label htmlFor="email">E-mail*</label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              className={errors?.email?.type && "inputError"}
              {...register("email", {
                required: requiredMessage,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "E-mail inválido",
                },
              })}
            />
            {errors?.email?.type && <span>{errors.email.message}</span>}
          </div>

          <div className="splitInputs">
            <div className="splitSide position--relative">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                placeholder="Digite seu CPF"
                className={errors?.cpf?.type && "inputError"}
                {...register("cpf")}
              />
            </div>

            <div className="splitSide position--relative">
              <label htmlFor="cellphone">Telefone</label>
              <input
                type="text"
                id="cellphone"
                placeholder="Digite seu Telefone"
                className={errors?.phone?.type && "inputError"}
                {...register("cellphone")}
              />
            </div>
          </div>

          <div className="password-container position--relative">
            <label htmlFor="password">Nova Senha*</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Digite sua nova senha"
              className={errors?.password?.type && "inputError"}
              {...register("password", {
                required: requiredMessage,
              })}
            />
            <img
              src={showPassword ? OpenEyeIcon : CloseEyeIcon}
              alt="Mostrar password"
              className="showPassword"
              onClick={() => setShowPassword(!showPassword)}
            />
            {errors?.password?.type && <span>{errors.password.message}</span>}
          </div>
          <div className="password-container position--relative">
            <label htmlFor="passwordConfirm">Confirmar Senha*</label>
            <input
              type={showPassword ? "text" : "password"}
              id="passwordConfirm"
              placeholder="Confirme a senha"
              className={errors?.passwordConfirm?.type && "inputError"}
              {...register("passwordConfirm", {
                required: requiredMessage,
                validate: validatePassword,
              })}
            />
            <img
              src={showPassword ? OpenEyeIcon : CloseEyeIcon}
              alt="Mostrar password"
              className="showPassword"
              onClick={() => setShowPassword(!showPassword)}
            />
            {errors?.passwordConfirm?.type && (
              <span>{errors.passwordConfirm.message}</span>
            )}
          </div>

          <button className="inputSubmit" type="submit">
            Aplicar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormEditUser;
