import React from "react";
import { Slot } from "expo-router";
import { SessionProvider } from "./others/ctx";

export default function RootLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
