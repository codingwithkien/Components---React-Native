import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}
function User() {
  return (
    <View style={styles.container}>
      <Text>User</Text>
    </View>
  );
}
function Products() {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
    </View>
  );
}

function Setting({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="green" barStyle={{ backgroundColor: "pink" }}>
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={30} color={color} />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Setting"
          options={{
            headerShown: false,
            tabBarLabel: "Setting",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" size={30} color={color} />
            ),
          }}
          component={Setting}
        />

        <Tab.Screen
          name="Products"
          options={{
            headerShown: false,
            tabBarLabel: "Products",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                size={30}
                color={color}
              />
            ),
          }}
          component={Products}
        />

        <Tab.Screen
          name="User"
          options={{
            headerShown: false,
            tabBarLabel: "User",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={30} color={color} />
            ),
          }}
          component={User}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
