declare namespace Route {
  interface routeError {
    statusText?: string;
    message?: string;
  }
}

declare namespace Store {}

declare namespace Menu {
  interface meal {
    id: number;
    name: string;
    img: string;
    desc: string;
    cat: string;
    price: number;
  }

  type meals = meal[];
}
