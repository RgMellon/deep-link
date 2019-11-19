import { createAppContainer, createStackNavigator } from "react-navigation";
import React from "react";

import { Platform } from "react-native";

/**
 *  Create stack navigator faz um stack de rotas, onde as rotas
 *  acessadas anteriormente fica salva, podendo assim voltar
 *
 *  Create Switch navigator Não empilha as rotas, então quandoo passo
 *  de uma routa para a outra a rota anterior deixa de existir.
 */
import List from "./pages/List";
import Recipe from "./pages/Recipe";

const Routes = createAppContainer(
  createStackNavigator(
    {
      List,
      Recipe: {
        screen: Recipe,
        path: "recipe/:recipe"
      }
    },
    {
      headerLayoutPreset: "center",
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#7159c1"
        },
        headerTintColor: "#fff"
      }
    }
  )
);

const prefix = Platform.OS === "ios" ? "uaufi://" : "uaufi://uaufi/";

export default () => <Routes uriPrefix={prefix} />;
