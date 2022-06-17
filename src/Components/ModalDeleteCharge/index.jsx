import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import "../../Styles/margin.css";
import CrossIcon from "../../Assets/icons/CrossIcon.svg";
import ClientsIcon from "../../Assets/icons/ClientsIcon.svg";
import { useState } from "react";

function FormEditUser({ setShowAddClient }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "milov",
      email: "sora@alimentos.ssa",
      cpf: "000.000.000-00",
      cellphone: "71 9 9999-9999"
    }
  });
  const requiredMessage = "Este campo deve ser preenchido";
  const onSubmit = data => { console.log(data) };

  return (
    <div className="modal">
      <div className="addClient">
        <div className="flex-align mb-15">
          <img
            src={ClientsIcon}
            alt="Icone de Clientes"
            className="mr-22 iconeClients"
          />
          <h1 className="mr-auto">Adicionar cliente</h1>
          <img
            className="closeModal"
            src={CrossIcon}
            alt="Fechar"
            onClick={() => setShowAddClient(false)}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="position--relative">
            <label htmlFor="name">Nome*</label>
            <input
              type="text"
              id="name"
              placeholder="Digite o nome"
              className={errors?.name?.type && "inputError"}
              {...register("name", {
                required: requiredMessage
              })} />
            {errors?.name?.type &&
              <span>{errors.name.message}</span>
            }
          </div>

          <div className="position--relative">
            <label htmlFor="email">E-mail*</label>
            <input
              type="text"
              id="email"
              placeholder="Digite o e-mail"
              className={errors?.email?.type && "inputError"}
              {...register("email", {
                required: requiredMessage,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "E-mail inválido"
                }
              })}
            />
            {errors?.email?.type &&
              <span>{errors.email.message}</span>
            }
          </div>

          <div className="splitInputs">
            <div className="splitSide position--relative">
              <label htmlFor="cpf">CPF*</label>
              <input
                type="text"
                id="cpf"
                placeholder="Digite o CPF"
                className={errors?.cpf?.type && "inputError"}
                {...register("cpf", {
                  required: requiredMessage,
                })}
              />
              {errors?.city?.type &&
                <span>{errors.city.message}</span>
              }
            </div>


            <div className="splitSide position--relative">
              <label htmlFor="cellphone">Telefone*</label>
              <input
                type="text"
                id="cellphone"
                placeholder="Digite o telefone"
                className={errors?.cellphone?.type && "inputError"}
                {...register("cellphone", {
                  required: requiredMessage,
                })}
              />
              {errors?.city?.type &&
                <span>{errors.city.message}</span>
              }
            </div>
          </div>

          <div className="position--relative">
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              placeholder="Digite o endereço"
              className={errors?.address?.type && "inputError"}
              {...register("address")}
            />
          </div>

          <div className="position--relative">
            <label htmlFor="complement">Complemento</label>
            <input
              type="text"
              id="complement"
              placeholder="Digite o complemento"
              className={errors?.complement?.type && "inputError"}
              {...register("complement")}
            />

          </div>

          <div className="splitInputs">
            <div className="splitSide position--relative">
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                placeholder="Digite o CEP"
                className={errors?.cep?.type && "inputError"}
                {...register("cep")}
              />
            </div>


            <div className="splitSide position--relative">
              <label htmlFor="district">Bairro</label>
              <input
                type="text"
                id="district"
                placeholder="Digite o bairro"
                className={errors?.district?.type && "inputError"}
                {...register("district")}
              />
            </div>
          </div>


          <div className="splitInputs">
            <div className="splitSide position--relative">
              <label htmlFor="city">Cidade*</label>
              <input
                type="text"
                id="city"
                placeholder="Digite o cidade"
                className={errors?.city?.type && "inputError"}
                {...register("city", {
                  required: requiredMessage,
                })}
              />
              {errors?.city?.type &&
                <span>{errors.city.message}</span>
              }
            </div>


            <div className="splitSide position--relative">
              <label htmlFor="uf">UF*</label>
              <input
                type="text"
                id="uf"
                placeholder="Digite o UF"
                className={errors?.uf?.type && "inputError"}
                {...register("uf", {
                  required: requiredMessage,
                })}
              />
              {errors?.uf?.type &&
                <span>{errors.uf.message}</span>
              }
            </div>
          </div>

          <div className="buttonsForm">
            <button
              className="buttonCancel"
              type="button"
              onClick={() => setShowAddClient(false)}
            >
              Cancelar
            </button>
            <button className="buttonApply" type="submit">
              Aplicar
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default FormEditUser;
