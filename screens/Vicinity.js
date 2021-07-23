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
import { articles, tabs, Images, argonTheme } from "../constants/";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
var randomNumber = Math.floor(Math.random() * 30) + 1;

class Vicinity extends React.Component {
  renderProduct = (item, index) => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        onPress={() => navigation.navigate("Quiz", { product: item })}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              {item.price}
            </Text>
            <Text center size={34}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productDescription}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };
  renderRed = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "##FF0000" }}>
        <Text bold size={50}>
          Vicinity Sensor
        </Text>
        <Text size={20} color="white">
          High Risks
        </Text>
      </View>
    );
  };
  renderGreen = () => {
    return (
      <Block flex center style={styles.home} backgroundColor="green">
        <Text bold size={50}>
          Vicinity Sensor
        </Text>
        <Text bold size={50}>
          {randomNumber} Number of people
        </Text>
        <Text size={20} color="white">
          Safe
        </Text>
      </Block>
    );
  };
  renderOrange = () => {
    return (
      <Block flex center style={styles.home} backgroundColor="orange">
        <Text bold size={50}>
          Vicinity Sensor
        </Text>
        <Text bold size={50}>
          {randomNumber} Number of people
        </Text>
        <Text size={20} color="white">
          At Risk
        </Text>
      </Block>
    );
  };

  render() {
    if (randomNumber < 5) {
      return this.renderGreen();
    } else if (randomNumber >= 5) {
      return this.renderOrange();
    } else {
      return this.renderRed();
    }
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Vicinity;
