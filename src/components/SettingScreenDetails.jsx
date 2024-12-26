import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import WeeklyBarChart from "./weekly-bar-chart";
import { data } from "../constants";
const { height, width } = Dimensions.get("window");
const SettingScreenDetails = () => {
  return (
    <View style={styles.container}>
      <Text>GraphScreenDetails</Text>
      <View style={{ height: 500, justifyContent: "center" }}></View>
    </View>
  );
};

export default SettingScreenDetails;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "white",
  },
  content: {
    marginTop: 107,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "white",
    height: height,
    backgroundColor: "white",
  },
});
