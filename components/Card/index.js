import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { COLORS, IMAGES } from "../../constants";

const Card = ({
  children,
  contentStyles = {},
  containerStyles = {},
  shadow = false,
  pattern,
  shadowColor = COLORS.gray,
  shadowLength = 1,
}) => {
  return (
    <TouchableOpacity
      style={[{ marginVertical: 15, paddingHorizontal: 20 }, containerStyles]}
    >
      <Shadow
        distance={shadowLength}
        startColor={shadow ? shadowColor : "#00000000"}
        endColor={shadow ? shadowColor : "#00000000"}
        offset={[-2, 2]}
        stretch
      >
        {pattern ? (
          <ImageBackground
            source={IMAGES.dot}
            style={[styles.card, contentStyles]}
            resizeMode="repeat"
            opacity={0.2}
          >
            {children}
          </ImageBackground>
        ) : (
          <View style={[styles.card, contentStyles]}>{children}</View>
        )}
      </Shadow>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: COLORS.gray,
  },
});
