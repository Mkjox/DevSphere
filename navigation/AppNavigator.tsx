import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}