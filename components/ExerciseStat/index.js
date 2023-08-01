import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import videoBtnInfo from "../../assets/dummy-data/videoBtnInfo";
import { COLORS } from "../../constants";

const ExerciseStat = () => {
  return (
    <FlatList
      data={videoBtnInfo}
      style={{ marginVertical: 15 }}
      contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 15,
            backgroundColor: COLORS.gray4,
            alignItems: "center",
          }}
        >
          {/* {item.icon && ( */}
          <Image
            source={item.icon}
            style={{ width: 18, height: 18 }}
            resizeMode="contain"
          />
          {/* )} */}
          {item.text && (
            <Text
              style={{
                fontFamily: "andika-regular",
                fontSize: 14,
                lineHeight: 24,
                color: COLORS.dark,
                textAlignVertical: "center",
                marginLeft: 4,
              }}
            >
              {item.text}
            </Text>
          )}
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ExerciseStat;

const styles = StyleSheet.create({});
