import { Pressable, StyleSheet, Text, View } from "react-native";
import MainScreenDetails from "../components/MainScreenDetails";
import WaterBottleIcon from "../../assets/svg/WaterBottleIcon";

export default function Page() {
  return (
    <View style={styles.container}>
      <MainScreenDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  icon: {},
});
