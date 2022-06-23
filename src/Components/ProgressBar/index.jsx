import React from "react";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import "./style.css";

const steps = [
  {
    label: "Cadastre-se",
    description: `Por favor, escreva seu nome e e-mail.`,
  },
  {
    label: "Escolha uma senha",
    description: "Escolha uma senha segura com 8 dígitos.",
  },
  {
    label: "Cadastro realizado com sucesso",
    description: `E-mail e senha cadastrasdos com sucesso.`,
  },
];

export default function VerticalLinearStepper({ activeStep, setActiveStep }) {
  useEffect(() => {}, [activeStep]);

  return (
    <div className="containerContent">
      <div className="contentLeft">
        <Box sx={{ maxWidth: 400, color: "#0e8750" }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step sx={{ color: "#0e8750" }} key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <div className="contentRight">
        <Outlet />
      </div>
    </div>
  );
}
