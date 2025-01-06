import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { data } from "../constants";
import WeeklyBarChart from "./weekly-bar-chart";
const { height, width } = Dimensions.get("window");

const GraphScreenDetails = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsLight: require("../../assets/fonts/Poppins-Light.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
    Lato: require("../../assets/fonts/Lato-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <View style={styles.weeklyTaps}>
        <Text style={styles.totalTaps}>99</Text>
        <Text style={styles.totalTapsText}>Total Weekly Water Breaks</Text>
      </View>

      <View style={styles.content}>
        <View>
          <Text
            style={{
              textAlign: "left",
              paddingLeft: 30,
              paddingTop: 25,
              fontFamily: "PoppinsSemiBold",
              fontSize: 17,
            }}
          >
            water breaks taken daily
          </Text>
          <Text
            style={{
              textAlign: "left",
              paddingLeft: 30,
              paddingTop: 1,
              color: "gray",
              fontFamily: "PoppinsLight",
              fontSize: 15,
              paddingBottom: 25,
            }}
          >
            this week
          </Text>
          <WeeklyBarChart activeWeek={data[0]} />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: width,

            paddingLeft: 65,
            height: 100,
            gap: 65,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "PoppinsSemiBold",
              fontSize: 12,
            }}
          >
            lowest daily{"\n"}water breaks
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "PoppinsSemiBold",
              fontSize: 12,
            }}
          >
            highest daily {"\n"}water breaks
          </Text>
        </View>
        <View
          style={{
            position: "relative",
            top: -62,
            flex: 1,
            flexDirection: "row",
            width: width,
            gap: 20,
            marginLeft: 37,
          }}
        >
          <View style={styles.high}>
            <Text style={styles.highText}>
              {"\n"} Monday
              <Text
                style={{
                  color: "white",
                  fontFamily: "PoppinsBold",
                  fontSize: 30,
                }}
              >
                {"\n"}54
              </Text>
            </Text>
          </View>
          <View style={styles.low}>
            <Text style={styles.lowText}>
              {"\n"} Monday
              <Text
                style={{
                  color: "white",
                  fontFamily: "PoppinsBold",
                  fontSize: 30,
                }}
              >
                {"\n"}54
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GraphScreenDetails;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#45c7ff",
  },
  content: {
    marginTop: 10,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "white",
    height: height,
    backgroundColor: "white",
  },
  weeklyTaps: {
    padding: 10,
    alignItems: "center",
  },
  totalTaps: {
    fontSize: 40,
    textAlign: "center",
    color: "white",
    fontFamily: "PoppinsBold",
  },
  totalTapsText: {
    fontSize: 15,
    textAlign: "center",
    color: "#ffff",
    fontFamily: "Poppins",
  },
  high: {
    borderRadius: 15,
    borderColor: "#45c7ff",
    borderWidth: 1,
    height: 130,
    width: 130,
    backgroundColor: "#45c7ff",
  },
  highText: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 15,
    textAlign: "center",
  },
  low: {
    borderRadius: 15,
    borderColor: "#45c7ff",
    borderWidth: 1,
    height: 130,
    width: 130,
    backgroundColor: "#45c7ff",
  },
  lowText: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 15,
    textAlign: "center",
  },
});
