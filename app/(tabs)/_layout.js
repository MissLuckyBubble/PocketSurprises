import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../constants/firebase";
import colors from "../../constants/Colors";
import LoadingScreen from "../others/loading"; // Import the loading screen

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.email); // Debugging log
        setIsAuthenticated(true); // Set user as authenticated
      } else {
        console.log("User is not logged in."); // Debugging log
        setIsAuthenticated(false); // User is not authenticated
      }
      setIsCheckingAuth(false); // Stop checking auth
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  if (isCheckingAuth) {
    // Show the loading screen while authentication is being checked
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
        <Stack.Screen name="home" />
      ) : (
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
