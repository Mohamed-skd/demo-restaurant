import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import { create } from "zustand";
import HomePage from "./components/homepage/homepage.js";
import PageFooter from "./components/incs/footers.js";
import PageHeader from "./components/incs/headers.js";
import Error from "./components/incs/incs.js";
import PageNav from "./components/incs/navs.js";
import Menu from "./components/menu/menu.js";
import "./style.scss";

function Page() {
  return (
    <>
      <PageHeader />
      <PageNav />
      <Outlet />
      <PageFooter />
    </>
  );
}

// ROUTER
// loader
async function getMeals() {
  try {
    const meals = await fetch("data/menu.json");
    const json = await meals.json();
    return json;
  } catch (err) {
    console.error(err);
    return [];
  }
}
// routes
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Page />} errorElement={<Error />}>
      <Route errorElement={<Error />}>
        <Route index element={<HomePage />} />
        <Route path="menu" loader={getMeals} element={<Menu />} />
      </Route>
    </Route>
  )
);

// STATE MANAGER
export const useStore = create<{}>((set) => ({}));
