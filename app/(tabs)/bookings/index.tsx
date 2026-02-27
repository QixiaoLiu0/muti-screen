import { default as DiyBtn } from "@/app/_components/diy-button";
import ThemeHeader from "@/app/_components/theme-header";
import TitleBar from "@/app/_components/title-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <ThemeHeader>
        <TitleBar
          title="Trips"
          icon1={<AntDesign name="cloud-download" size={24} color="#fff" />}
          icon2={<AntDesign name="question-circle" size={24} color="#fff" />}
        />
      </ThemeHeader>
      <View style={styles.btnGroup}>
        <DiyBtn
          title="Active"
          isActive={true}
          style={{
            backgroundColor: "#f0f6fd",
          }}
          fontSize={12}
          color="#295cd5"
          borderColor="#000"
        />
        <DiyBtn
          title="Past"
          isActive={false}
          style={{}}
          fontSize={12}
          color="#000"
          borderColor="transparent"
        />
        <DiyBtn
          title="Canceled"
          isActive={false}
          style={{}}
          fontSize={12}
          color="#000"
          borderColor="transparent"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.imgWrapper}>
          <Image
            source={require("@/assets/images/scenery/icons8-globe-100.png")}
            style={styles.img}
          />
        </View>
        <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 30 }}>
          Where to next?
        </Text>
        <Text>You have not started any trips yet. Once you make</Text>
        <Text>a booking, it will appear here</Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  btnGroup: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  imgWrapper: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 50,
  },
  img: {},
});
