import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Platform, StatusBar as RNStatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { STYLE_CONSTANTS } from "./src/constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens";

const Stack = createNativeStackNavigator();

const Routing: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" translucent />
      {Platform.OS === "android" && (
        <View
          style={{
            height: RNStatusBar.currentHeight,
            backgroundColor: STYLE_CONSTANTS.COLORS.ACCENT_BG,
          }}
        />
      )}

      <SafeAreaView
        style={{ flex: 1, backgroundColor: STYLE_CONSTANTS.COLORS.PRIMARY_BG }}
        edges={["bottom"]}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={"Home"}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Routing;
