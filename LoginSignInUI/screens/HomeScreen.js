import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>HomeScreen</Text>
        <Button
          title="Log out"
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
