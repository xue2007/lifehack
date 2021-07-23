import React from "react";
import axios from "axios";
import SoundPlayer from "react-native-sound-player";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  Button,
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
//argon
import { articles, Images, argonTheme } from "../constants/";
import { CardDetails } from "../components/";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Vaccinations @ Community Centre",
    description: "People waiting for their vaccinations",
    image:
      "https://s.yimg.com/os/creatr-uploaded-images/2021-02/23ca1830-75cb-11eb-b7b9-5780170dd72d",
    price: "",
  },
  {
    title: "Covid Charity Event",
    description: "Community package for the needy",
    image:
      "data:image/jpeg;base64,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",
    price: "",
  },
];

class ArticleDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articleData: [] };
  }

  renderProduct = (item, index) => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        // onPress={() => navigation.navigate("Pro", { product: item })}
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

  renderCards = () => {
    console.log("State: ", this.state.articleData);
    console.log("item details :" + this.props.route.itemParam);
    return (
      <Block flex style={styles.group}>
        <Text bold size={30} style={styles.title}>
          {articles[0].title}
        </Text>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <CardDetails item={articles[0]} full />
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderCards()}
          {/* {this.renderAlbum()} */}
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
});

export default ArticleDetails;
