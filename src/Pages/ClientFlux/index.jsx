import React from "react";
import { useState } from "react";
import "../../Styles/button.css";
import SideBar from "../../Components/SideBar/index.jsx";
import ClientsIcon from "../../Assets/icons/ClientsIcon.svg";
import PlusIcon from "../../Assets/icons/PlusIcon.svg";
import FilterIcon from "../../Assets/icons/FilterIcon.svg";
import MagnifierIcon from "../../Assets/icons/MagnifierIcon.svg";
import ClientsTable from "../../Components/TableClients/index.jsx";
import Header from "../../Components/Header/index.jsx";
import FormAddClient from "../../Components/FormAddClient";
import "./style.css";
import "../../Styles/margin.css";

function FluxClient() {
  const [showAddClient, setShowAddClient] = useState(false);

  return (
    <div className="flux-container">
      {showAddClient && <FormAddClient setShowAddClient={setShowAddClient} />}

      <SideBar selected={1} />
      <div className="client-container">
        <Header title="" />
        <div className="headerStage">
          <span className="color--green">Clientes</span>
        </div>
        <section className="main-section mt-24">
          <div className="main__header mb-30">
            <img
              src={ClientsIcon}
              alt="Icone de clientes"
              className="clientsIcon mr-16"
            />

            <h2>Clientes</h2>

            <button
              className="buttonBase ml-auto mr-16"
              onClick={() => setShowAddClient(true)}
            >
              <img src={PlusIcon} alt="Adicionar Cliente" className="mr-6" />
              Adicionar cliente
            </button>

            <button className="buttonFilter mr-16">
              <img src={FilterIcon} alt="Filtro" />
            </button>

            <div className="inputSearch-container">
              <input
                className="inputSearch"
                type="text"
                placeholder="Pesquisar"
              />
              <img
                src={MagnifierIcon}
                alt="Pesquisar"
                className="magnifierIcon"
              />
            </div>
          </div>
          <ClientsTable />
        </section>
      </div>
    </div>
  );
}

export default FluxClient;
