import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { COLORS, ICONS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import Card from "../Card";

const Assessment = () => {
  const { height, width } = useWindowDimensions();
  return (
    <Card
      contentStyles={{
        flexDirection: "row",
        backgroundColor: COLORS.white,
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center",
      }}
      containerStyles={{ width: "100%" }}
      shadow
    >
      <View style={styles.imageView}>
        <Image source={ICONS.assessment} style={styles.icon} />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>Take assessment test</Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          See how you perform against all learners
        </Text>
      </View>
      <View style={{ marginLeft: 15 }}>
        <Image source={ICONS.arrow_right} style={{ width: 24 }} />
      </View>
    </Card>
  );
};

export default Assessment;

const styles = StyleSheet.create({
  // testView: {
  //   width: "100%",
  //   height: "100%",
  //   flexDirection: "row",
  //   backgroundColor: COLORS.white,
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   borderWidth: 2,
  //   borderRadius: 30,
  //   padding: 15,
  // },
  imageView: {
    aspectRatio: 1,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: COLORS.darkGray,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  icon: {
    margin: 5.5,
    height: 26,
    aspectRatio: 1,
  },
  titleView: {
    height: "100%",
    // width: "100%",
    flex: 1,
    // backgroundColor: "red",
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "andika-bold",
    fontSize: 18,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: "andika-regular",
    fontSize: 15,
    color: COLORS.gray2,
  },
});
