import React from "react";
import "./style.css";
import "../../Styles/margin.css";

export default function CardHome({ children, title }) {
  return (
    <div className="containerCards">
      <div className="card">
        <div className="cardHeader mb-20">
          <span>{title}</span>
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
