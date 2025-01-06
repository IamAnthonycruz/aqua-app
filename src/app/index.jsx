import { Pressable, StyleSheet, Text, View } from "react-native";
import MainScreenDetails from "../components/MainScreenDetails";
import WaterBottleIcon from "../../assets/svg/WaterBottleIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import supabase from "../supabase-client";
export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar style="light-content" />
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
