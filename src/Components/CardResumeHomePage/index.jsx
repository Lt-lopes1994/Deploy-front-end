import React from "react";
import "./style.css";
import "../../Styles/margin.css";
import ChargesPaidIcon from "../../Assets/icons/ChargesPaidIcon.svg";
import UnpaidChargesIcon from "../../Assets/icons/UnpaidChargesIcon.svg";
import AnticipatedChargesIcon from "../../Assets/icons/AnticipatedChargesIcon.svg";

export default function CardResume({ backGroundColor, status, value, key }) {
  const icons = [ChargesPaidIcon, UnpaidChargesIcon, AnticipatedChargesIcon];
  const titles = ["Pagas", "Vencidas", "Previstas"];

  key = status;

  return (
    <div
      key={key}
      className="containerCardResume"
      style={{ backgroundColor: backGroundColor }}
    >
      <img src={icons[status]} alt="Icone" />
      <div className="conteinerTextCardResume">
        <h2>Cobranças {titles[status]}</h2>
        <h1>R$ {value}</h1>
      </div>
    </div>
  );
}
