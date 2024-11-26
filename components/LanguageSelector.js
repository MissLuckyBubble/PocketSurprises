import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import colors from "../constants/Colors";

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const languages = [
    {
      code: "en",
      name: "English",
      flag: require("../assets/images/flags/en.png"),
    },
    {
      code: "es",
      name: "Español",
      flag: require("../assets/images/flags/es.png"),
    },
    {
      code: "bg",
      name: "Български",
      flag: require("../assets/images/flags/bg.png"),
    },
    {
      code: "de",
      name: "Deutsch",
      flag: require("../assets/images/flags/de.png"),
    },
  ];

  return (
    <View style={styles.languageContainer}>
      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          onPress={() => onLanguageChange(lang.code)}
          style={[
            styles.languageButton,
            selectedLanguage === lang.code && styles.selectedLanguageButton,
          ]}
        >
          <Image source={lang.flag} style={styles.languageIcon} />
          <Text style={styles.languageText}>{lang.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  languageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    width: "100%",
  },
  languageButton: {
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  selectedLanguageButton: {
    borderColor: colors.primaryGreen,
    borderWidth: 2,
  },
  languageIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    borderRadius: 25,
    borderColor: colors.primaryBrown,
    borderWidth: 1,
  },
  languageText: {
    fontSize: 14,
    color: colors.primaryBrown,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LanguageSelector;
