import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface TitleBarProp {
  title: string;
  bold?: boolean;
  fontSize?: number;
  goBack?: boolean;
  icon1: React.ReactNode;
  icon2?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TitleBar = ({
  title,
  bold = false,
  fontSize = 14,
  goBack = false,
  icon1,
  icon2,
  style,
}: TitleBarProp) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[{}, style, styles.leftIconBox]}
        onPress={() => {
          if (goBack) router.back();
        }}
      >
        {goBack && (
          <FontAwesome6 name="chevron-left" size={22} color={"#fff"} />
        )}
      </TouchableOpacity>
      <View style={styles.titleBox}>
        <Text
          style={[styles.title, { fontWeight: bold ? "700" : "400", fontSize }]}
        >
          {title}
        </Text>
      </View>
      <View style={[styles.rightIconBox]}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={[]}>{icon2 && icon2}</TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={[styles.rightIcon]}>
            {icon1}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TitleBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
  },
  leftIconBox: {
    width: "20%",
  },
  titleBox: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
  },
  iconBox: {},
  rightIconBox: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rightIcon: {
    // position: "absolute",
    // left: 40,
  },
});
