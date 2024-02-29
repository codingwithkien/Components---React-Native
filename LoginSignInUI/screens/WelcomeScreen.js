import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Text style={styles.text_welcome}>Let's Get Started!</Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Image
          source={require("../assets/images/welcome.png")}
          style={styles.dimension}
        />
      </View>
      <View style={{ marginTop: 90, flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.text_button}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <Text style={{ color: "#000", marginLeft: 5, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#877dfa",
    alignItems: "center",
    justifyContent: "center",
  },
  text_welcome: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  dimension: {
    width: 350,
    height: 350,
    marginTop: 120,
  },
  button: {
    backgroundColor: "yellow",
    padding: 20,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  text_button: {
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
