import { Link } from "react-router-dom";
import style from "./style.module.scss";

export default function PageNav() {
  return (
    <nav>
      <Link className="link" to={"/"}>
        Accueil
      </Link>
      <Link className="link" to={"menu"}>
        Carte
      </Link>
    </nav>
  );
}
