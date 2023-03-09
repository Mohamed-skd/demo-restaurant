import { CTA, Lorem } from "../incs/incs.js";
import style from "./style.module.scss";

export default function HomePage() {
  const { welcome, history, access } = style;
  return (
    <main>
      <section id={welcome}>
        <h2>Bienvenue !</h2>

        <div className="flex">
          <figure>
            <img src="imgs/home-3.jpg" alt="Le restaurant" />
          </figure>
          <Lorem />
        </div>

        <CTA />
      </section>

      <section id={history}>
        <h2>Notre histoire</h2>

        <article className="clear-float">
          <h3>Lorem, ipsum.</h3>

          <img src="imgs/home-2.jpg" alt="Une femme qui mange" />
          <Lorem />
        </article>

        <article>
          <h3>Lorem, ipsum.</h3>

          <Lorem />
        </article>

        <article className="clear-float">
          <h3>Lorem, ipsum.</h3>

          <img src="imgs/home-1.jpg" alt="Un cuisinier" />
          <Lorem />
        </article>

        <CTA />
      </section>

      <section id={access}>
        <article>
          <h3>Plan et acces</h3>

          <iframe
            width="100%"
            height="300px"
            allowFullScreen
            src="//umap.openstreetmap.fr/fr/map/carte-chez-momo_881816?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"
          ></iframe>
          <p>
            <a
              className="link"
              href="//umap.openstreetmap.fr/fr/map/carte-chez-momo_881816"
            >
              Voir en plein écran
            </a>
          </p>

          <aside>
            <p>
              <strong>Au plaisir de vous accueillir :</strong>
            </p>

            <ul>
              <li>Allée du fleuve</li>
              <li>7 rue de l'imaginaire</li>
              <li>33000 Bordeaux.</li>
            </ul>

            <ul>
              <li>
                <strong>Du Lundi au Samedi</strong>
              </li>
              <li>
                <strong>De 09h00 à 22h00.</strong>
              </li>
            </ul>
          </aside>
        </article>

        <article>
          <h3>Contact</h3>

          <ul>
            <li>
              <a className="link" href="tel:+123456789">
                📞 01 23 45 67 89
              </a>
            </li>
            <li>
              <a className="link" href="mailto:ok@pk.fr">
                ✉️ ipsumlorem@test.fr
              </a>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
