import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";

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

const styles = StyleSheet.create({});
