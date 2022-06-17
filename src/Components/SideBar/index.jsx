import React from "react";
import "./style.css";
import HomeIcon from "../../Assets/icons/HomeIcon.svg";
import HomeIconSelected from "../../Assets/icons/HomeIconSelected.svg";
import ClientsIcon from "../../Assets/icons/ClientsIcon.svg";
import ClientsIconSelected from "../../Assets/icons/ClientsIconSelected.svg";
import ChargesIcon from "../../Assets/icons/ChargesIcon.svg";
import ChargesIconSelected from "../../Assets/icons/ChargesIconSelected.svg";

import { useNavigate } from "react-router-dom";

function SideBar({ selected }) {
  const navigate = useNavigate();
  return (
    <div className="sidebar-container">
      <div
        onClick={() => navigate("/home")}
      >
        <img
          src={selected === 0 ? HomeIconSelected : HomeIcon} alt="Home"
        />
        <h2 className={selected === 0 ? "text--pink" : ""}>Home</h2>
        {selected === 0 &&
          <div className="line" />
        }
      </div>
      <div
        onClick={() => navigate("/clients")}
      >
        <img
          src={selected === 1 ? ClientsIconSelected : ClientsIcon}
          alt="Clientes"
        />
        <h2 className={selected === 1 ? "text--pink" : ""}>Clientes</h2>
        {selected === 1 &&
          <div className="line" />
        }
      </div>
      <div
        onClick={() => navigate("/charges")}
      >
        <img
          src={selected === 2 ? ChargesIconSelected : ChargesIcon}
          alt="Cobranças"
        />
        <h2 className={selected === 2 ? "text--pink" : ""}>Cobranças</h2>
        {selected === 2 &&
          <div className="line" />
        }
      </div>
    </div>
  );
}

export default SideBar;
