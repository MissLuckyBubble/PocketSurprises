import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { useSession } from "./others/ctx";
import LoadingScreen from "./others/loading";

export default function Index() {
  const router = useRouter();
  const { session, isLoading } = useSession();

  useEffect(() => {
    if (!isLoading) {
      if (session) {
        router.replace("/main/home");
      } else {
        router.replace("/Welcome");
      }
    }
  }, [isLoading, session]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return null;
}
