import { Pressable, StyleSheet, Text, View } from "react-native";
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
          headerLeft: () => (
            <Pressable onPress={() => alert("pressed")} style={styles.leftIcon}>
              <SVGComponent />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => alert("pressed")}
              style={styles.rightIcon}
            >
              <Profile />
            </Pressable>
          ),
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
    shadowOffset: { width: 40, height: 50 }, // Offset for shadow
    shadowOpacity: 10, // Shadow transparency
    shadowRadius: 100, // Shadow blur
    elevation: 20, // S
  },
  rightIcon: {
    position: "relative",
    top: 10,
  },
  leftIcon: {
    position: "relative",
    top: 15,
  },
});
