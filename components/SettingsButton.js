import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import colors from "../constants/Colors";
import { useRouter } from "expo-router";

const SettingsButton = ({ onPress, style }) => {
  const router = useRouter();

  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
      <TouchableOpacity onPress={onPress} style={[styles.settingsBtn, style]}>
        <FontAwesomeIcon icon={faCog} size={20} color={colors.primaryBrown} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsBtn: {
    backgroundColor: colors.primaryGold,
    padding: 8,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginRight: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default SettingsButton;
