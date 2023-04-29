import { StyleSheet, Image, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import tweets from "../../assets/data/tweets";
import TweetComponent from "../../components/TweetComponent";

const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <FlatList
      data={tweets}
      renderItem={({ item }) => <TweetComponent tweet={item} />}
    />
  );
}

const styles = StyleSheet.create({});
