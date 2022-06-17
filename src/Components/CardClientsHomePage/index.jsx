import React from "react";
import "./style.css";
import "../../Styles/margin.css";
import DefaulterClientIcon from "../../Assets/icons/DefaulterClientIcon.svg";
import NonDefaulterClientIcon from "../../Assets/icons/NonDefaulterClientIcon.svg";
import "../../Styles/margin.css";

export default function CardHome({ children, defaulter }) {
  const title = defaulter ? "Clientes Inadimplentes" : "Clientes em dia";
  return (
    <div className="containerCards containerCards__width--big">
      <div className="card">
        <div className="cardHeader cardHeader__padding">
          <div className="cardHeaderTitle">
            <img
              src={defaulter ? DefaulterClientIcon : NonDefaulterClientIcon}
              alt="Icone da tabela"
              className="mr-8"
            />
            <span>{title}</span>
          </div>
          {children[0]}
        </div>
        <div className="cardTable mb-18">{children[1]}</div>
        <div className="cardFooter">
          <a href="null">Ver todos</a>
        </div>
      </div>
    </div>
  );
}
