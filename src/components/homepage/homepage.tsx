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

        <article>
          <h3>Lorem, ipsum.</h3>

          <Lorem />
          <figure>
            <img src="imgs/home-2.jpg" alt="Une femme qui mange" />
          </figure>
        </article>

        <article>
          <h3>Lorem, ipsum.</h3>

          <Lorem />
        </article>

        <article>
          <h3>Lorem, ipsum.</h3>

          <Lorem />
          <figure>
            <img src="imgs/home-1.jpg" alt="Un cuisinier" />
          </figure>
        </article>

        <CTA />
      </section>

      <section id={access}>
        <article>
          <h3>Plan et acces</h3>

          <iframe
            width="100%"
            height="300px"
            src="//umap.openstreetmap.fr/fr/map/carte-sans-nom_881462?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"
          ></iframe>
          <p>
            <a
              className="link"
              href="//umap.openstreetmap.fr/fr/map/carte-sans-nom_881462"
            >
              Voir en plein écran
            </a>
          </p>
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
