import React from "react";
import {
  Linking,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class WrongQuiz extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.Onboarding}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block middle style={styles.socialConnect}>
                <Text center size={36}>
                  Wrong!
                </Text>
                <Text center size={30}>
                Go through the following article to know more about Covid-19 vaccines!
                </Text>
              </Block>
              <Block flex>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block
                      middle
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Block middle>
                        <Button
                          color="primary"
                          style={{ backgroundColor: argonTheme.COLORS.ERROR }}
                          onPress={() =>
                            Linking.openURL(
                              "https://appointment.vaccine.gov.sg/?gclid=Cj0KCQjw0emHBhC1ARIsAL1QGNf9X2bOrvmX6-_r0xTWWskxKb5PG_YnaQBno-TkWK5MKG18ps4nl-gaAs6aEALw_wcB"
                            ).catch((err) =>
                              console.error("An error occurred", err)
                            )
                          }
                        >
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Covid-19 Vaccines
                          </Text>
                        </Button>
                      </Block>
                      <Block middle>
                        <Text size={14} color={argonTheme.COLORS.BLACK}>
                          or
                        </Text>
                      </Block>
                      <Block middle>
                        <Button
                          color="primary"
                          style={{ backgroundColor: argonTheme.COLORS.WHITE }}
                          onPress={() => navigation.navigate("EndQuiz", {})}
                        >
                          <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                            Continue
                          </Text>
                        </Button>
                      </Block>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.35,
    backgroundColor: "#F4F5F7",
    borderRadius: 10,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA",
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
  },
});

export default WrongQuiz;
