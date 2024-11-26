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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../constants/firebase";
import colors from "../../constants/Colors";
import i18n from "../../constants/i18n";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import AppIcon from "../../components/AppIcon";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(i18n.t("error"), i18n.t("please_fill_fields"));
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert(i18n.t("success"), i18n.t("login_successful"));
      router.push("main/home");
    } catch (error) {
      Alert.alert(i18n.t("error"), error.message);
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
            <Text style={styles.title}>{i18n.t("login")}</Text>
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
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.loginButton}
              disabled={loading}
            >
              <Text style={styles.loginText}>
                {loading ? i18n.t("loading") : i18n.t("login")}
              </Text>
            </TouchableOpacity>
            <Text style={styles.registerLink}>
              {i18n.t("no_account")}{" "}
              <Text
                onPress={() => router.push("auth/register")}
                style={styles.link}
              >
                {i18n.t("register")}
              </Text>
            </Text>
            <Text
              onPress={() => router.push("auth/forgot-password")}
              style={styles.forgotPasswordLink}
            >
              {i18n.t("forgot_password")}
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
    paddingBottom: 8,
  },
  MainContainer: {
    backgroundColor: colors.crema,
    flex: 1,
  },
  ContentConteiner: {
    flex: 1,
    backgroundColor: colors.primaryGreen,
    paddingTop: 15,
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
  loginButton: {
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
  loginText: {
    color: colors.primaryGreen,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  registerLink: {
    fontSize: 14,
    color: colors.crema,
    textAlign: "center",
  },
  forgotPasswordLink: {
    fontSize: 14,
    color: colors.primaryGold,
    textDecorationLine: "underline",
    textAlign: "center",
    marginBottom: 15,
  },
  link: {
    color: colors.primaryGold,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
