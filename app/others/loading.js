import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../../constants/Colors";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primaryGreen} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundLight,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: colors.primaryGreen,
    fontWeight: "bold",
  },
});

export default LoadingScreen;
