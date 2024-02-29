import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const LogIn = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#877dfa", flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Welcome")}
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            source={require("../assets/images/login.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 2,
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <View style={{ marginHorizontal: 50, paddingTop: 40 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Email Address
          </Text>
          <TextInput
            style={{
              backgroundColor: "#ccc",
              padding: 10,
              borderRadius: 10,
              marginTop: 20,
              opacity: 0.6,
            }}
            placeholder="Enter Email"
            value="kienduongtrung@gmail.com"
          />

          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
            Password
          </Text>
          <TextInput
            style={{
              backgroundColor: "#ccc",
              padding: 10,
              borderRadius: 10,
              marginTop: 20,
              opacity: 0.6,
            }}
            placeholder="Enter Email"
            value="kienduongtrung"
            secureTextEntry
          />

          <TouchableOpacity style={{ marginTop: 10 }}>
            <Text style={{ textAlign: "right" }}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              paddingVertical: 16,
              marginTop: 30,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 16 }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            paddingVertical: 10,
            fontSize: 20,
          }}
        >
          Or
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 50,marginRight :50, justifyContent:'space-evenly', marginTop: 20}}>
          <TouchableOpacity style={{padding: 10, backgroundColor: '#ECF3F4', borderRadius: 50}}>
            <Image source={require("../assets/icons/google.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={{padding: 10, backgroundColor: '#ECF3F4', borderRadius: 50}}>
            <Image source={require("../assets/icons/facebook.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={{padding: 10, backgroundColor: '#ECF3F4', borderRadius: 50}}>
            <Image source={require("../assets/icons/apple.png")} />
          </TouchableOpacity>
        </View>
        <View
        style={{
          marginTop: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#000" }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: "#000", marginLeft: 5, fontWeight: "bold" }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 20,
  },
});
