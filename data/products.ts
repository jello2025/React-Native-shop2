type Products = {
  image: string;
  name: string;
  price: number;
};

const products: Products[] = [
  { image: "../assets/images/chocomilk.png", name: "Choco milk", price: 0.25 },
  { image: "", name: "Banana milk", price: 0.75 },
  { image: "", name: "Strawberry milk", price: 1.5 },
  { image: "", name: "Plain milk", price: 0.5 },
];

export default products;
