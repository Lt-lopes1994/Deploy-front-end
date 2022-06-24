import React, { useEffect } from "react";
import CardClients from "../../Components/CardClientsHomePage";
import CardHome from "../../Components/CardHomePage";
import CardResume from "../../Components/CardResumeHomePage";
import Header from "../../Components/Header";
import NotificationTable from "../../Components/NotificationTable";
import SideBar from "../../Components/SideBar";
import TableHome from "../../Components/TableHome/index.jsx";

import api from "../../Services/api";
import "./style.css";

export default function Home() {
  const [allUpToDateCustomers, setAllUpToDateCustomers] = React.useState([]);
  const [allDeliquentCustomers, setAllDeliquentCustomers] = React.useState([]);
  const [upToDateCustomers, setUpToDateCustomers] = React.useState([]);
  const [deliquentClients, setDeliquentClients] = React.useState([]);
  const [allAnticipatedCharges, setAllAnticipatedCharges] = React.useState([]);
  const [allOverdueBills, setAllOverdueBills] = React.useState([]);
  const [allPaidBills, setAllPaidBills] = React.useState([]);
  const [highlightsOverdue, setHighlightsOverdue] = React.useState([]);
  const [highlightsExpected, setHighlightsExpected] = React.useState([]);
  const [highlightsPaid, setHighlightsPaid] = React.useState([]);
  const [bills, setBills] = React.useState({
    chargesPaid: 0,
    chargesUnpaid: 0,
    chargesAnticipated: 0,
  });

  async function getTotalAmountCharges() {
    const response = await api.get("/totalAmountAllCharges");

    setBills({
      chargesPaid: response.data.totalAmountBillsPaid,
      chargesUnpaid: response.data.totalAmountExpectedAccounts,
      chargesAnticipated: response.data.totalAmountOverdueCharges,
    });
  }

  async function highlightsOverdueData() {
    try {
      const response = await api.get("/highlightsOverdueCollections");

      const overdueBills = response.data.map((item) => Object.values(item));

      setHighlightsOverdue(overdueBills);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function highlightsExpectedChargesData() {
    try {
      const response = await api.get("/highlightsExpectedCharges");

      const expectedCharges = response.data.map((item) => Object.values(item));

      setHighlightsExpected(expectedCharges);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function highlightsPaidChargesData() {
    try {
      const response = await api.get("/highlightsPaidCharges");

      const paidCharges = response.data.map((item) => Object.values(item));

      setHighlightsPaid(paidCharges);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function allPaidChargesData() {
    try {
      const response = await api.get("/allChargesPaid");

      const allPaidCharges = response.data.map((item) => Object.values(item));

      setAllPaidBills(allPaidCharges);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function allOverdueChargesData() {
    try {
      const response = await api.get("/allOverdueCharges");

      const allOverdueCharges = response.data.map((item) =>
        Object.values(item)
      );

      setAllOverdueBills(allOverdueCharges);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function allAnticipatedChargesData() {
    try {
      const response = await api.get("/allAnticipatedCharges");

      const allAnticipatedCharges = response.data.map((item) =>
        Object.values(item)
      );

      console.log(allAnticipatedCharges);

      setAllAnticipatedCharges(allAnticipatedCharges);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function highlightsDeliquentCustomersData() {
    try {
      const response = await api.get("/delinquentCustomerHighligths");

      const deliquentCustomers = response.data.data.map((item) =>
        Object.values(item)
      );

      setDeliquentClients(deliquentCustomers);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function highlightsUpTodDateCustumersData() {
    try {
      const response = await api.get("/highlightsCustomersUpToDate");

      const upToDateCustomers = response.data.map((item) =>
        Object.values(item)
      );

      setUpToDateCustomers(upToDateCustomers);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function allDeliquentCustomersData() {
    try {
      const response = await api.get("/allDelinquentCustomers");

      const allDeliquentCustomers = response.data.map((item) =>
        Object.values(item)
      );

      setAllDeliquentCustomers(allDeliquentCustomers);
    } catch (error) {}
  }

  async function allUpToDateCustomersData() {
    try {
      const response = await api.get("/allCustomersUpToDate");

      const allUpToDateCustomers = response.data.data.map((item) =>
        Object.values(item)
      );

      setAllUpToDateCustomers(allUpToDateCustomers);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getTotalAmountCharges();
    allUpToDateCustomersData();
    allDeliquentCustomersData();
    allAnticipatedChargesData();
    allOverdueChargesData();
    allPaidChargesData();
    highlightsOverdueData();
    highlightsExpectedChargesData();
    highlightsPaidChargesData();
    highlightsDeliquentCustomersData();
    highlightsUpTodDateCustumersData();
  }, []); //eslint-disable-line

  const notificantionsConfigs = [
    {
      notificationNumber: allOverdueBills.length,
      backGroundColor: "#FFEFEF",
      color: "#971D1D",
    },
    {
      notificationNumber: allAnticipatedCharges.length,
      backGroundColor: "#FCF6DC",
      color: "#C5A605",
    },
    {
      notificationNumber: allPaidBills.length,
      backGroundColor: "#EEF6F6",
      color: "#1FA7AF",
    },
    {
      notificationNumber: allDeliquentCustomers.length,
      backGroundColor: "#FFEFEF",
      color: "#971D1D",
    },
    {
      notificationNumber: allUpToDateCustomers.length,
      backGroundColor: "#EEF6F6",
      color: "#1FA7AF",
    },
  ];

  return (
    <div className="containerHome">
      <SideBar selected={0} />
      <div className="containerHomeContent">
        <header>
          <Header title="Resumo das cobranças" />
        </header>
        <div className="containerHomeCards">
          <CardResume
            backGroundColor="#EEF6F6"
            status={0}
            value={bills.chargesUnpaid}
          />
          <CardResume
            backGroundColor="#FFEFEF"
            status={1}
            value={bills.chargesAnticipated}
          />
          <CardResume
            backGroundColor="#FCF6DC"
            status={2}
            value={bills.chargesPaid}
          />

          {highlightsOverdue.length > 0 && (
            <CardHome title="Cobranças Vencidas">
              <NotificationTable config={notificantionsConfigs[0]} />
              <TableHome
                titles={["Cliente", "Id da cob.", "Valor"]}
                dataTable={highlightsOverdue}
              />
            </CardHome>
          )}

          {highlightsExpected.length > 0 && (
            <CardHome title="Cobranças Previstas">
              <NotificationTable config={notificantionsConfigs[1]} />
              <TableHome
                titles={["Cliente", "Id da cob.", "Valor"]}
                dataTable={highlightsExpected}
              />
            </CardHome>
          )}

          {highlightsPaid.length > 0 && (
            <CardHome title="Cobranças Pagas">
              <NotificationTable config={notificantionsConfigs[2]} />
              <TableHome
                titles={["Cliente", "Id da cob.", "Valor"]}
                dataTable={highlightsPaid}
              />
            </CardHome>
          )}

          {deliquentClients.length > 0 && (
            <CardClients defaulter={true}>
              <NotificationTable config={notificantionsConfigs[3]} />
              <TableHome
                titles={["Cliente", "Data de venc.", "Valor"]}
                dataTable={deliquentClients}
              />
            </CardClients>
          )}

          {upToDateCustomers.length > 0 && (
            <CardClients defaulter={false}>
              <NotificationTable config={notificantionsConfigs[4]} />
              <TableHome
                titles={["Cliente", "Data de venc.", "Valor"]}
                dataTable={upToDateCustomers}
              />
            </CardClients>
          )}
        </div>
      </div>
    </div>
  );
}
