import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../constants/firebase";
import colors from "../../constants/Colors";
import LoadingScreen from "../others/loading";

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.email);
        setIsAuthenticated(true);
      } else {
        console.log("User is not logged in.");
        setIsAuthenticated(false);
      }
      console.log("User is auth:", isAuthenticated);
      setIsCheckingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  if (isCheckingAuth) {
    return <LoadingScreen />;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.backgroundLight },
        headerTitleStyle: { fontWeight: "bold", color: colors.primaryGreen },
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        // Render screens for authenticated users
        <Stack.Screen name="home" />
      ) : (
        // Render screens for unauthenticated users
        <>
          <Stack.Screen name="index" />
          <Stack.Screen name="register" />
          <Stack.Screen name="login" />
          <Stack.Screen name="forgot-password" />
          <Stack.Screen name="pp" />
          <Stack.Screen name="t&c" />
        </>
      )}
    </Stack>
  );
}
