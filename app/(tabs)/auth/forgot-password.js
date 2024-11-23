import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../constants/firebase";
import colors from "../../../constants/Colors";
import i18n from "../../../constants/i18n";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import BackButton from "../../../components/BackButton";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Success", "Password reset email sent. Check your inbox.");
      router.back();
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.MainContainer}>
          <SafeAreaView style={styles.headContainer}>
            <BackButton />
            <Image
              source={require("../../../assets/images/icon.png")}
              style={styles.appIcon}
            />
          </SafeAreaView>
          <View style={styles.ContentConteiner}>
            <Text style={styles.title}>{i18n.t("forgot_password")}</Text>
            <Text style={styles.description}>
              {i18n.t("forgot_password_instructions")}
            </Text>
            <TextInput
              placeholder={i18n.t("email")}
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={handlePasswordReset}
              style={styles.resetButton}
              disabled={loading}
            >
              <Text style={styles.resetButtonText}>
                {loading ? i18n.t("sending") : i18n.t("send_reset_link")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    padding: 25,
  },
  MainContainer: {
    backgroundColor: colors.primaryGreen,
    flex: 1,
  },
  ContentConteiner: {
    flex: 1,
    backgroundColor: colors.crema,
    paddingTop: 8,
    paddingHorizontal: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  appIcon: {
    width: 300,
    height: 225,
    borderRadius: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primaryGreen,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: colors.primaryBrown,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: colors.primaryBrown,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  resetButton: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  resetButtonText: {
    color: colors.backgroundLight,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ForgotPasswordScreen;
