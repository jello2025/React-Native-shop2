import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
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
});
