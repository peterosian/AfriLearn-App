import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { COLORS, ICONS, IMAGES } from "../../constants";
import Video from "../Video";
import videoDetails from "../../assets/dummy-data/videoDetails";

const Tutorials = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Continue watching</Text>
        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAll}>View all</Text>
          <Image source={ICONS.arrow_right} style={styles.arrow} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={videoDetails}
        style={{ marginTop: 15 }}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 17 }}
        renderItem={({ item }) => (
          <Video
            details={item}
            height={height * 0.12}
            width={width * 0.335}
            iconSize={8}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Tutorials;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 15,
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "andika-bold",
    fontSize: 18,
    color: COLORS.dark2,
    lineHeight: 27,
  },
  viewAllBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  viewAll: {
    fontFamily: "andika-bold",
    fontSize: 14,
    color: COLORS.blue,
  },
  arrow: {
    height: 16,
    width: 16,
    marginLeft: 5,
    tintColor: COLORS.blue,
  },
});
