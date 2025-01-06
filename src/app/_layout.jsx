import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SVGComponent from "../../assets/svg/LogoIcon";
import Profile from "../../assets/svg/profile";
import { useFonts } from "expo-font";
const _layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsLight: require("../../assets/fonts/Poppins-Light.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
    Lato: require("../../assets/fonts/Lato-Regular.ttf"),
  });
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
          title: "",
          headerStyle: {
            backgroundColor: "#45c7ff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerLeft: () => (
            <Text
              style={{
                color: "white",
                paddingTop: 30,
                paddingLeft: 20,
                fontSize: 17,
                fontFamily: "PoppinsSemiBold",
              }}
            >
              dashboard
            </Text>
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
        name="settings"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#45c7ff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerLeft: () => (
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                color: "white",
                paddingTop: 30,
                paddingLeft: 20,
                fontSize: 20,
              }}
            >
              settings
            </Text>
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
