import React, { Component } from "react";

import { View, Text, Share } from "react-native";

// import { Container } from './styles';

export default class Recipe extends Component {
  static navigationOptions = {
    title: "Recipe"
  };

  onShare = async () => {
    Share.share(
      {
        message: "https://uaufi.com/recipe/1",
        // url: "https://expo.io/",
        title: "UauFOOOooooooD"
      },
      {
        // Android only:
        dialogTitle: "Say Hello to my Little friend.",
        // iOS only:
        excludedActivityTypes: ["com.apple.UIKit.activity.PostToTwitter"]
      }
    );
  };

  render() {
    const { id } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Hello from Article {id}!</Text>
        <Text onPress={this.onShare}> Compartilhar</Text>
      </View>
    );
  }
}
