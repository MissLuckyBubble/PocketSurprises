import React from "react";
import { Image, StyleSheet } from "react-native";

const AppIcon = ({ style }) => {
  return (
    <Image
      source={require("../assets/images/icon.png")}
      style={[styles.appIcon, style]}
    />
  );
};

const styles = StyleSheet.create({
  appIcon: {
    width: 300,
    height: 225,
    borderRadius: 15,
    marginLeft: 15,
  },
});

export default AppIcon;
