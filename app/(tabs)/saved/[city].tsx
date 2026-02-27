import { default as DiyBtn } from "@/app/_components/diy-button";
import SavedDetailCard from "@/app/_components/saved/saved-detail-card";
import ThemeHeader from "@/app/_components/theme-header";
import TitleBar from "@/app/_components/title-bar";
import { ALL_SAVED_PROPERTIES } from "@/data/allSavedProperties";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

const City = () => {
  const { city } = useLocalSearchParams ();
  const cityName = Array.isArray(city) ? city [0] : city || "";
  const filereData = ALL_SAVED_PROPERTIES.filter(
    item => item.city ===cityName
  );
  console.log(filereData);

  const renderHeader = () => (
    <View style = {styles.headerContainer}>
      <View style = {styles.headerMain}>

        <View style = {styles.staysBox}>
          
          <Text style = { styles.staysTxt}>Stays</Text>
          <View style = {styles.propertyBox}>
            <FontAwesome name="heart" size={10} color = "#c41923" />
            <Text style={styles.propertyTxt}> {filereData.length} </Text>
            <Text style={styles.propertyTxt}> properties saved</Text>
          </View>
        </View>

        <View style={styles.mapBox}>
          <DiyBtn 
          style = {styles.btn}
          icon = {<FontAwesome name="map-o" size = {10} color = "#386de5" />}
          title = "Map"
          fontSize = {14}
          color = "#386de5"
          />
        </View>
      </View>

      <View style = {styles.headerChangeDateWrapper}>

        <View style = {styles.changeDateBox}>
          <Feather name = "calendar" size = {14} color = "#386de5" />
          <Text style = {styles.changeDateTxt}>Change dates</Text>
        </View>

        <View style = {styles.headCountBox}>

          <View style = {styles.adultsCountBox}>
            <Feather name = "user" size ={14} color ="#386de5" />
            <Text style = {styles.headCountCommon}> {filereData[0].adults}</Text>
            <Text style = {styles.headCountCommon}> adults</Text>
          </View>

          <View style={styles.childrenCountBox}>
            {filereData[0].children != 0 && (
              <>
                <MaterialIcons name="child-care" size={14} color="#386de5" />
                <Text style={styles.headCountCommon}>
                  {filereData[0].children}
                </Text>
                <Text style={styles.headCountCommon}>children</Text>
              </>
            )}
          </View>
          

        </View>
      </View>

      
    </View>
  )



  return (
    <View style={styles.container}>
      <ThemeHeader>
        <TitleBar
          title={cityName}
          fontSize={16}
          goBack={true}
          icon1={<Feather name="share" size={24} color="#fff" />}
        />
      </ThemeHeader>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={filereData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SavedDetailCard
            mainPic={item.mainPic}
            title={item.title}
            recommendationIndex={item.recommendationIndex}
            rate={item.rate}
            rateDesc={item.rateDesc}
            reviewCount={item.reviewCount}
            location={item.location}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  headerContainer: {
    margin: 15,
    // backgroundColor: "#fff",
  },
  headerMain: {
    flexDirection: "row",
  },
  headerChangeDateWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  staysBox: { width: "80%" },
  staysTxt: { fontSize: 18, fontWeight: 700 },
  propertyBox: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  propertyTxt: { fontSize: 12, color: "#626262" },
  mapBox: {},
  btn: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#386de5",
  },
  changeDateBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  changeDateTxt: { color: "#386de5", fontWeight: 500, marginLeft: 5 },
  headCountBox: { flexDirection: "row" },
  adultsCountBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  headCountCommon: {
    color: "#386de5",
    marginLeft: 2,
  },
  childrenCountBox: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },
});
