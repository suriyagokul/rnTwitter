import { StyleSheet, View, Image, Text } from "react-native";
import { TweetType } from "../types/index";

type TweetProps = {
  tweet: TweetType;
};

export default function TweetComponent({ tweet }: TweetProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.image} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.name}>{tweet.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    // backgroundColor:"white",
  },
  mainContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    textAlignVertical: "center",
    color: "white",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
    color: "white",
  },
});
