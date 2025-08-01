type Products = {
  image: string;
  name: string;
  price: number;
  id: number;
};

const products: Products[] = [
  {
    id: 1,
    image:
      "https://eshop.kddc.com/image/cache//catalog/123ChocolateMilkKids125ML-en-800x800.png",
    name: "Choco milk",
    price: 0.25,
  },
  {
    id: 2,
    image:
      "https://ebaqala.com/9167-large_default/kdd_banana_flavoured_milk_125ml.jpg",
    name: "Banana milk",
    price: 0.75,
  },
  {
    id: 3,
    image:
      "https://eshop.kddc.com/image/cache//catalog/123StrawberryMilkKids125ML-en-800x800.png",
    name: "Strawberry milk",
    price: 1.5,
  },
  {
    id: 4,
    image:
      "https://eshop.kddc.com/image/cache//catalog/123FullCreamMilkKids125ML-ar-800x800.png",
    name: "Plain milk",
    price: 0.5,
  },
];

export default products;
