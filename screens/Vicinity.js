import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
//galio
import { Block, Text, Button as GaButton, theme } from "galio-framework";
//argon

const { width } = Dimensions.get("screen");

var randomNumber = Math.floor(Math.random() * 30) + 1;

class Vicinity extends React.Component {
  renderRed = () => {
    return (
      <Block flex center style={styles.home} backgroundColor="red">
        <Text center bold size={50}>
          Number of people around you: 
        </Text>
        <Text center bold size={50}>
        {randomNumber}
        </Text>
        <Text size={70} color="white" style={styles.text_style}>
          High Risk
        </Text>
      </Block>
    );
  };
  renderGreen = () => {
    return (
      <Block flex center style={styles.home} backgroundColor="green">
        <Text center bold size={50}>
          Number of people around you:
        </Text>
        <Text center bold size={50}>
        {randomNumber}
        </Text>
        <Text size={70} color="white" style={styles.text_style}>
          Safe
        </Text>
      </Block>
    );
  };
  renderOrange = () => {
    return (
      <Block flex center style={styles.home} backgroundColor="orange">
        <Text center bold size={50}>
          Number of people around you: 
        </Text>
        <Text center bold size={50}>
        {randomNumber}
        </Text>
        <Text size={70} color="white" style={styles.text_style}>
          At Risk
        </Text>
      </Block>
    );
  };

  render() {
    if (randomNumber < 5) {
      return this.renderGreen();
    } else if (randomNumber >= 5 && randomNumber < 20) {
      return this.renderOrange();
    } else {
      return this.renderRed();
    }
  }
}

const styles = StyleSheet.create({
  home: {
    paddingTop: 50,
    width: width,
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text_style: {
    color: "white",
    lineHeight: 300,
  },
});

export default Vicinity;
