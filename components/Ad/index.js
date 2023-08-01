import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { ICONS, IMAGES } from "../../constants";

const Ad = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={IMAGES.kfc}
          style={[styles.image, { height: 200, aspectRatio: 1.92 }]}
          resizeMode="contain"
        />
        <Image source={ICONS.ad} style={styles.ad} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Ad;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: 15,
  },
  image: {
    alignSelf: "center",
    // height: 20,
  },
  ad: {
    height: 16,
    width: 20,
    marginTop: 5,
  },
});
