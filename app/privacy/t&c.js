import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import markdownContent from "../../assets/Privacy/tac_en";
import Markdown from "react-native-markdown-display";
import BackButton from "../../components/BackButton";

const TermsNconditions = () => {
  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <Markdown>{markdownContent}</Markdown>
      <Text />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default TermsNconditions;
