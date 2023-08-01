import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { COLORS, IMAGES } from "../../constants";
import Question from "../../components/Question";
import Comment from "../../components/Comment";
import LessonExercise from "../../components/LessonExercise";
import ExerciseStat from "../../components/ExerciseStat";
import UpNext from "../../components/UpNext";

const Note = () => {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.container, width]}>
      <View
        style={{
          height: 5,
          backgroundColor: COLORS.dark2,
          width: "100%",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "87%",
            backgroundColor: COLORS.green2,
          }}
        />
      </View>
      <ScrollView
        style={{ width }}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.titleView}>
            <Text style={styles.title}>
              Living things and non-living things
            </Text>
            <View style={styles.subtitleView}>
              <Text style={styles.subtitle}>2mins read</Text>
              <Text style={styles.fullStop}>.</Text>
              <Text style={styles.subtitle}>23k views</Text>
            </View>
          </View>
          <Image
            source={IMAGES.cell}
            style={{
              height: 210,
              aspectRatio: 1.9,
              alignSelf: "center",
              marginVertical: 15,
            }}
            resizeMode="contain"
          />
        </View>
        <ExerciseStat />
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <Comment />
          <Question />
          <LessonExercise />
          <UpNext />
        </View>

        {/* <Redirect href="/(tabs)/home" /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  titleView: {
    width: "100%",
    alignItems: "flex-start",
    // backgroundColor: "red",
    marginBottom: 15,
  },

  title: {
    fontFamily: "andika-bold",
    fontSize: 24,
    width: "100%",
    marginBottom: 10,
  },
  subtitleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  subtitle: {
    fontFamily: "andika-regular",
    fontSize: 12,
    color: COLORS.dark2,
  },
  fullStop: {
    fontFamily: "andika-regular",
    fontSize: 12,
    lineHeight: 16,
    textAlignVertical: "center",
    marginHorizontal: 5,
    height: "100%",
  },
});

export default Note;
