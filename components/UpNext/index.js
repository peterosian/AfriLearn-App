import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import nextVideos from "../../assets/dummy-data/nextVideos";
import Video from "../Video";
import Card from "../Card";

const UpNext = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ width: "100%", marginVertical: 15 }}>
        <Text style={styles.header}>Up next</Text>
        {nextVideos.map((item, index) => (
          <Video
            details={item}
            height={height * 0.235}
            width={"100%"}
            indicatorBorderRadius={15}
            key={index}
          />
        ))}
      </View>
      <Card
        containerStyles={{
          width: "100%",
          marginHorizontal: 30,
          marginVertical: 10,
        }}
        contentStyles={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: COLORS.white,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
        }}
        shadow
        shadowColor={COLORS.dark}
      >
        <Text style={{ fontFamily: "andika-bold", fontSize: 20 }}>
          Load more
        </Text>
      </Card>
    </View>
  );
};

export default UpNext;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 15,
  },
  header: {
    fontFamily: "andika-bold",
    fontSize: 18,
    lineHeight: 27,
    color: COLORS.dark,
    marginBottom: 10,
  },
});
