import { Link } from "react-router-dom";
import style from "./style.module.scss";

export default function PageNav() {
  return (
    <nav className="flex">
      <Link className={`link ${style.navLink}`} to={"/"}>
        Accueil
      </Link>
      <Link className={`link ${style.navLink}`} to={"menu"}>
        Carte
      </Link>
    </nav>
  );
}
