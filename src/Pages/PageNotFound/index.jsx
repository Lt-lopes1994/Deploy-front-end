import { Link } from "react-router-dom";
import useGlobalContextProvider from "../../Hooks/useGlobalContextProvider";
import "./style.css";

export default function PageNotFound() {
  const { token } = useGlobalContextProvider();
  return (
    <div className="pageNotFound">
      <Link to={token ? "/home" : "/"}>
        <strong> Voltar a segurança </strong>
      </Link>
    </div>
  );
}
