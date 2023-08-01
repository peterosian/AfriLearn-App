import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { COLORS, IMAGES } from "../../constants";
import Card from "../Card";

const MessageItem = ({ message }) => {
  const { width, height } = useWindowDimensions();
  const { text, image, sender, avatar } = message;
  return (
    <View
      style={[
        styles.container,
        { justifyContent: sender === "afri" ? "flex-start" : "flex-end" },
      ]}
    >
      {sender === "afri" && (
        <Image source={avatar} style={styles.avatar} resizeMode="contain" />
      )}
      <Card
        containerStyles={{
          // width: "100%",
          maxWidth: "92%",
          paddingHorizontal: 0,
          marginVertical: 0,
          marginLeft: sender === "afri" ? 10 : 0,
          marginRight: sender !== "afri" ? 10 : 0,
        }}
        contentStyles={
          sender === "afri" ? styles.otherMsg : styles.myMsg(image)
        }
        shadow
        shadowLength={0.1}
      >
        {image && !text ? (
          <View
            style={{
              marginRight: 20,
            }}
          >
            <Image
              source={image}
              style={{
                width: 210,
                height: 210,
                margin: 5,
                marginBottom: 10,
              }}
              resizeMode="contain"
            />
            <Text style={styles.timestamp}>2:43am</Text>
          </View>
        ) : (
          <>
            <Text style={styles.messageText}>{text}</Text>
            <Text style={styles.timestamp}>2:43am</Text>
          </>
        )}
      </Card>
      {sender === "me" && (
        <Image source={avatar} style={styles.avatar} resizeMode="contain" />
      )}
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    // width: "100%",
    // flex: 1,
  },
  otherMsg: {
    // flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 10,
    borderRightRadius: 35,
  },
  myMsg: (image) => ({
    backgroundColor: image ? COLORS.white : COLORS.lightGreen,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopRightRadius: 10,
    borderLeftRadius: 35,
  }),
  messageText: {
    fontFamily: "andika-regular",
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    fontFamily: "andika-regular",
    fontSize: 12,
    color: COLORS.gray,
    alignSelf: "flex-end",
    paddingRight: 5,
  },
  avatar: {
    width: 20,
    aspectRatio: 1,
  },
});
