import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import markdownContent from "../../assets/Privacy/pp_en.js";
import Markdown from "react-native-markdown-display";
import BackButton from "../../components/BackButton.js";

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <Markdown>{markdownContent}</Markdown>
      <Text> </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default PrivacyPolicy;
