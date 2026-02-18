import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface DiyBtnProps {
  isActive?: boolean;
  title: string;
  borderRadius?: number;
  width?: number;
  height?: number;
  borderColor?: string;
  borderWidth?: number;
  icon?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  fontSize: number;
  color?: string;
}

const DiyButton = ({
  isActive = false,
  title = "Button",
  borderRadius = 999,
  width,
  height = 40,
  icon,
  onPress,
  style,
  fontSize,
  color = "#fff",
  borderColor = "#fff",
  borderWidth = 1,
}: DiyBtnProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderRadius, width, height },
        isActive && styles.active,
        style,
      ]}
    >
      {icon ? <View>{icon}</View> : null}

      <Text style={[styles.font, { fontSize, color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DiyButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    color: "#fff",
  },
  active: {
    backgroundColor: "#2e4e9f",
    borderColor: "#fff",
    borderWidth: 1,
  },
  font: {
    color: "#fff",
    fontWeight: 400,
    fontSize: 12,
  },
});
