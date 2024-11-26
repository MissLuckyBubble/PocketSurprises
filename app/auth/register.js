import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../constants/firebase";
import colors from "../../constants/Colors";
import i18n from "../../constants/i18n";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import AppIcon from "../../components/AppIcon";

const RegisterScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert(i18n.t("error"), i18n.t("please_fill_fields"));
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert(i18n.t("success"), i18n.t("acc_created"));
      router.push("main/home");
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
            <AppIcon />
          </SafeAreaView>
          <View style={styles.ContentConteiner}>
            <Text style={styles.title}>{i18n.t("register")}</Text>
            <TextInput
              placeholder={i18n.t("email")}
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <TextInput
              placeholder={i18n.t("password")}
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
            />
            <Text style={styles.terms}>
              {i18n.t("by_registering")}{" "}
              <Text
                style={styles.link}
                onPress={() => router.push("privacy/t&c")}
              >
                {i18n.t("t&c")}
              </Text>{" "}
              {i18n.t("and")}{" "}
              <Text
                style={styles.link}
                onPress={() => router.push("privacy/pp")}
              >
                {i18n.t("privacy_policy")}
              </Text>
            </Text>
            <TouchableOpacity
              onPress={handleRegister}
              style={styles.registerButton}
              disabled={loading}
            >
              <Text style={styles.registerText}>
                {loading ? i18n.t("loading") : i18n.t("register")}
              </Text>
            </TouchableOpacity>
            <Text style={styles.loginLink}>
              {i18n.t("already_have_account")}{" "}
              <Text
                onPress={() => router.push("auth/login")}
                style={styles.link}
              >
                {i18n.t("login")}
              </Text>
            </Text>
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
    backgroundColor: colors.crema,
    flex: 1,
  },
  ContentConteiner: {
    flex: 1,
    backgroundColor: colors.primaryGreen,
    paddingTop: 8,
    paddingHorizontal: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.crema,
    marginBottom: 8,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: colors.primaryBrown,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "white",
  },
  terms: {
    fontSize: 14,
    color: colors.crema,
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    color: colors.primaryGold,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  registerButton: {
    backgroundColor: colors.crema,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  registerText: {
    color: colors.primaryGreen,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginLink: {
    fontSize: 14,
    color: colors.crema,
    textAlign: "center",
  },
});

export default RegisterScreen;
