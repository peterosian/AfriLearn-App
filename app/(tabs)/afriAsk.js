import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { COLORS, IMAGES } from "../../constants";
import MessageList from "../../components/MessageList";
import InputBox from "../../components/InputBox";

const afriAsk = () => {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.container, width]}>
      <ImageBackground
        source={IMAGES.dot}
        resizeMode="repeat"
        opacity={0.5}
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <MessageList />
        <InputBox />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default afriAsk;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.offWhite,
  },
});
