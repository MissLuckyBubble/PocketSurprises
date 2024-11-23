import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import markdownContent from "../../../assets/Privacy/tac_en.js";
import Markdown from "react-native-markdown-display";
import { Stack } from "expo-router";
import i18n from "../../../constants/i18n";

const TermsNconditions = () => {
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

export default TermsNconditions;
