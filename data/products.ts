type Products = {
  image: string;
  name: string;
  price: number;
  id: number;
};

const products: Products[] = [
  {
    id: 1,
    image: "../assets/images/chocomilk.png",
    name: "Choco milk",
    price: 0.25,
  },
  { id: 2, image: "", name: "Banana milk", price: 0.75 },
  { id: 3, image: "", name: "Strawberry milk", price: 1.5 },
  { id: 4, image: "", name: "Plain milk", price: 0.5 },
];

export default products;
