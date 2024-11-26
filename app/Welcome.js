import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import colors from "../constants/Colors";
import i18n from "../constants/i18n";
import LanguageSelector from "../components/LanguageSelector";

const WelcomeScreen = () => {
  const router = useRouter();

  const [language, setLanguage] = useState(i18n.language);

  const chooseLanguage = (lang) => {
    i18n.changeLanguage(lang);

    setLanguage(lang);
  };

  const goToHome = () => {
    router.push("auth/register");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.appIcon}
      />
      <Text style={styles.welcome}>{i18n.t("welcome_message")}</Text>
      <Text style={styles.choose}>{i18n.t("choose_language")}</Text>
      <LanguageSelector
        selectedLanguage={language}
        onLanguageChange={chooseLanguage}
      />
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
