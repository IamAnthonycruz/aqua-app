import { Dimensions, StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import { useState } from "react";
import WeeklyBarChart from "./weekly-bar-chart";
import { data } from "../constants";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
import Slider from "@react-native-community/slider";
const SettingScreenDetails = () => {
  const [girlyMode, setGirlyMode] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsLight: require("../../assets/fonts/Poppins-Light.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
    Lato: require("../../assets/fonts/Lato-Regular.ttf"),
  });
  const [sliderState, setSliderState] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.blueContainer}></View>
      <View style={styles.whiteContainer}>
        <View style={styles.contentContainer}>
          <Text
            style={{
              paddingTop: 0,
              fontFamily: "PoppinsSemiBold",
              color: "black",
              fontSize: 15,
            }}
          >
            cutie patootie girlie mode
          </Text>
          <Switch
            value={girlyMode}
            onValueChange={() => setGirlyMode((prev) => !prev)}
            trackColor={{ false: "#767577", true: "lightblue" }}
            thumbColor={"#45c7ff"}
          ></Switch>
        </View>
        <View style={{ paddingLeft: 30 }}>
          <Text
            style={{
              textAlign: "left",
              fontSize: 15,
              fontFamily: "PoppinsSemiBold",
              color: "black",
            }}
          >
            notification frequency in hours:
          </Text>
          <Slider
            style={{ width: width * 0.7, height: 60, marginLeft: -10 }}
            minimumValue={0.5}
            maximumValue={2}
            step={0.5}
            value={sliderState}
            onValueChange={(value) => setSliderState(value)}
            minimumTrackTintColor="#45c7ff"
            maximumTrackTintColor="black"
          />
          <Text
            style={{
              fontSize: 25,
              color: "#45c7ff",
              textAlign: "left",
              fontFamily: "PoppinsBold",
            }}
          >
            {sliderState.toString().slice(0.5, 3)} hours
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SettingScreenDetails;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  blueContainer: {
    height: height / 4,
    backgroundColor: "#45c7ff",
  },
  whiteContainer: {
    height: height,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    marginTop: -61,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});
