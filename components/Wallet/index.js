import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import { COLORS, ICONS, IMAGES } from "../../constants";
import Card from "../Card";

const Wallet = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Card
      contentStyles={{
        backgroundColor: COLORS.green,
        padding: 20,
      }}
      containerStyles={{
        width: "100%",
      }}
      shadow
      pattern
    >
      <View style={styles.walletName}>
        <Text style={styles.walletTitle}>AfriWallet</Text>
        <Ionicons name="arrow-forward" size={24} color={COLORS.white} />
      </View>

      <View>
        <View style={styles.balanceTopView}>
          <Image source={ICONS.union} style={{ marginRight: 1 }} />
          <Text style={styles.balanceTop}>5260.34</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.balanceBottom, { marginRight: 2 }]}>₦</Text>
          <Text style={styles.balanceBottom}>2500.00</Text>
        </View>
      </View>
      <View style={styles.pointsView}>
        <Text style={styles.pointsText}>Pts: </Text>
        <Text style={styles.pointsValue}>45 </Text>
      </View>
    </Card>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  walletName: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 5,
  },
  walletTitle: {
    fontFamily: "andika-regular",
    fontSize: 15,
    textAlignVertical: "center",
    // textAlign: "center",
    color: COLORS.white,
    opacity: 0.8,
    marginRight: 8,
  },
  balanceTopView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  balanceTop: {
    fontFamily: "andika-bold",
    textAlignVertical: "center",
    fontSize: 22,
    color: COLORS.white,
  },
  balanceBottom: {
    fontFamily: "andika-regular",
    fontSize: 15,
    color: COLORS.white,
  },
  pointsView: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  pointsText: {
    fontFamily: "andika-regular",
    fontSize: 15,
    color: COLORS.white,
  },
  pointsValue: {
    fontFamily: "andika-bold",
    fontSize: 15,
    color: COLORS.white,
  },
});
