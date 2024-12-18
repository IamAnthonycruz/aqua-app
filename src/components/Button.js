import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
