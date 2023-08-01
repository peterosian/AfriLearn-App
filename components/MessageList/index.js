import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import MessageItem from "../MessageItem";
import { FlatList } from "react-native";
import messages from "../../assets/dummy-data/messages";
import { COLORS } from "../../constants";

const MessageList = () => {
  const { width, height } = useWindowDimensions();
  return (
    <FlatList
      style={{ width: "100%", height: "100%" }}
      contentContainerStyle={{
        gap: 16,
        padding: 20,
        paddingTop: 9,
      }}
      data={messages}
      renderItem={({ item, index }) => {
        const time = index === 0 ? "Yesterday" : "Today";
        return (
          <>
            {(index === 0 || index === 3) && (
              <Text style={styles.day}>{time}</Text>
            )}
            <MessageItem message={item} />
          </>
        );
      }}
    />
  );
};

export default MessageList;

const styles = StyleSheet.create({
  day: {
    fontFamily: "andika-bold",
    fontSize: 14,
    color: COLORS.black,
    alignSelf: "center",
    marginBottom: 16,
  },
});
