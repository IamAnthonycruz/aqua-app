import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
const Header = ({ waterDrunk }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.statusText}>
        hi carlos, {"\n"}
        {!waterDrunk ? "It's time for a water break" : "you are now hydrated!"}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    marginTop: 0,
    width: width,
    height: 300,
    backgroundColor: "#45c7ff",
  },
  statusText: {
    fontWeight: "light",
    fontSize: 25,
    color: "white",
    paddingTop: 30,
    paddingLeft: 20,
  },
});
