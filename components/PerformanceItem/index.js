import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../Card";
import { COLORS, IMAGES } from "../../constants";

const PerformanceItem = ({ details }) => {
  const { subject, score, image } = details;
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Card
        containerStyles={{ paddingHorizontal: 0, marginVertical: 0 }}
        contentStyles={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
          padding: 10,
          borderRadius: 20,
        }}
      >
        <ImageBackground
          source={IMAGES.pie}
          style={{ height: 70, width: 70, padding: 2 }}
          resizeMode="contain"
        >
          <Image
            source={image}
            resizeMode="contain"
            style={{
              // height: "100%",
              // maxWidth: "100%",
              // backgroundColor: "red",
              alignSelf: "flex-end",
            }}
          />
        </ImageBackground>
      </Card>
      <Text style={{ fontFamily: "andika-regular", fontSize: 14 }}>
        {subject}
      </Text>
    </View>
  );
};

export default PerformanceItem;

const styles = StyleSheet.create({});
