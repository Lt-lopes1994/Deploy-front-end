import React from "react";
import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ProgressBarVertical from "./Components/ProgressBar";
import useGlobalContextProvider from "./Hooks/useGlobalContextProvider";
import RegisterName from "./Pages/RegisterName";
import RegisterPassword from "./Pages/RegisterPassword";
import RegisterConcluded from "./Pages/RegisterConcluded";
import Login from "./Pages/Login";
import ClientFlux from "./Pages/ClientFlux";
import ClientDetails from "./Pages/ClientDetails";
import Charges from "./Pages/Charges";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";

const ProtectedRoutes = ({ redirectTo }) => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default function MainRoutes() {
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<ProgressBarVertical activeStep={activeStep} />}>
        <Route
          path="/registerName"
          element={
            <RegisterName
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
            />
          }
        />
        <Route
          path="/registerPassword"
          element={
            <RegisterPassword
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
            />
          }
        />
        <Route
          path="/registerConcluded"
          element={
            <RegisterConcluded
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          }
        />
      </Route>

      <Route path="*" element={<PageNotFound />} />

      <Route element={<ProtectedRoutes redirectTo={"/"} />}>
        <Route path="/home" element={<Home />} />
        <Route path="/clients" element={<ClientFlux />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="/charges" element={<Charges />} />
      </Route>
    </Routes>
  );
}
