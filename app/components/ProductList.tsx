import products from "@/data/products";
import { StyleSheet, View } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <View>
      {products.map((product) => (
        <ProductItem
          image={product.image}
          itemName={product.name}
          price={product.price}
          key={product.id}
        />
      ))}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
