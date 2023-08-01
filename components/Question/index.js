import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const Question = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View>
      <Text
        style={[styles.questionText, { marginVertical: 15 }]}
        // numberOfLines={99}
      >
        We can find many things around us, from mountains and oceans to plants
        and animals. The earth in which we live is made up of several things.
        These “things” can be categorized into two different types –
        <Text style={{ fontFamily: "andika-bold" }}>
          Living and Non-living Things.{" "}
        </Text>{" "}
        {"\n"}
        <View
          style={{
            width: width - 40,
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 7.5,
          }}
        >
          <Ionicons name="ellipse" size={5} style={{ top: 12 }} />
          <Text
            style={[styles.questionText, { marginLeft: 8 }]}
            // numberOfLines={3}
          >
            All living things breathe, eat, grow, move, reproduce and have
            senses.
          </Text>
        </View>
        <View
          style={{
            width: width - 50,
            flexDirection: "row",
            paddingTop: 7.5,
            paddingBottom: 15,
          }}
        >
          <Ionicons name="ellipse" size={5} style={{ top: 12 }} />
          <Text
            style={[styles.questionText, { marginLeft: 8 }]}
            // numberOfLines={3}
          >
            Non-living things do not eat, grow, breathe, move and reproduce.
            They do not have senses.
          </Text>
        </View>
        Living things have “life,” though some might not show its evident signs.
        For instance, a tree would probably not react the same way a human
        would. It would not react when we hit it, and it might not be able to
        walk around. Though the signs of life displayed by them are not very
        observable, it does not make them non-living. Let us have a detailed
        look at the important characteristics of living and non-living things
        and the difference between the two.{"\n\n"}
        <Text style={{ fontFamily: "andika-bold" }}>Living things</Text>
        {"\n\n"}
        Living things exist and are alive and are made of microscopic structures
        called cells. They grow and exhibit movement or locomotion. They
        experience metabolism, which includes anabolic and catabolic reactions.{" "}
        {"\n\n"}Living things are capable of producing a new life which is of
        their own kind through the process of reproduction. Living things have a
        particular life span and are not immortal.
      </Text>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  questionText: {
    width: "100%",
    textAlignVertical: "center",
    fontFamily: "andika-regular",
    fontSize: 18,
    color: COLORS.gray,
  },
});
