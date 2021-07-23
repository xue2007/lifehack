import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,Text
} from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components";
import mainMenuTabs from "../constants/mainMenuTabs";
const { width } = Dimensions.get("screen");

const createTwoButtonAlert = () =>
  Alert.alert("Alert Title", "My Alert Msg", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <Block flex row>
            <Card
              item={mainMenuTabs[0]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={mainMenuTabs[1]} />
          </Block>
          <Block flex row>
            <Card
              item={mainMenuTabs[2]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={mainMenuTabs[3]} />
          </Block>
          <Block flex row>
            <Card item={mainMenuTabs[4]} onPress={createTwoButtonAlert} />
          </Block>
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Home;
