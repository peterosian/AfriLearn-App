import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ICONS, IMAGES, COLORS } from "../../constants";

const Comment = () => {
  return (
    <TouchableOpacity style={styles.commentView}>
      <View style={styles.commentTop}>
        <Text style={styles.commentTitle}>Comments</Text>
        <Text style={styles.commentCount}>2.2k</Text>
      </View>
      <View style={styles.commentBottom}>
        <Image
          source={IMAGES.dp1}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
        <Text style={styles.commentText} numberOfLines={2} ellipsizeMode="tail">
          I want to ask a question. If you are going to the term non-living
          things to clasify a creature Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text.
        </Text>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Image source={ICONS.caretDown} style={{}} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Comment;

const styles = StyleSheet.create({
  commentView: {
    paddingHorizontal: 18,
    paddingVertical: 9,
    marginVertical: 15,
    width: "100%",
    backgroundColor: COLORS.gray4,
    borderRadius: 30,
  },
  commentTop: {
    flexDirection: "row",
    marginBottom: 4,
  },
  commentTitle: {
    fontFamily: "andika-bold",
    fontSize: 14,
    lineHeight: 21,
  },
  commentCount: {
    fontFamily: "andika-regular",
    fontSize: 12,
    lineHeight: 21,
    marginLeft: 10,
  },
  commentBottom: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentText: {
    fontFamily: "andika-regular",
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.dark2,
    marginLeft: 10,
    flex: 1,
  },
});
