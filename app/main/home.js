import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import SettingsButton from "../../components/SettingsButton";
import SettingsModal from "../../components/SettingsModal";
import { useState } from "react";
import colors from "../../constants/Colors";
import i18n from "../../constants/i18n";
import AppIcon from "../../components/AppIcon";

export default function Home() {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.MainContainer}>
      <SettingsButton onPress={openModal} />
      <SettingsModal visible={isModalVisible} onClose={closeModal} />
      <AppIcon />
      <View style={styles.ContentContainer}>
        <Text style={styles.title}>{i18n.t("my_pocket_surprises")}</Text>
        <TouchableOpacity
          style={[{ backgroundColor: colors.crema }, styles.actionButton]}
          onPress={() => router.push("/received-surprises")}
        >
          <Text style={styles.buttonText}>{i18n.t("received_surprises")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: colors.crema }, styles.actionButton]}
          onPress={() => router.push("/shared-surprises")}
        >
          <Text style={styles.buttonText}>{i18n.t("shared_surprises")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: colors.primaryGold }, styles.actionButton]}
          onPress={() => router.push("/new-advent-calendar")}
        >
          <Text style={styles.buttonText}>{i18n.t("new_advent_calendar")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 25,
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: colors.crema,
  },
  ContentContainer: {
    flex: 1,
    backgroundColor: colors.primaryGreen,
    paddingHorizontal: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.crema,
    marginBottom: 30,
    marginTop: 30,
    textAlign: "center",
  },
  actionButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: colors.primaryGreen,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
