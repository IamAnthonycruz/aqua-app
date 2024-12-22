import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SVGComponent from "../../assets/svg/LogoIcon";
import Profile from "../../assets/svg/profile";
const _layout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#45c7ff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerLeft: () => <SVGComponent />,
          headerRight: () => <Profile />,
        }}
      />
      <Tabs.Screen
        name="graph"
        options={{
          title: "graph",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  icon: {
    shadowColor: "red", // Shadow color
    shadowOffset: { width: 10, height: 30 }, // Offset for shadow
    shadowOpacity: 0.5, // Shadow transparency
    shadowRadius: 4, // Shadow blur
    elevation: 5, // S
  },
});
