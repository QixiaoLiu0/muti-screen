import { default as DiyBtn } from "@/app/_components/diy-button";
import DiyListItem from "@/app/_components/diy-list-item";
import SearchCard from "@/app/_components/search-card";
import ThemeHeader from "@/app/_components/theme-header";
import TitleBar from "@/app/_components/title-bar";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <ThemeHeader style={styles.themeheader}>
        <TitleBar
          title={"Booking.com"}
          bold={true}
          fontSize={17}
          goBack={false}
          icon2={<Feather name="message-circle" size={28} color="#fff" />}
          icon1={<Feather name="bell" size={28} color="#fff" />}
        />
        <View style={styles.btnWrapper}>
          <DiyBtn
            isActive={true}
            title="Stays"
            icon={<Ionicons name="bed-outline" size={20} color="#fff" />}
            fontSize={12}
          />
          <DiyBtn
            title="Flights"
            icon={<Ionicons name="airplane-outline" size={20} color="#fff" />}
            fontSize={12}
          />
          <DiyBtn
            title="Car rental"
            icon={<Ionicons name="car-outline" size={20} color="#fff" />}
            fontSize={12}
          />
          <DiyBtn
            title="Taxi"
            icon={<FontAwesome5 name="uber" size={20} color="#fff" />}
            fontSize={12}
          />
        </View>
      </ThemeHeader>

      <View style={styles.searchBox}>
        <DiyListItem
          style={{ borderBottomColor: "#bcbcbc", borderBottomWidth: 0.3 }}
          text="Shanghai, China"
          leftIcon={<Feather name="search" size={24} color="black" />}
        />
        <DiyListItem
          style={{ borderBottomColor: "#bcbcbc", borderBottomWidth: 0.3 }}
          text="Fri, Feb 13 - Sat, Feb 14"
          leftIcon={<Feather name="calendar" size={24} color="black" />}
        />
        <DiyListItem
          style={{}}
          text="1 room · 2 adults · No children"
          leftIcon={<Octicons name="person" size={24} color="black" />}
        />
        <DiyBtn
          isActive={false}
          title="Search"
          height={45}
          borderRadius={0}
          style={{ backgroundColor: "#386de5" }}
          fontSize={14}
        />
      </View>

      <Text style={[styles.headingCommon, styles.heading1]}>
        Continue your search
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={styles.column}>
          <SearchCard
            imgUrl={require("@/assets/images/scenery/pexels-1.jpg")}
            title="Shanghai"
            subTitle="Feb 13 - 14, 2 adults"
          />
          <SearchCard
            imgUrl={require("@/assets/images/scenery/pexels-2.jpg")}
            title="Zhoushan"
            subTitle="Feb 13 - 14, 2 adults"
          />
        </View>
        <View style={styles.column}>
          <SearchCard
            imgUrl={require("@/assets/images/scenery/pexels-3.jpg")}
            title="Ningbo"
            subTitle="Feb 13 - 14, 2 adults"
          />
        </View>
      </ScrollView>

      <Text style={[styles.headingCommon, styles.heading2]}>
        Recommended for Shanghai
      </Text>

      <Text style={styles.subHeading}>February 13 - Feruary 14, 2 ppl</Text>

      <View style={styles.recommendedWrapper}>
        <View
          style={[
            styles.recommendedItem,
            { borderBottomColor: "#e7e7e7", borderBottomWidth: 1 },
          ]}
        >
          <View style={[styles.recommendedIconWrapper, {}]}>
            <Ionicons name="airplane-outline" size={20} color="#3c71e6" />
          </View>
          <View style={styles.recommendedTextWrapper}>
            <Text style={styles.recommendedTitle}>Flight</Text>
            <Text style={styles.recommendedSubTitle}>
              Compare thousands of flights, all with no hidden fees
            </Text>
          </View>
        </View>
        <View style={styles.recommendedItem}>
          <View style={styles.recommendedIconWrapper}>
            <Ionicons name="car-outline" size={20} color="#3c71e6" />
          </View>
          <View style={styles.recommendedTextWrapper}>
            <Text style={styles.recommendedTitle}>Car rental</Text>
            <Text style={styles.recommendedSubTitle}>
              hundreds of cars and 24/7 customer service
            </Text>
          </View>
        </View>
      </View>

      <View style={{ height: 200 }}></View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
  },
  themeheader: {
    // height: 180,
  },
  btnWrapper: {
    flexDirection: "row",
    // gap: 5,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 45,
  },
  searchBox: {
    borderWidth: 3.5,
    borderColor: "#f4b700",
    marginHorizontal: 20,
    borderRadius: 10,
    position: "relative",
    top: -27,
    zIndex: 1,
    backgroundColor: "#fff",
  },
  headingCommon: {
    fontSize: 17,
    fontWeight: 600,
    marginHorizontal: 12,
  },
  heading1: {
    marginTop: 6,
    marginBottom: 15,
  },
  heading2: {
    marginBottom: 4,
  },
  subHeading: {
    marginHorizontal: 12,
    fontSize: 12,
    fontWeight: 400,
    marginBottom: 5,
  },
  scrollContainer: {
    marginLeft: 12,
    marginBottom: 25,
    marginTop: 2,
  },
  column: {
    flexDirection: "column",
    marginRight: 12,
    marginBottom: 3,
    gap: 12,
  },
  recommendedWrapper: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,

    borderWidth: 1,
    borderColor: "#f6f6f6",

    marginHorizontal: 15,
    marginTop: 5,
  },
  recommendedItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  recommendedIconWrapper: { width: "12%" },
  recommendedTextWrapper: {},
  recommendedTitle: { fontSize: 14, fontWeight: 600, paddingBottom: 1 },
  recommendedSubTitle: {
    fontSize: 12,
    paddingTop: 1,
  },
});
