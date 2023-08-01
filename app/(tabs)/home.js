import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { COLORS, IMAGES } from "../../constants";
import Wallet from "../../components/Wallet";
import Assessment from "../../components/Assessment";
import TopScorer from "../../components/TopScorer";
import InviteCard from "../../components/InviteCard";
import Performance from "../../components/Performance";
import Ad from "../../components/Ad";
import Tutorials from "../../components/Tutorials";
import NextTopic from "../../components/NextTopic";
import { Stack } from "expo-router";

export default function Page() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.container]}>
      {/* <Stack.Screen name=/> */}
      <ScrollView style={{ width }}>
        <ImageBackground
          source={IMAGES.dot}
          resizeMode="repeat"
          opacity={0.5}
          style={{
            alignItems: "center",
            paddingBottom: 80,
          }}
        >
          <Wallet />
          <Assessment />
          <TopScorer />
          <InviteCard />
          <Performance />
          <Ad />
          <Tutorials />
          <NextTopic />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
    backgroundColor: COLORS.white,
  },
});
