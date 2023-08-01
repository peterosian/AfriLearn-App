import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { COLORS, ICONS } from "../../constants";
import { Shadow } from "react-native-shadow-2";
import Card from "../Card";

const index = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Card
      containerStyles={{ width: "100%" }}
      contentStyles={{
        flexDirection: "row",
        padding: 20,
        backgroundColor: COLORS.cardboard,
        justifyContent: "space-between",
      }}
    >
      <Text numberOfLines={2} style={styles.inviteText}>
        Invite a friend,{"\n"}
        earn 10 Africoin
      </Text>
      <Card
        containerStyles={{ paddingHorizontal: 0, marginVertical: 0 }}
        contentStyles={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: COLORS.white,
        }}
        shadow
      >
        <Text style={{ fontFamily: "andika-bold", fontSize: 14 }}>Get</Text>
        <Image
          source={ICONS.union}
          style={{
            marginRight: 1,
            marginLeft: 5,
            height: 9,
            width: 7,
            tintColor: COLORS.brown,
          }}
        />
        <Text
          style={{
            fontFamily: "andika-bold",
            fontSize: 16,
            color: COLORS.brown,
            marginRight: 4,
          }}
        >
          10
        </Text>
        <Text
          style={{
            fontFamily: "andika-bold",
            fontSize: 14,
          }}
        >
          now
        </Text>
      </Card>
    </Card>
  );
};

export default index;

const styles = StyleSheet.create({
  button: {
    // width: "100%",
    flexDirection: "row",
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 30,
    padding: 15,
  },
  inviteText: {
    fontFamily: "andika-bold",
    fontSize: 16,
    marginRight: 25,
  },
});
