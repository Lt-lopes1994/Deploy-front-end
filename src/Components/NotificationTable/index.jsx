import React from "react";
import "./style.css";

export default function NotificationTable({ config }) {
  const { backGroundColor, color, notificationNumber } = config;
  return (
    <div
      className="containerNotification"
      style={{ backgroundColor: backGroundColor, color: color }}
    >
      <h1>{notificationNumber}</h1>
    </div>
  );
}
