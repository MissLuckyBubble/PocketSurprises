import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import colors from "../../constants/Colors";
import i18n from "../../constants/i18n";

const WelcomeScreen = () => {
  const router = useRouter();

  const [language, setLanguage] = useState(i18n.language);

  const chooseLanguage = (lang) => {
    i18n.changeLanguage(lang);

    setLanguage(lang);
  };

  const goToHome = () => {
    router.push("auth/register"); // Navigate to Home Screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.appIcon}
      />
      <Text style={styles.welcome}>{i18n.t("welcome_message")}</Text>
      <Text style={styles.choose}>{i18n.t("choose_language")}</Text>
      <View style={styles.languageContainer}>
        <TouchableOpacity
          onPress={() => chooseLanguage("en")}
          style={styles.languageButton}
        >
          <Image
            source={require("../../assets/images/flags/en.png")}
            style={styles.languageIcon}
          />
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => chooseLanguage("es")}
          style={styles.languageButton}
        >
          <Image
            source={require("../../assets/images/flags/es.png")}
            style={styles.languageIcon}
          />
          <Text style={styles.languageText}>Español</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => chooseLanguage("bg")}
          style={styles.languageButton}
        >
          <Image
            source={require("../../assets/images/flags/bg.png")}
            style={styles.languageIcon}
          />
          <Text style={styles.languageText}>Български</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => chooseLanguage("de")}
          style={styles.languageButton}
        >
          <Image
            source={require("../../assets/images/flags/de.png")}
            style={styles.languageIcon}
          />
          <Text style={styles.languageText}>Deutsch</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goToHome} style={styles.continueButton}>
        <Text style={styles.continueText}>{i18n.t("continue")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.crema,
    padding: 20,
  },
  appIcon: {
    width: 300,
    height: 225,
    marginBottom: 0,
    borderRadius: 15,
  },
  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primaryGreen,
    marginBottom: 0,
    textAlign: "center",
    fontFamily: "serif",
  },
  choose: {
    fontSize: 20,
    color: colors.primaryBrown,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "serif",
  },
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
  continueButton: {
    marginTop: 30,
    backgroundColor: colors.primaryGreen,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  continueText: {
    color: colors.primaryGold,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "serif",
  },
});

export default WelcomeScreen;
