import style from "./style.module.scss";

export default function PageFooter() {
  const date = new Date();
  return (
    <footer className="clear-float">
      <a
        title="Github"
        target={"_blank"}
        href="https://github.com/Mohamed-skd/"
        id={style.copyright}
      >
        Tout droit réservé © {date.getFullYear()}
      </a>
    </footer>
  );
}
