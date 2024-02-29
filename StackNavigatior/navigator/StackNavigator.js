import { createStackNavigator } from "@react-navigation/stack";
import { Text, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Notification"
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

function Notifications() {
  return <Text>Notifications</Text>;
}

function Profile() {
  return <Text>Profile</Text>;
}

function Settings() {
  return <Text>Settings</Text>;
}
function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
