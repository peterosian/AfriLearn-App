import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { COLORS, ICONS, IMAGES } from "../../constants";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../Card";

const TopScorerItem = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Card
      containerStyles={{ paddingHorizontal: 0 }}
      contentStyles={{
        flexDirection: "row",
        padding: 15,
        backgroundColor: COLORS.white,
      }}
      shadow
    >
      <Image source={IMAGES.dp1} style={{ width: 65, height: 65 }} />
      <View style={styles.content}>
        <View style={styles.topContent}>
          <Text
            style={[
              styles.topText,
              { fontFamily: "andika-bold", color: COLORS.dark2 },
            ]}
          >
            SSS 1
          </Text>
          <Image
            source={ICONS.ellipse}
            color={COLORS.dark}
            style={{ marginHorizontal: 4, width: 2, height: 2 }}
          />
          <Text style={[styles.topText, { color: COLORS.green }]}>Level 3</Text>
          <Image
            source={ICONS.ellipse}
            color={COLORS.dark}
            style={{ marginHorizontal: 4, width: 2, height: 2 }}
          />
          <Image source={ICONS.group} style={{ width: 13, height: 13 }} />
          <Text
            style={[
              styles.topText,
              {
                fontFamily: "andika-bold",
                paddingLeft: 4,
                color: COLORS.dark2,
              },
            ]}
          >
            Top 1%
          </Text>
        </View>
        <View style={styles.nameView}>
          <Image source={ICONS.badge} style={styles.badge} />
          <Text style={styles.name}>Ire Otumba</Text>
        </View>
        <Text style={styles.school}>Bloomberry College</Text>
        <View style={styles.bottomContent}>
          <Text style={styles.score}>Score: </Text>
          <Text style={styles.points}>98</Text>
        </View>
      </View>
    </Card>
  );
};

export default TopScorerItem;

const styles = StyleSheet.create({
  content: {
    marginLeft: 15,
  },
  topContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  topText: {
    fontFamily: "andika-regular",
    fontSize: 12,
    color: COLORS.green,
  },
  nameView: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    height: 16,
    aspectRatio: 1,
  },
  name: {
    marginLeft: 4,
    fontFamily: "andika-bold",
    fontSize: 14,
    color: COLORS.dark2,
    lineHeight: 24,
    // backgroundColor: "red",
  },
  school: {
    fontFamily: "andika-regular",
    fontSize: 12,
    color: COLORS.dark2,
    lineHeight: 15,
  },
  bottomContent: {
    flexDirection: "row",
  },
  score: {
    fontFamily: "andika-regular",
    fontSize: 12,
    color: COLORS.gray2,
    lineHeight: 18,
  },
  points: {
    fontFamily: "andika-bold",
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.dark2,
  },
});
