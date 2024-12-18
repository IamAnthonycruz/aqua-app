import React, { useState } from "react";
import WaterBottleIcon from "../../assets/svg/WaterBottleIcon";
import { View, Text, Pressable, Button } from "react-native";
import { StyleSheet } from "react-native";
import { Animated, Sca } from "react-native";
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

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Pressable onPress={handlePress}>
            <WaterBottleIcon width={200} height={450} />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.dateText}>
            {new Date()
              .toLocaleDateString("en-US", {
                weekday: "long",
              })
              .toLowerCase()}
          </Text>
          <Text style={styles.waterBreakText}>{formattedNumber}</Text>
          <Text style={styles.reminderText}>water breaks</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.statusText}>
          {!waterDrunk ? "stay hydrated!" : "Now hydrated!"}
        </Text>
        {undoVisible && (
          <Pressable style={styles.button} onPress={handleUndo}>
            <Text style={styles.undoText}>undo</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default MainScreenDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 20,
  },
  textContainer: {
    marginTop: 0,
    paddingLeft: 10,
  },
  dateText: {
    fontSize: 20,
    color: "#45c7ff",
    fontWeight: "bold",
    marginTop: 150,
    marginLeft: 8,
    marginBottom: 5,
  },
  waterBreakText: {
    fontSize: 60,
    fontWeight: "bold",
    marginLeft: 20,
  },
  reminderText: {
    color: "gray",
    fontSize: 15,
    marginLeft: 15,
  },
  footerContainer: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  statusText: {
    fontWeight: "bold",
    paddingLeft: 30,
    fontSize: 20,
  },
  button: {
    backgroundColor: "white", // Undo button color
    paddingVertical: 10, // Vertical padding to shape it
    paddingHorizontal: 20,
    marginRight: 150, // Horizontal padding to make it wider
    borderRadius: 20,
    borderColor: "#45c7ff",
    borderWidth: 2, // Rounded corners
    marginTop: 20, // Add some space above the button
    alignSelf: "center", // Center the button horizontally
  },
  undoText: {
    color: "#45c7ff",
    fontSize: 18,
    fontWeight: "light",
    textAlign: "center", // Ensures the text is centered inside the button
  },
});
