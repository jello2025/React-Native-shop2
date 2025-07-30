import products from "@/data/products";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ProductItem from "./components/ProductItem";
export default function Index() {
  const item1 = {
    image: "",
    itemName: "Choco milk",
    price: 3,
  };

  const item2 = {
    image: "",
    itemName: "Banana milk",
    price: 2,
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "pink",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>KDD milk shop</Text>
        <Text style={styles.description}>
          We sell KDD milk...obviously, its says it right there in the title,
          dont y'all read?? gawd.
        </Text>
        <Image
          source={require("../assets/images/kdd.jpg")}
          style={styles.image}
        />
      </View>

      {products.map((product) => (
        <ProductItem
          itemName={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 5,
    marginTop: 30,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    paddingHorizontal: 40,
    gap: 20,
  },
  title: {
    fontSize: 45,
    color: "white",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    textAlign: "center",
  },
  productBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 50,
  },
  card: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
