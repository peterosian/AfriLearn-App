import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../Card";
import { COLORS, ICONS, IMAGES } from "../../constants";
import exerciseStat from "../../assets/dummy-data/exerciseStats";

const LessonExercise = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={ICONS.weight} style={{ width: 24, height: 24 }} />
        <Text style={styles.headerTitle}>Lesson exercise</Text>
      </View>
      <Text style={styles.description}>
        How well did you understand this topic? Complete the exercise below
      </Text>
      <Card
        containerStyles={{
          marginVertical: 10,
          paddingHorizontal: 0,
          width: "100%",
        }}
        contentStyles={{
          flexDirection: "row",
          backgroundColor: COLORS.green,
          paddingVertical: 10,
          paddingHorizontal: 15,
          alignItems: "center",
        }}
        shadow
        shadowColor={COLORS.black}
      >
        <Image source={IMAGES.brightStar} style={{ width: 79, height: 79 }} />
        <Text style={styles.greenBtnText}>
          Living things and non-living things
        </Text>
      </Card>
      <View style={{ padding: 5, width: "100%" }}>
        <Text style={styles.exerciseStat}>Exercise stats:</Text>
        <FlatList
          data={exerciseStat}
          contentContainerStyle={{ gap: 20 }}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={item.image}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 5,
                  alignItems: "center",
                }}
              >
                {item.symbol && (
                  <Image
                    source={ICONS.union}
                    style={{ width: 6.2, height: 9 }}
                    tintColor={COLORS.black}
                    resizeMode="contain"
                  />
                )}
                <Text
                  style={{
                    fontFamily: "andika-bold",
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  {item.text}
                </Text>
              </View>
            </View>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default LessonExercise;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 15,
    backgroundColor: COLORS.gray4,
    borderRadius: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  headerTitle: {
    fontFamily: "andika-bold",
    fontSize: 18,
    color: COLORS.dark,
    lineHeight: 27,
  },
  description: {
    fontFamily: "andika-regular",
    fontSize: 14,
    color: COLORS.dark,
    marginBottom: 10,
  },
  greenBtnText: {
    flex: 1,
    fontFamily: "andika-bold",
    fontSize: 18,
    lineHeight: 27,
    color: COLORS.white,
    marginLeft: 15,
  },
  exerciseStat: {
    fontFamily: "andika-bold",
    fontSize: 14,
    lineHeight: 21,
  },
});
