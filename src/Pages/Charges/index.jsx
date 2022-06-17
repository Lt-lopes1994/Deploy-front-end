import React from "react";
import { useState } from "react";
import "../../Styles/button.css";
import SideBar from "../../Components/SideBar/index.jsx";
import FilterIcon from "../../Assets/icons/FilterIcon.svg";
import MagnifierIcon from "../../Assets/icons/MagnifierIcon.svg";
import TableCharges from "../../Components/TableCharges/index.jsx";
import Header from "../../Components/Header/index.jsx";
import FormAddClient from "../../Components/FormAddClient";
import FileIcon from "../../Assets/icons/FileIcon.svg";
import Button from "../../Components/Button";
import "./style.css";
import "../../Styles/margin.css";

function Charges() {
  const [showAddClient, setShowAddClient] = useState(false);
  return (
    <div className="flux-container">
      {showAddClient && <FormAddClient setShowAddClient={setShowAddClient} />}

      <SideBar selected={2} />
      <div className="client-container">
        <Header title="" />
        <div className="headerStage">
          <span className="color--green">Cobranças</span>
        </div>
        <section className="main-section mt-24">
          <div className="main__header mb-30">
            <img
              src={FileIcon}
              alt="Icone de clientes"
              className="clientsIcon mr-16"
            />

            <h2>Cobranças</h2>

            <button className="buttonFilter ml-auto mr-16">
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
          <TableCharges />
        </section>
      </div>
    </div>
  );
}

export default Charges;
