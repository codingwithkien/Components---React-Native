import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/LogIn'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='Welcome' options={{headerShown: false}}  component={WelcomeScreen} />
            <Stack.Screen name='SignUp' options={{headerShown: false}}  component={SignUp} />
            <Stack.Screen name='LogIn' options={{headerShown: false}}  component={LogIn} />
            <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation