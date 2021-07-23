import React from "react";
import { View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";


const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Quiz extends React.Component {
    render() {
        return (



            <Block middle style={{
                backgroundColor: "lightBlue",
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Block middle>
                    <Text bold size={40} color="#32325D">
                        There are vaccines
                    </Text>
                    <Text bold size={40} color="#32325D">
                        available for
                    </Text>
                    <Text bold size={40} color="#32325D">
                        Covid-19
                    </Text>
                    <Block middle><Text>    </Text></Block>
                    <Block row style={{ marginTop: theme.SIZES.BASE }}>
                        <Button style={{ ...styles.socialButtons, marginRight: 30 }}>
                            <Block row>
                                <Button color="info" style={styles.button}>
                                    YES
            </Button>
                            </Block>
                        </Button>
                        <Button style={styles.socialButtons}>
                            <Block row>
                                <Button color="info" style={styles.button}>
                                    NO
            </Button>
                            </Block>
                        </Button>
                    </Block>
                </Block>
            </Block>

        );
    }
}

const styles = StyleSheet.create({



    profile: {
        // marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
        // marginBottom: -HeaderHeight * 2,
        flex: 1
    },
    profileContainer: {
        width: width,
        height: height,
        padding: 0,
        zIndex: 1
    },
    profileBackground: {
        width: width,
        height: height / 2
    },
    profileCard: {
        // position: "relative",
        padding: theme.SIZES.BASE,
        marginHorizontal: theme.SIZES.BASE,
        marginTop: 65,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2
    },
    info: {
        paddingHorizontal: 40
    },
    avatarContainer: {
        position: "relative",
        marginTop: -80
    },
    avatar: {
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 0
    },
    nameInfo: {
        marginTop: 35
    },
    divider: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#E9ECEF"
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: "center",
        width: thumbMeasure,
        height: thumbMeasure
    }
});

export default Quiz;
