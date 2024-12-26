import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";

type Day = {
  day: Date;
  value: number;
};
type Week = Day[];
type WeeklyBarChartProps = {
  activeWeek: Week;
};
const weekArr = ["m", "t", "w", "th", "f", "s", "s"];
export const WeeklyBarChart = ({ activeWeek }: WeeklyBarChartProps) => {
  const { width: windowWidth } = useWindowDimensions();
  const BarChartWidth = windowWidth * 0.9;
  const BarChartGap = 10;

  const BarWidth =
    (BarChartWidth - BarChartGap * (activeWeek.length - 1)) / activeWeek.length;
  const MaxBarHeight = 150;
  const [fontsLoaded] = useFonts({
    Poppins: require("../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf"),
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
    Lato: require("../../../assets/fonts/Lato-Regular.ttf"),
  });
  const barPress = () => {
    console.log("hi");
  };
  return (
    <View>
      <View
        style={{
          marginLeft: 16,
          flexDirection: "row",
          gap: BarChartGap,
          alignItems: "flex-end",
        }}
      >
        {activeWeek.map((day, index) => (
          <Pressable key={index} onPress={barPress}>
            <View
              style={{
                height: MaxBarHeight * day.value,
                width: BarWidth,
                backgroundColor: "#45c7ff",
                borderRadius: 18,
                borderCurve: "continuous",
              }}
            ></View>
          </Pressable>
        ))}
      </View>
      <View
        style={{
          marginLeft: 28,
          flexDirection: "row",
          gap: 11,
          alignItems: "flex-end",
        }}
      >
        {weekArr.map((day, index) => (
          <View key={index} style={{ width: BarWidth }}>
            <Text style={{ fontFamily: "Lato", color: "black" }}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WeeklyBarChart;
