import { StyleSheet, Image, FlatList, Pressable } from "react-native";
import { Text, View } from "../../../../components/Themed";
import tweets from "../../../../assets/data/tweets";
import TweetComponent from "../../../../components/Tweet";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <TweetComponent tweet={item} />}
      />
      <Link href={"/newtweet"} asChild>
        <Entypo
          name="plus"
          size={24}
          color="white"
          style={styles.floatingButton}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  floatingButton: {
    backgroundColor: "#55acee",
    borderRadius: 25,
    padding: 15,
    position: "absolute",
    right: 15,
    bottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
