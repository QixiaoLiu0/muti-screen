import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SavedItemProp {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  actionIcon: React.ReactNode;
  onPress: () => void;
}

const SavedItem = ({
  icon,
  title,
  subTitle,
  actionIcon,
  onPress,
}: SavedItemProp) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.mainBox}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.subBox}>
              {icon}
              <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
          </View>
          <View>
            <View>{actionIcon}</View>
          </View>
        </View>
        <View style={styles.borderBox}></View>
      </View>
    </TouchableOpacity>
  );
};

export default SavedItem;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    paddingTop: 15,
  },
  mainBox: { flexDirection: "row", alignItems: "center" },
  titleBox: { width: "92%" },
  title: {
    fontWeight: 700,
    marginBottom: 1,
    fontSize: 16,
  },
  subBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 1,
  },
  subTitle: {
    color: "#4d4d4d",
  },
  borderBox: {
    height: 0.7,
    marginLeft: 5,
    backgroundColor: "#d3d3d3",
    marginTop: 15,
  },
});
