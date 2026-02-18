import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface savedDetailCardProp {
  mainPic: ImageSourcePropType;
  title: string;
  recommendationIndex: number;
  rate: number;
  rateDesc: string;
  reviewCount: number;
  location: string;
  startDate: string;
  endDate: string;
}

const SavedDetailCard = ({
  mainPic,
  title,
  recommendationIndex,
  rate,
  rateDesc,
  reviewCount,
  location,
  startDate,
  endDate,
}: savedDetailCardProp) => {
  return (
    <View style={[styles.shadow, styles.container]}>
      <View style={styles.detailMainBox}>
        <View style={styles.picBox}>
          <Image source={mainPic} style={styles.pic} />
        </View>
        <View style={styles.txtBox}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.recommedIndexBox}>
            {Array.from({ length: recommendationIndex }).map((_, index) => (
              <FontAwesome5
                key={index}
                name="dice-one"
                size={14}
                color="#f4b700"
              />
            ))}
          </View>

          <View style={styles.rateBox}>
            <View style={styles.rateTxtBox}>
              <Text style={styles.rateTxt}>{rate}</Text>
            </View>
            <View style={[{}, styles.rateDescBox]}>
              <Text style={styles.rateDesc}> {rateDesc}</Text>
            </View>
            <View style={styles.reviewBox}>
              <Text style={styles.reviewTxt}> · </Text>
              <Text style={[styles.rateReviewCount, styles.reviewTxt]}>
                {reviewCount}
              </Text>
              <Text style={styles.reviewTxt}> reviews</Text>
            </View>
          </View>

          <View style={styles.locationBox}>
            <EvilIcons
              style={styles.locationIcon}
              name="location"
              size={20}
              color="black"
            />
            <Text style={styles.locationTxt}>{location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.detailDateBox}>
        <Feather
          style={styles.calendar}
          name="calendar"
          size={14}
          color="#386de5"
        />
        <Text style={styles.detailDateTxt}>{startDate}</Text>
        <Text style={styles.detailDateTxt}> - </Text>
        <Text style={styles.detailDateTxt}>{endDate}</Text>
      </View>

      <View style={styles.positionIcon}>
        <FontAwesome name="heart" size={16} color="#c41923" />
      </View>
    </View>
  );
};

export default SavedDetailCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  detailMainBox: {
    flexDirection: "row",
    padding: 8,
    borderBottomColor: "#e7e7e7",
    borderBottomWidth: 1,
  },
  picBox: {},
  pic: {
    width: 115,
    height: 82,
    borderRadius: 6,
  },
  txtBox: { marginLeft: 8 },
  cardTitle: {
    fontWeight: 700,
    fontSize: 12,
  },
  recommedIndexBox: { flexDirection: "row", gap: 2, marginTop: 10 },
  rateBox: { flexDirection: "row", marginTop: 5 },
  rateTxtBox: {
    backgroundColor: "#1f3c95",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    padding: 3,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
  },
  rateTxt: {
    color: "#fff",
    fontSize: 9,
    fontWeight: 500,
  },
  rateDesc: {
    fontSize: 10,
    fontWeight: 500,
  },
  rateDescBox: { justifyContent: "center", marginLeft: 5 },
  reviewBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewTxt: {
    color: "#959595",
    fontSize: 10,
  },
  rateReviewCount: {},
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  locationIcon: {
    position: "relative",
    right: 5,
  },
  locationTxt: { fontSize: 12 },
  detailDateBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  calendar: {
    marginRight: 5,
  },
  detailDateTxt: {
    color: "#386de5",
    fontSize: 12,
    fontWeight: 500,
  },
  positionIcon: {
    position: "absolute",
    right: 8,
    top: 8,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 4,

    overflow: "visible",
  },
});
