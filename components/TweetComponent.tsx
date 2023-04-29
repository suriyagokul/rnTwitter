import { StyleSheet, View, Image, Text } from "react-native";
import { TweetType } from "../types/index";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import Footer from "./IconButton";

type TweetProps = {
  tweet: TweetType;
};

export default function TweetComponent({ tweet }: TweetProps) {
  // new way -- src={tweet.user.image}
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.image} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username} ·1h </Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="grey"
            style={{ marginLeft: "auto" }}
          />
        </View>
        <Text style={styles.name}>{tweet.content}</Text>
        {tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.tweetImg} />
        )}

        <View style={styles.footer}>
          <Footer icon="comment" text={tweet.numberOfComments} size={24} />
          <Footer icon="retweet" text={tweet.numberOfRetweets} size={24} />
          <Footer icon="heart" text={tweet.numberOfLikes} size={24} />
          <Footer icon="chart" text={tweet.impressions || 0} size={24} />
          <Footer icon="share-apple" size={20} />
        </View>
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
  },
  name: {
    fontWeight: "bold",
    // fontSize: 16,
    textAlignVertical: "center",
    color: "white",
  },
  username: {
    color: "grey",
    // fontSize: 14,
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
    color: "white",
  },
  tweetImg: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 3,
  },
});
