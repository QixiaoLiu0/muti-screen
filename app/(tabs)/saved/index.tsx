import { default as DiyBtn } from "@/app/_components/diy-button";
import SavedItem from "@/app/_components/saved/saved-item";
import ThemeHeader from "@/app/_components/theme-header";
import TitleBar from "@/app/_components/title-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

const Index = () => {
  const handleSavedDetails = (cityName: string) => {
    router.push({
      pathname: "/saved/[city]",
      params: { city: cityName },
    });
  };
  return (
    <View style={styles.container}>
      <ThemeHeader style={{}}>
        <TitleBar
          title="Saved"
          icon1={<AntDesign name="plus" size={24} color="#fff" />}
          style={styles.titleBar}
        ></TitleBar>
        <View style={styles.btnContainer}>
          <DiyBtn
            isActive={true}
            title="Lists"
            width={190}
            height={42}
            icon={<EvilIcons name="heart" size={24} color="#fff" />}
            fontSize={12}
          />
          <DiyBtn
            isActive={false}
            title="Alerts"
            width={190}
            height={42}
            icon={<Ionicons name="airplane-outline" size={20} color="#fff" />}
            fontSize={12}
          />
        </View>
      </ThemeHeader>
      <SavedItem
        icon={<AntDesign name="heart" size={10} color="#c41923" />}
        title="Tokyo"
        subTitle="2 saved items"
        actionIcon={
          <Ionicons name="ellipsis-vertical" size={13} color="#000" />
        }
        onPress={() => handleSavedDetails("Tokyo")}
      />
      <SavedItem
        icon={<AntDesign name="heart" size={10} color="#c41923" />}
        title="Osaka"
        subTitle="1 saved items"
        actionIcon={
          <Ionicons name="ellipsis-vertical" size={13} color="#000" />
        }
        onPress={() => handleSavedDetails("Osaka")}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  titleBar: {},
});