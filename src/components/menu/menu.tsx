import { MouseEvent, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CTA } from "../incs/incs.js";
import style from "./style.module.scss";

function Meal({ meal }: { meal: Menu.meal }) {
  const { name, desc, img, price, cat } = meal;

  return (
    <article className={style.meal}>
      <img src={`imgs/${img}`} alt={name} />
      <p>
        <em>{cat}</em>
      </p>
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>{price} €</p>
    </article>
  );
}
export default function Menu() {
  const cats = ["Carte", "Petit Déjeuner", "Déjeuner", "Dinner"];
  const meals = useLoaderData() as Menu.meals;
  const [menu, setMenu] = useState([] as Menu.meals);
  const [title, setTitle] = useState("Carte");

  const handleNav = (e: MouseEvent) => {
    const bt = e.target as HTMLButtonElement;
    const cat = bt.textContent!;

    setTitle(cat);
    cat !== "Carte"
      ? setMenu(meals.filter((meal) => meal.cat === cat))
      : setMenu(meals);
  };

  useEffect(() => {
    setMenu(meals);
  }, []);

  return (
    <main>
      <aside className={style.navMenu}>
        {cats.map((elem, key) => (
          <button className="link" onClick={handleNav} key={key}>
            {elem}
          </button>
        ))}
      </aside>

      <section>
        <h2>{title}</h2>

        <div className="grid" id={style.menu}>
          {menu.map((meal) => (
            <Meal key={meal.id} meal={meal} />
          ))}
        </div>
      </section>

      <CTA cta={{ link: "/", content: "Venez vous régaler !" }} />
    </main>
  );
}
