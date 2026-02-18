import theme from "@/constants/theme";

import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ThemeHeaderProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ThemeHeaderWrapper = ({ children, style }: ThemeHeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          backgroundColor: theme.light.tint,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ThemeHeaderWrapper;

const styles = StyleSheet.create({});
