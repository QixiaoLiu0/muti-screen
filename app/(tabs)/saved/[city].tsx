import { ALL_SAVED_PROPERTIES } from "@/data/allSavedProperties";
import { StyleSheet, Text, View } from "react-native";

const City = () => {
  const { city } = useLocalSearchParams ();
  const cityName = Array.isArray(city) ? city [0] : city || "";
  const filereData = ALL_SAVED_PROPERTIES.filter(
    item => item.city ===cityName
  );
  console.log(filereData);

  const renderHeader = () => (
    <View style = {styles.headerContainerr}>
      <View style = {styles.headerMain}>

        <View style = {styles.staysBox}>
          
          <Text style = { styles.staysTxt}>Stays</Text>
          <View style = {styles.propertyBox}>
            <FontAwesome name="heart" size={10} color = "#c41923" />
            <Text style={styles.propertyTxt}> {filteredData.lengh} </Text>
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
            <Text style = {styles.headCountCommon}> {filterDate[0].adults}</Text>
            <Text style = {styles.headCountCommon}> adults</Text>
          </View>

          

        </View>
      </View>

      
    </View>
  )



  return (
    <View>
      <Text>[city] page</Text>
    </View>
  );
};

export default City;

const styles = StyleSheet.create({});
