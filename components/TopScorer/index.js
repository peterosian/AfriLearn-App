import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import topScorers from "../../assets/dummy-data/topScorer";
import TopScorerItem from "../TopScorerItem";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topScorerView}>
        <Text style={styles.topScorer}>Top scorers</Text>
        <TouchableOpacity style={styles.leaderBoardView}>
          <Text style={styles.leaderBoard}>Leaderboard</Text>
          <Ionicons name="arrow-forward" size={16} color={COLORS.blue} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={topScorers}
        renderItem={({ item }) => <TopScorerItem data={item} />}
        horizontal
        contentContainerStyle={{ gap: 13, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  topScorerView: {
    flexDirection: "row",
    // width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  topScorer: {
    fontFamily: "andika-bold",
    fontSize: 18,
  },
  leaderBoardView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  leaderBoard: {
    fontFamily: "andika-regular",
    fontSize: 14,
    color: COLORS.blue,
  },
});
