import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import colors from "../constants/Colors";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../constants/firebase";
import i18n from "../constants/i18n";
import LanguageSelector from "./LanguageSelector";

const SettingsModal = ({ visible, onClose }) => {
  const router = useRouter();

  const [language, setLanguage] = useState(i18n.language);

  const chooseLanguage = (lang) => {
    i18n.changeLanguage(lang);

    setLanguage(lang);
  };

  const handleLogout = () => {
    Alert.alert(i18n.t("logout"), i18n.t("logout_confirm"), [
      {
        text: i18n.t("cancel"),
        style: "cancel",
      },
      {
        text: i18n.t("logout"),
        style: "destructive",
        onPress: async () => {
          try {
            await signOut(auth);
            router.replace("/auth/login");
          } catch (error) {
            console.error(
              i18n.t("logout") + " " + i18n.t("error"),
              error.message
            );
          }
        },
      },
    ]);
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{i18n.t("settings")}</Text>
          <LanguageSelector
            selectedLanguage={language}
            onLanguageChange={chooseLanguage}
          />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>{i18n.t("logout")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeText}>{i18n.t("close")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: colors.primaryGreen,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.crema,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: colors.crema,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutText: {
    color: colors.primaryGreen,
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: colors.primaryGold,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginBottom: 15,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeText: {
    color: colors.primaryBrown,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsModal;
