import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
const Header = ({ waterDrunk }) => {
  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Medium.ttf"),
    Lato: require("../../assets/fonts/Lato-Regular.ttf"),
  });

  return (
    <View style={styles.header}>
      <Text style={styles.statusText}>
        hi carlos{" "}
        <MaterialCommunityIcons name="hand-wave" size={24} color="yellow" />
        {"\n"}
        {!waterDrunk ? "time for a water break!" : "you are now hydrated!"}
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
    fontSize: 20,
    color: "white",
    paddingTop: 30,
    paddingLeft: 20,
    fontFamily: "Poppins",
  },
});
