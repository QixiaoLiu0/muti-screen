import DiyListItem from "@/app/_components/diy-list-item";
import ThemeHeader from "@/app/_components/theme-header";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{ height: 850 }}>
      <ThemeHeader>
        <View style={styles.titleBarContainer}>
          <View style={styles.profileBox}>
            <Image
              source={require("@/assets/images/profile/pexels-glassesshop.jpg")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.txtBox}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.txt, styles.headTitleTxt]}>Hi, </Text>
              <Text style={[styles.txt, styles.headTitleTxt]}>xxx</Text>
            </View>
            <View style={styles.headSubTitle}>
              <Text style={[styles.txt, styles.headSubTitleTxt]}>Genius </Text>
              <Text
                style={[
                  styles.txt,
                  styles.headSubTitleTxt,
                  { color: "#f3bb00" },
                ]}
              >
                Level 2
              </Text>
            </View>
          </View>
          <View style={styles.iconBox}>
            <View>
              <Feather name="message-circle" size={24} color="#fff" />
            </View>
            <View>
              <Feather name="bell" size={24} color="#fff" />
            </View>
          </View>
        </View>

        <View style={[styles.rewardsContainer]}>
          <View style={styles.rewardsHead}>
            <View>
              <Image
                source={require("@/assets/images/scenery/icons8-gift.png")}
                style={styles.rewardsImg}
              />
            </View>
            <View style={styles.rewardsHeadTxtBox}>
              <Text style={{ fontSize: 12, fontWeight: 700, marginBottom: 2 }}>
                You have 5 Genius rewards
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  color: "#747474",
                  marginTop: 2,
                }}
              >
                10-15% discounts and so much more!
              </Text>
            </View>
            <View>
              <Entypo name="chevron-small-right" size={20} color="#aeaeae" />
            </View>
          </View>
          <Text style={styles.rewardsHeadSubtitle}>
            You are 5 bookings away from Genius Level 3
          </Text>
        </View>

        <View style={styles.voucherBox}>
          <Text style={{ fontSize: 12, width: "89%" }}>
            No Credits or voucher yet
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Text style={styles.currency}>¥0</Text>
            </View>
            <View style={{}}>
              <Entypo name="chevron-small-right" size={20} color="#aeaeae" />
            </View>
          </View>
        </View>
      </ThemeHeader>

      <ScrollView>
        <View style={styles.listBox}>
          <Text style={styles.listTitle}>Payment info</Text>
          <View style={styles.listContent}>
            <View
              style={[
                { borderBottomWidth: 0.8, borderColor: "#d9d9d9" },
                styles.listItemBox,
              ]}
            >
              <DiyListItem
                text="Rewards & Wallet"
                leftIcon={
                  <Ionicons name="wallet-outline" size={20} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>

            <View
              style={[
                { borderBottomWidth: 0.8, borderColor: "#d9d9d9" },
                styles.listItemBox,
              ]}
            >
              <DiyListItem
                text="Payment methods"
                leftIcon={
                  <AntDesign name="credit-card" size={18} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>

            <View style={styles.listItemBox}>
              <DiyListItem
                text="Transaction"
                leftIcon={
                  <FontAwesome6 name="rectangle-list" size={17} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>
          </View>
        </View>

        <View style={styles.listBox}>
          <Text style={styles.listTitle}>Payment info</Text>
          <View style={styles.listContent}>
            <View
              style={[
                { borderBottomWidth: 0.8, borderColor: "#d9d9d9" },
                styles.listItemBox,
              ]}
            >
              <DiyListItem
                text="Rewards & Wallet"
                leftIcon={
                  <Ionicons name="wallet-outline" size={20} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>

            <View
              style={[
                { borderBottomWidth: 0.8, borderColor: "#d9d9d9" },
                styles.listItemBox,
              ]}
            >
              <DiyListItem
                text="Payment methods"
                leftIcon={
                  <AntDesign name="credit-card" size={18} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>

            <View style={styles.listItemBox}>
              <DiyListItem
                text="Transaction"
                leftIcon={
                  <FontAwesome6 name="rectangle-list" size={17} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>
          </View>
        </View>

        <View style={styles.listBox}>
          <Text style={styles.listTitle}>Payment info</Text>
          <View style={styles.listContent}>
            <View
              style={[
                { borderBottomWidth: 0.8, borderColor: "#d9d9d9" },
                styles.listItemBox,
              ]}
            >
              <DiyListItem
                text="Rewards & Wallet"
                leftIcon={
                  <Ionicons name="wallet-outline" size={20} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>

            <View
              style={[
                { borderBottomWidth: 0.8, borderColor: "#d9d9d9" },
                styles.listItemBox,
              ]}
            >
              <DiyListItem
                text="Payment methods"
                leftIcon={
                  <AntDesign name="credit-card" size={18} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>

            <View style={styles.listItemBox}>
              <DiyListItem
                text="Transaction"
                leftIcon={
                  <FontAwesome6 name="rectangle-list" size={17} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>
          </View>
        </View>

        <View style={styles.listBox}>
          <Text style={styles.listTitle}>Payment info</Text>
          <View style={styles.listContent}>
            <View
              style={[
                { borderBottomWidth: 0.8, borderColor: "#d9d9d9" },
                styles.listItemBox,
              ]}
            >
              <DiyListItem
                text="Rewards & Wallet"
                leftIcon={
                  <Ionicons name="wallet-outline" size={20} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>

            <View
              style={[
                { borderBottomWidth: 0.8, borderColor: "#d9d9d9" },
                styles.listItemBox,
              ]}
            >
              <DiyListItem
                text="Payment methods"
                leftIcon={
                  <AntDesign name="credit-card" size={18} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>

            <View style={styles.listItemBox}>
              <DiyListItem
                text="Transaction"
                leftIcon={
                  <FontAwesome6 name="rectangle-list" size={17} color="black" />
                }
                righticon={
                  <EvilIcons name="chevron-right" size={22} color="black" />
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  titleBarContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: "center",
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#f4b700",
  },
  txtBox: {
    width: "62%",
    paddingLeft: 10,
  },
  headTitleTxt: {
    fontWeight: 700,
    fontSize: 18,
  },
  txt: {
    color: "#fff",
  },
  profileBox: {},
  headSubTitle: {
    flexDirection: "row",
  },
  headSubTitleTxt: {
    fontWeight: 600,
    fontSize: 12,
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 25,
  },

  rewardsContainer: {
    marginHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  rewardsHead: {
    borderBottomColor: "#dfdfdf",
    borderBottomWidth: 0.7,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  rewardsImg: {
    height: 60,
    width: 60,
  },
  rewardsHeadTxtBox: {
    width: "77%",
    paddingLeft: 5,
  },
  rewardsHeadSubtitle: {
    fontSize: 11,
    fontWeight: 400,
    color: "#000",
    marginTop: 15,
  },
  voucherBox: {
    backgroundColor: "#fff",
    // height: 300,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 15,
  },
  currency: {
    fontWeight: 700,
    position: "relative",
    right: 8,
  },
  listBox: { margin: 15 },
  listTitle: {
    fontWeight: 600,
    fontSize: 14,
  },
  listContent: {
    borderRadius: 8,
    marginTop: 18,
    borderColor: "#e7e7e7",
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  listItemBox: {
    // borderColor: "#e7e7e7",
  },
});
