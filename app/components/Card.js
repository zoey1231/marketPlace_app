import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function Card(props) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={props.imgSrc}
        style={styles.image}
      ></Image>
      <View style={styles.textContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {props.title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>
          {props.subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
});
export default Card;
