import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SettingScreenDetails from "../components/SettingScreenDetails";
import WeeklyBarChart from "../components/weekly-bar-chart";

const settings = () => {
  return (
    <View>
      <SettingScreenDetails />
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({});
