import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
  Dimensions,
  TouchableOpacity,
} from "react-native";
//galio
import { Block, Text, Button as GaButton, theme } from "galio-framework";
//argon
import { articles, tabs, Images, argonTheme } from "../constants/";
import {
  Card,
  Button,
  Select,
  Icon,
  Input,
  Header,
  Switch,
} from "../components/";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Vaccine Quiz",
    description: "",
    image:
      "https://thumbs.dreamstime.com/b/corona-vaccine-logo-design-very-modern-209601795.jpg",
    price: "100 points",
  },
  {
    title: "Safe Distancing Quiz",
    description: "",
    image:
      "data:image/jpeg;base64,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",
    price: "125 points",
  },
];
const createTwoButtonAlert = () =>
  Alert.alert("Temporarily Unavailable", "Please view Vaccination Quiz instead.", [
    // {
    //   text: "Cancel",
    //   onPress: () => console.log("Cancel Pressed"),
    //   style: "cancel",
    // },
    {
      text: "OK",
      onPress: () => {
        console.log("OK Pressed");
      },
    },
  ]);

class GamePart extends React.Component {
  renderProduct = (item, index) => {
    const { navigation } = this.props;

    if (item.title == "Safe Distancing Quiz") {
      return (
        <TouchableWithoutFeedback
          style={{ zIndex: 3 }}
          key={`product-${item.title}`}
          onPress={createTwoButtonAlert}
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
                size={25}
                
                style={styles.productPrice}
              >
                {item.price}
              </Text>
              <Text center size={34}>
                {item.title}
              </Text>
              <Text
                center
                size={25}
                
                style={styles.productDescription}
              >
                {item.description}
              </Text>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      );
    } else {
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
                size={25}
                
                style={styles.productPrice}
              >
                {item.price}
              </Text>
              <Text center size={34}>
                {item.title}
              </Text>
              <Text
                center
                size={25}
                
                style={styles.productDescription}
              >
                {item.description}
              </Text>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      );
    }
  };

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={50} style={styles.title}>
          Quizzes & Games
        </Text>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Block flex card shadow style={styles.category}>
              <ImageBackground
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Two_red_dice_01.svg/1200px-Two_red_dice_01.svg.png"}}
                style={[
                  styles.imageBlock,
                  { width: width - theme.SIZES.BASE * 2, height: 252 },
                ]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 2,
                  height: 252,
                }}
              >
                <Block style={styles.categoryTitle}>
                  <Text size={34} bold color={theme.COLORS.WHITE}>
                    Random Quiz
                  </Text>
                  <Text size={25} color={theme.COLORS.WHITE}>
                    150 points
                  </Text>
                </Block>
              </ImageBackground>
            </Block>
          </Block>
          <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2,
              }}
            >
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  };

  renderAlbum = () => {
    const { navigation } = this.props;

    return (
      <Block
        flex
        style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
      >
        <Text bold size={50} style={styles.title}>
          Top 3 Scorers
        </Text>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block>
          </Block>

          <Block>
            <Button color="info" style={styles.button}>
              Ah Huat
            </Button>
          </Block>
          <Block >
            <Button color="info" style={styles.button}>
              Ramli
            </Button>
          </Block>
          <Block >
            <Button color="info" style={styles.button}>
              Muthu
            </Button>
          </Block>
          {/* <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {Images.Viewed.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.albumThumb}
                />
              </Block>
            ))}
          </Block> */}
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderCards()}
          {this.renderAlbum()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
    // paddingBottom: theme.SIZES.BASE * 2,
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: 330,
  },
});

export default GamePart;
