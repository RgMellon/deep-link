import React, { Component } from "react";

import { View, Text, Share } from "react-native";

// import { Container } from './styles';

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  onShare = () => {
    Share.share({
      title: "test title",
      url: "myapp://article/3",
      message: "Alou criançada"
    });
  };

  render() {
    return <Text onPress={this.onShare}>Share</Text>;
  }
}

export default Home;
