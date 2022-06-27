import axios from "axios";

export default axios.create({
  baseURL: "https://nameless-project.herokuapp.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
