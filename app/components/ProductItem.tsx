import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ProductItem {
  image: string;
  itemName: string;
  price: number;
}

interface ProductItemProps {
  itemInfo: ProductItem;
}

const ProductItem = (props: ProductItemProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={require(props.itemInfo.image)}
        style={{
          height: 150,
          width: 150,
        }}
      />
      <Text>Product name: {props.itemInfo.itemName}</Text>
      <Text>Product price: {props.itemInfo.price}</Text>
    </View>
  );
};

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

export default ProductItem;
