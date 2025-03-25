export type Dish = {
  id: number;
  name: string;
  description: string;
};

const dishes: Dish[] = [
  {
    id: 1,
    name: "Spagetti Bolognese",
    description: "En klassisk italensk rätt med en mustig Köttfärsås.",
  },
  {
    id: 2,
    name: "Tacos",
    description: "Mexikansk rätt med tortillabröd och valfri fyllning.",
  },
  {
    id: 3,
    name: "Sushi",
    description:
      "Japansk rätt med ris, fisk och grönsaker,serveras ofta med soya.",
  },
  {
    id: 4,
    name: "Falafel",
    description:
      "En vegetarisk rätt från Mellanöstern, friterade bollar av kikärtor.",
  },
  {
    id: 5,
    name: "Pizza Margherita",
    description: "En klassisk pizza meed tomatsås, mozzarella och basilika.",
  },
];

export default dishes;
