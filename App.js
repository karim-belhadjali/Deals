import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Screen>
  );
}
