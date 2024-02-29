import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");
export default function SliderItem({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.img} style={styles.image} resizeMethod="contain" />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },
  image: {
    flex: 0.6,
    width: "100%",
  },
  content: {
    alignItems: "center",
    flex: 0.4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: "#333",
  },
  price: {
    color: '#333',
    fontWeight: "bold",
    fontSize: 32
  }
});
