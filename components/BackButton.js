import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import colors from "../constants/Colors";
import { useRouter } from "expo-router";

const BackButton = ({ onPress, style }) => {
  const router = useRouter();

  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
      <TouchableOpacity
        onPress={onPress || (() => router.back())}
        style={[styles.backBtn, style]}
      >
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          size={20}
          color={colors.primaryBrown}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    backgroundColor: colors.primaryGold,
    padding: 8,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginLeft: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default BackButton;
