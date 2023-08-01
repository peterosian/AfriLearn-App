import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { COLORS, ICONS, IMAGES } from "../constants";
import MessageItem from "../components/MessageItem";
import messages from "../assets/dummy-data/messages";
import MessageList from "../components/MessageList";
import InputBox from "../components/InputBox";
import { Link, Redirect } from "expo-router";
import videoBtnInfo from "../assets/dummy-data/videoBtnInfo";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import Question from "../components/Question";
import Comment from "../components/Comment";
import LessonExercise from "../components/LessonExercise";
import ExerciseStat from "../components/ExerciseStat";
import UpNext from "../components/UpNext";

export default function Page() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.container, width]}>
      <ScrollView
        style={{ width }}
        contentContainerStyle={{ paddingVertical: 40 }}
      >
        <Card
          contentStyles={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: COLORS.white,
          }}
          shadow
        >
          <Link
            style={{ fontFamily: "andika-bold", fontSize: 20 }}
            href="/home"
          >
            Go to Home Page
          </Link>
        </Card>
        <Card
          contentStyles={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: COLORS.white,
          }}
          shadow
        >
          <Link
            style={{ fontFamily: "andika-bold", fontSize: 20 }}
            href="/note"
          >
            Go to Note
          </Link>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

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
