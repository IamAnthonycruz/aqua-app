import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WaterBottleIcon from "./assets/svg/WaterBottleIcon";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.icon}></View>
      <Text>Hello wolr</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
});
