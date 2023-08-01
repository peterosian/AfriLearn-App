import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, ICONS, IMAGES } from "../../constants";

const Video = ({
  width,
  height,
  details,
  containerStyle,
  indicatorBorderRadius = 10,
}) => {
  const { subject, topic, thumbnail, state, views } = details;
  return (
    <View style={[styles.container, containerStyle, { width }]}>
      <Image
        source={thumbnail}
        style={{
          height,
          width: "100%",
          marginTop: 20,
          marginBottom: 10,
        }}
        resizeMode="contain"
      />
      {subject && (
        <Text style={styles.subject} ellipsizeMode="tail" numberOfLines={1}>
          {subject}
        </Text>
      )}
      <Text style={styles.topic} numberOfLines={2} ellipsizeMode="tail">
        {topic}
      </Text>
      {state && (
        <View
          style={[
            styles.indicator,
            {
              backgroundColor:
                state === "started" ? COLORS.lightYellow : COLORS.lightGreen,
              borderColor: state === "started" ? COLORS.yellow : COLORS.green2,
              borderRadius: indicatorBorderRadius,
            },
          ]}
        >
          <Image
            source={state === "started" ? ICONS.ellipseRed : ICONS.checkmark}
            style={{ width: state === "started" ? 8 : 16, aspectRatio: 1 }}
            resizeMode="stretch"
          />
          <Text
            style={{
              fontFamily: "andika-bold",
              fontSize: 10,
              textTransform: "uppercase",
              marginLeft: 4,
            }}
          >
            {state === "started" ? "Started" : "Completed"}
          </Text>
        </View>
      )}
      <Text
        style={{
          fontFamily: "andika-regular",
          fontSize: 12,
          color: COLORS.dark2,
          lineHeight: 21,
        }}
      >
        62k views
      </Text>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  subject: {
    fontFamily: "andika-regular",
    fontSize: 12,
    lineHeight: 24,
    color: COLORS.gray2,
    textTransform: "uppercase",
  },
  topic: {
    fontFamily: "andika-bold",
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.dark2,
    width: "100%",
  },
  indicator: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
});
