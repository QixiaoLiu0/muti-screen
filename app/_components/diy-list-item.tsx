import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface DiyListItemProps {
  leftIcon: React.ReactNode;
  text: string;
  righticon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

//  <EvilIcons name="chevron-right" size={24} color="black" />

const DiyListItem = ({
  leftIcon,
  text,
  righticon,
  style,
}: DiyListItemProps) => {
  return (
    <View style={[{}, styles.container, style]}>
      <View style={[styles.icon, styles.iconLeft]}>{leftIcon}</View>
      <Text style={styles.text}>{text}</Text>
      <View style={[styles.icon]}>{righticon && righticon}</View>
    </View>
  );
};

export default DiyListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingRight: 10,
    paddingLeft: 20,
    paddingVertical: 13,
    alignItems: "center",
    backgroundColor: " #fff",
  },
  text: {
    width: "76%",
    color: "#2c2c2c",
    fontWeight: 500,
    fontSize: 12,
  },
  icon: {
    justifyContent: "center",
  },
  iconLeft: { width: "13%" },
});
