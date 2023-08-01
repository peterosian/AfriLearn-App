import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Card from "../Card";
import { COLORS, IMAGES } from "../../constants";

const NextTopic = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Text style={styles.title}>Master next topic</Text>
      <Card
        containerStyles={{ width: "100%" }}
        contentStyles={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.white,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
        shadow
      >
        <Image
          source={IMAGES.circleStar}
          style={{ height: 81.44, aspectRatio: 1 }}
        />
        <Text style={styles.description} ellipsizeMode="tail">
          Living things and non-living things
        </Text>
      </Card>
    </View>
  );
};

export default NextTopic;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    // alignItems: "center",
  },
  title: {
    fontFamily: "andika-bold",
    fontSize: 18,
    lineHeight: 27,
    paddingHorizontal: 20,
  },
  description: {
    flex: 1,
    fontFamily: "andika-bold",
    fontSize: 18,
    lineHeight: 27,
    marginLeft: 15,
  },
});
