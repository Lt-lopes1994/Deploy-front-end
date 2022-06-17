import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditHeaderIcon from "../../Assets/icons/EditHeaderIcon.svg";
import ExitHeaderIcon from "../../Assets/icons/ExitHeaderIcon.svg";
import OptionsMenuIcon from "../../Assets/icons/OptionsMenuIcon.svg";
import useGlobalContextProvider from "../../Hooks/useGlobalContextProvider";
import FormEditUser from "../FormEditUser";
import "../../Styles/margin.css";
import "./style.css";

function Header({ title }) {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const { clearToken, clearUser, user } = useGlobalContextProvider();

  function handleLogout() {
    localStorage.removeItem("token");
    clearToken();
    clearUser();
    navigate("/");
  }

  function stringAvatar(name) {
    const toUpperCase = name.toUpperCase();

    const nameArray = toUpperCase.split(" ");

    if (nameArray.length === 1) {
      return {
        children: `${nameArray[0][0]}`,
      };
    } else {
      return {
        children: `${nameArray[0][0]}${nameArray[1][0]}`,
      };
    }
  }

  return (
    <header>
      {showEdit && <FormEditUser setShowEdit={setShowEdit} />}
      <div className="header-border">
        <div>
          <h2 className="header__title">{title}</h2>
        </div>

        <div className="header__side-right">
          <div className="header__circle mr-16">
            <Avatar
              sx={{ color: "#0e8750", fontSize: "1.9rem", fontWeight: "bold" }}
              {...stringAvatar(user.name)}
            />
          </div>

          <h3 className="mr-13 ">{user.name}</h3>

          <img
            src={OptionsMenuIcon}
            alt="Opções do menu"
            className="optionsMenuIcon"
            onClick={() => setShowOptions(!showOptions)}
          />
          {showOptions && (
            <div className="options-container">
              <div className="options__triangle" />

              <div className="option mr-16" onClick={() => setShowEdit(true)}>
                <img src={EditHeaderIcon} alt="Editar" className="mb-8" />

                <h4>Editar</h4>
              </div>

              <div className="option" onClick={() => handleLogout()}>
                <img
                  src={ExitHeaderIcon}
                  alt="Sair"
                  className="option__exit--margin"
                />
                <h4>Sair</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
