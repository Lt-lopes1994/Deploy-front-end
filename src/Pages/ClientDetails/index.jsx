import React from "react";
import { useState } from "react";
import "../../Styles/button.css";
import SideBar from "../../Components/SideBar/index.jsx";
import ClientsIcon from "../../Assets/icons/ClientsIcon.svg";
import Header from "../../Components/Header/index.jsx";
import FormAddClient from "../../Components/FormAddClient";
import EditClientIcon from "../../Assets/icons/EditClientIcon.svg";
import PlusIcon from "../../Assets/icons/PlusIcon.svg";
import "./style.css";
import TableClientDetails from "../../Components/TableClientDetails";

import "../../Styles/margin.css";

function ClientDetails() {
  const [showAddClient, setShowAddClient] = useState(false);
  const client = {
    name: "Sara Lage Silva",
    email: "sarasilva@gmail.com",
    cellphone: "71 9 9462 8654",
    cpf: "054 365 255 87",
    address: "Rua das Cornélias; nº 512",
    district: "Oliveiras",
    complement: "Ap: 502",
    cep: "031 654 524 04",
    city: "Salvador",
    uf: "BA"
  };
  return (
    <div className="page-container">
      {showAddClient &&
        <FormAddClient
          setShowAddClient={setShowAddClient}
        />
      }
      <SideBar selected={1} />
      <div className="details-container">
        <Header title="" />
        <div className="headerStage">
          <span className="color--green">Clientes</span>
          <span>{">"}</span>
          <span>Detalhes do cliente</span>
        </div>
        <section className="main-section mt-24">
          <div className="main__header mb-30">
            <img
              src={ClientsIcon}
              alt="Icone de clientes"
              className="clientsIcon mr-16"
            />
            <h2>{client.name}</h2>
          </div>

          <div className="clientData-container mb-24">

            <div className="clientData__header mb-30">
              <h1>Dados do cliente</h1>
              <button className="buttonEditClient">
                <img
                  src={EditClientIcon}
                  alt="Editar Cliente"
                  className="mr-4"
                />
                <h2>Editar Cliente</h2>
              </button>
            </div>

            <div className="flex-align mb-45">
              <div
                className="mr-22"
                style={{ width: "24rem" }}
              >
                <h2 className="mb-8">E-mail</h2>
                <span>{client.email}</span>
              </div>

              <div
                className="mr-40"
                style={{ width: "14rem" }}
              >
                <h2 className="mb-8">Telefone</h2>
                <span>{client.cellphone}</span>
              </div>

              <div>
                <h2 className="mb-8">CPF</h2>
                <span>{client.cpf}</span>
              </div>
            </div>

            <div className="flex-align mb-55">
              <div
                className="mr-22"
                style={{ width: "24rem" }}
              >
                <h2 className="mb-8">Endereço</h2>
                <span>{client.address}</span>
              </div>

              <div
                className="mr-40"
                style={{ width: "14rem" }}
              >
                <h2 className="mb-8">Bairro</h2>
                <span>{client.district}</span>
              </div>

              <div
                className="mr-30"
                style={{ width: "19.2rem" }}
              >
                <h2 className="mb-8">Complemento</h2>
                <span>{client.complement}</span>
              </div>

              <div
                className="mr-16"
                style={{ width: "15rem" }}
              >
                <h2 className="mb-8">CEP</h2>
                <span>{client.cep}</span>
              </div>

              <div
                className="mr-25"
                style={{ width: "12.2rem" }}
              >
                <h2 className="mb-8">Cidade</h2>
                <span>{client.city}</span>
              </div>

              <div>
                <h2 className="mb-8">Bairro</h2>
                <span>{client.district}</span>
              </div>
            </div>
          </div>

          <div className="clientData-container clientCharges mb-24">

            <div className="clientData__header mb-20">
              <h1>Cobranças do Cliente</h1>
              <button className="buttonBase buttonAddCharge">
                <img
                  src={PlusIcon}
                  alt="Adicionar cobrança"
                  className="mr-4"
                />
                <h2>Adicionar cobrança</h2>
              </button>
            </div>

            <TableClientDetails />
          </div>
        </section>
      </div >
    </div >
  );
}

export default ClientDetails;
