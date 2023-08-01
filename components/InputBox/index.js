import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { COLORS, ICONS, IMAGES } from "../../constants";
import Card from "../Card";

const InputBox = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width, maxHeight: height * 0.105 }]}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="How can i help you today?"
          placeholderTextColor={COLORS.gray}
          style={[styles.input, {}]}
        />
      </View>
      <Card
        containerStyles={{
          paddingHorizontal: 0,
          marginVertial: 0,
          marginLeft: 13,
        }}
        contentStyles={{
          padding: 10,
          borderWidth: 2,
          borderRadius: 20,
          backgroundColor: COLORS.white,
        }}
        shadow
      >
        <Image source={ICONS.rocket} style={styles.image} />
      </Card>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
  },
  inputView: {
    borderWidth: 2,
    borderColor: COLORS.dark,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    borderRadius: 20,
    flex: 1,
    // width: "100%",
  },
  input: {
    fontFamily: "andika-regular",
    // width: "100%",
    // height: "100%",
    borderRadius: 18,
    fontSize: 15,
    lineHeight: 26,
    textAlignVertical: "center",
    padding: 15,
  },
  image: {
    height: 28,
    width: 28,
  },
});
