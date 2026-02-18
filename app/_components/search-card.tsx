import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface SearchCardProps {
  imgUrl: ImageSourcePropType;
  title: string;
  subTitle: string;
}

const SearchCard = ({ imgUrl, title, subTitle }: SearchCardProps) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={imgUrl} />
        <View style={styles.iconBadge}>
          <Ionicons
            style={styles.icon}
            name="bed-outline"
            size={16}
            color="#4779e7"
          />
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    width: 300,
    borderColor: "#f6f6f6",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  imgWrapper: { position: "relative" },
  img: {
    width: 48,
    height: 48,
    borderRadius: 5,
  },
  iconBadge: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 18,
    width: 18,
    backgroundColor: "#e7effe",
  },
  icon: { position: "absolute", left: 1, top: 1 },
  textWrapper: { marginLeft: 15 },
  title: {
    fontSize: 13,
    fontWeight: 700,
  },
  subTitle: { fontSize: 10, fontWeight: 400 },
});
