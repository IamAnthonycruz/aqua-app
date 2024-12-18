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
          title: "home",
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: "daily\njournal",
        }}
      />
      <Tabs.Screen
        name="graph"
        options={{
          title: "graph",
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
