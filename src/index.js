import React, { Component } from "react";

import { StyleSheet, Text, View, Platform } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "../src/pages/Home";
import Recipe from "./pages/Recipe";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Recipe: { screen: Recipe, path: "recipe/:id" }
  },
  {
    initialRouteName: "Home"
  }
);

// const prefix = "myapp://myapp/";
const prefix = Platform.OS === "ios" ? "https://" : "https://uaufi.com/";

const App = createAppContainer(AppNavigator);

const MainApp = () => <App uriPrefix={prefix} />;

export default MainApp;
