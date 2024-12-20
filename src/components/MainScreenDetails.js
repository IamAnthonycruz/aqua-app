import React, { useState } from "react";
import WaterBottleIcon from "../../assets/svg/WaterBottleIcon";
import { View, Text, Pressable, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import Header from "./Header";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
const MainScreenDetails = () => {
  const [waterBreak, setWaterBreak] = useState(0);
  const [waterDrunk, setWaterDrunk] = useState(false);
  const [undoVisible, setUndoVisible] = useState(false);

  const handlePress = () => {
    if (!waterDrunk) {
      setWaterBreak((prev) => prev + 1);
      setWaterDrunk(true);
      setUndoVisible(true);

      // Auto-reset after 5 seconds
      setTimeout(() => {
        setWaterDrunk(false);
        setUndoVisible(false);
      }, 5000);
    }
  };

  const handleUndo = () => {
    setWaterBreak((prev) => Math.max(prev - 1, 0)); // Prevent negative numbers
    setWaterDrunk(false);
    setUndoVisible(false);
  };

  const formattedNumber = waterBreak.toString().padStart(2, "0");
  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  return (
    <View style={styles.container}>
      <Header waterDrunk={waterDrunk} />
      <View style={styles.content}>
        <View style={styles.icon}>
          <Pressable onPress={handlePress}>
            <WaterBottleIcon width={200} height={330} />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.dateText}>Today</Text>
          <Text style={styles.waterBreakText}>{formattedNumber}</Text>
          <Text style={styles.reminderText}>water breaks</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        {undoVisible && (
          <Pressable style={styles.button} onPress={handleUndo}>
            <Text style={styles.undoText}>
              <FontAwesome name="undo" size={24} color="#45c7ff" />
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default MainScreenDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: -50,
  },

  content: {
    marginTop: 150,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: width,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "white",
    backgroundColor: "white",
  },
  icon: {
    position: "relative",
    top: 70,
  },
  textContainer: {
    paddingRight: 50,
    paddingBottom: 30,
  },
  dateText: {
    fontSize: 25,
    color: "#45c7ff",
    fontWeight: "100",
    marginTop: 150,
    marginLeft: 20,
    marginBottom: 5,
    fontFamily: "PoppinsSemiBold",
  },
  waterBreakText: {
    fontSize: 50,
    fontWeight: "10",
    marginLeft: 25,
    fontFamily: "PoppinsBold",
  },
  reminderText: {
    color: "#bddbe1",
    fontSize: 15,
    marginLeft: 15,
    fontFamily: "Poppins",
  },
  footerContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    // Undo button color
    marginLeft: 40,
    width: 100,
    padding: 10, // Horizontal padding to make it wider
    borderRadius: 10,
    borderColor: "#45c7ff",
    backgroundColor: "white",
    borderWidth: 2, // Rounded corners // Add some space above the button

    // Center the button horizontally
  },
  undoText: {
    color: "#45c7ff",
    fontSize: 18,
    fontWeight: "light",
    textAlign: "center",
    fontFamily: "Poppins",
    // Ensures the text is centered inside the button
  },
});
