import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, ICONS } from "../../constants";
import averageScores from "../../assets/dummy-data/averageScores";
import PerformanceItem from "../PerformanceItem";

const Performance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My overall average</Text>
        <TouchableOpacity style={styles.performanceView}>
          <Text style={styles.performanceTxt}>Performance</Text>
          <Image
            source={ICONS.arrow_right}
            style={{ width: 16, aspectRatio: 1, marginLeft: 5 }}
            tintColor={COLORS.blue}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={averageScores}
        contentContainerStyle={{
          paddingHorizontal: 20,
          marginTop: 10,
          gap: 15,
        }}
        renderItem={({ item }) => <PerformanceItem details={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Performance;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: "100%",
    backgroundColor: COLORS.gray3,
    marginVertical: 15,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "andika-bold",
    fontSize: 18,
    lineHeight: 27,
  },
  performanceView: {
    flexDirection: "row",
    alignItems: "center",
  },
  performanceTxt: {
    fontFamily: "andika-bold",
    fontSize: 14,
    color: COLORS.blue,
  },
});
