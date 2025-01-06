import React, { useEffect, useState } from "react";
import WaterBottleIcon from "../../assets/svg/WaterBottleIcon";
import { View, Text, Pressable, Dimensions, Platform } from "react-native";
import { StyleSheet } from "react-native";
import Header from "./Header";
import { useFonts } from "expo-font";
import { Fontisto } from "@expo/vector-icons";
import supabase from "../supabase-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

const { height, width } = Dimensions.get("window");

const MainScreenDetails = () => {
  const [waterBreak, setWaterBreak] = useState(0);
  const [waterDrunk, setWaterDrunk] = useState(false);
  const [undoVisible, setUndoVisible] = useState(false);
  const [deviceId, setDeviceId] = useState(null);

  // Set up device ID on app load
  useEffect(() => {
    const getDeviceId = async () => {
      let storedDeviceId = await AsyncStorage.getItem("deviceId");
      if (!storedDeviceId) {
        storedDeviceId = uuidv4(); // Generate a new device ID
        await AsyncStorage.setItem("deviceId", storedDeviceId); // Store it
      }
      setDeviceId(storedDeviceId);
    };

    getDeviceId();
  }, []);

  // Fetch the dnata for the current device once deviceId is available
  useEffect(() => {
    if (deviceId) {
      fetchData();
    }
  }, [deviceId]); // Only fetch data once deviceId is set

  const fetchData = async () => {
    const { data, error, count } = await supabase
      .from("water_taps")
      .select("*", { count: "exact" }) // Count the number of water breaks
      .eq("device_id", deviceId) // Use deviceId for the query
      .eq("date", new Date().toISOString().split("T")[0]); // Filter by today's date
    // Expect a single result

    if (error) {
      console.error("Error fetching water tap data: ", error);
      return;
    }

    // Set the number of water breaks from the result
    setWaterBreak(count ? count : 0);
  };

  const handlePress = async () => {
    if (!waterDrunk) {
      setWaterBreak((prev) => prev + 1); // Increment the water breaks
      setWaterDrunk(true);
      setUndoVisible(true);

      const { error } = await supabase.from("water_taps").insert([
        {
          device_id: deviceId, // Use deviceId for insertion
          timestamp: new Date().toISOString(),
          date: new Date().toISOString().split("T")[0], // Store today's date
        },
      ]);

      if (error) {
        console.error("Error inserting water tap data: ", error);
      }

      // Auto-reset after 5 seconds
      setTimeout(async () => {
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
    PoppinsLight: require("../../assets/fonts/Poppins-Light.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <Header waterDrunk={waterDrunk} />
      <View style={styles.content}>
        <View style={styles.icon}>
          <Pressable onPress={handlePress}>
            <WaterBottleIcon width={200} height={350} />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.dateText}>today</Text>
          <Text style={styles.waterBreakText}>{formattedNumber}</Text>
          <Text style={styles.reminderText}>water breaks</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        {undoVisible && (
          <Pressable style={styles.button} onPress={handleUndo}>
            <Text style={styles.undoText}>
              <Fontisto name="undo" size={24} color="45c7ff" />
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
    backgroundColor: "white",
  },

  content: {
    marginTop: 150,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: width,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: "white",
    backgroundColor: "white",
    marginBottom: 0,
  },
  icon: {
    position: "relative",
    top: 90,
  },
  textContainer: {
    paddingRight: 50,
    position: "relative",
    top: 120,
  },
  dateText: {
    fontSize: 30,
    color: "#45c7ff",
    fontWeight: "100",
    marginLeft: 20,
    paddingTop: 40,
    fontFamily: "PoppinsSemiBold",
  },
  waterBreakText: {
    fontSize: 60,

    marginLeft: 25,
    fontFamily: "PoppinsBold",
  },
  reminderText: {
    color: "#bddbe1",
    fontSize: 17,
    marginLeft: 15,

    fontFamily: "PoppinsLight",
  },
  footerContainer: {
    marginTop: 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    // Undo button color
    marginTop: 60,
    marginLeft: 50,
    width: 100,
    padding: 10, // Horizontal padding to make it wider
    borderRadius: 10,
    borderColor: "#bddbe1",
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
