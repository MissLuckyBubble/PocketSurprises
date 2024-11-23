import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import markdownContent from "../../../assets/Privacy/pp_en.js";
import Markdown from "react-native-markdown-display";

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <Markdown>{markdownContent}</Markdown>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default PrivacyPolicy;
