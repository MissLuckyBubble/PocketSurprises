import React from "react";
import { Redirect, Stack } from "expo-router";
import { useSession } from "../others/ctx";
import LoadingScreen from "../others/loading";

export default function MainLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!session) {
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
