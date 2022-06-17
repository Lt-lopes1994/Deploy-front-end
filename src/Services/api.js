import axios from "axios";

const token = localStorage.getItem("token");

export default axios.create({
  baseURL: "https://cobrebem2.herokuapp.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ` + token,
  },
});
