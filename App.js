import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
  ImageBackground,
  TextInput,
  Switch,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/lists/ListItem";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    // <Screen>
    //   <ListItem
    //     title="Our ListItem and Card components look
    //     terrible if we give them long text. Long text
    //     should be truncated.
    //     To fix this, set the numberOfLines prop of the
    //     Text component. "
    //     subTitle="Our ListItem and Card components look
    //     terrible if we give them long text. Long text
    //     should be truncated.
    //     To fix this, set the numberOfLines prop of the
    //     Text component. "
    //     image={require("./app/assets/mosh.jpg")}
    //     showChevrons
    //   ></ListItem>
    //   <ListItem
    //     title="T2"
    //     subTitle="D2"
    //     image={require("./app/assets/mosh.jpg")}
    //     showChevrons
    //   ></ListItem>
    // </Screen>

    <ListingEditScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    flexDirection: "column",
  },
  topContainer: {
    top: "10%",
    backgroundColor: "tomato",
    height: "20%",
  },
  logo: {
    alignSelf: "center",
    // backgroundColor:"black",
    flex: 1,
  },
  text: {
    alignSelf: "center",
    flex: 1,
  },
  bottomContainer: {
    height: "15%",
    backgroundColor: "#fff",
    top: "65%",
  },
  login: {
    flex: 1,
    backgroundColor: "#fc5c65",
  },
  register: {
    flex: 1,
    backgroundColor: "#4ECDC4",
  },
});
