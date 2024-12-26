import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
const Header = ({ waterDrunk }) => {
  const [fontsLoaded] = useFonts({
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
    Poppins: require("../../assets/fonts/Poppins-Light.ttf"),
  });

  return (
    <View style={styles.header}>
      <Text style={styles.statusText}>
        hi <Text style={{ fontFamily: "PoppinsBold" }}>carlos </Text>
        <MaterialCommunityIcons name="hand-wave" size={24} color="yellow" />
        {"\n"}
        {!waterDrunk ? (
          <Text>
            time for a
            <Text style={{ fontFamily: "PoppinsBold" }}> water break</Text>
          </Text>
        ) : (
          <Text>
            <Text>
              You are now{" "}
              <Text style={{ fontFamily: "PoppinsBold" }}>hydrated!</Text>
            </Text>
          </Text>
        )}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    width: width,
    height: 200,
    backgroundColor: "#45c7ff",
  },
  statusText: {
    fontSize: 20,
    color: "white",
    paddingTop: 40,
    paddingLeft: 20,
    fontFamily: "Poppins",
  },
});
