import { Link, useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  SafeAreaView,
} from "react-native";

const user = {
  id: "123456789",
  name: "Jane Smith",
  username: "janesmith",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png",
};

export default function Newtweet() {
  const [text, setText] = useState("");
  const router = useRouter();
  const onTweetPress = () => {
    console.warn("Posting the tweet", text);
    setText("");
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.topbar}>
            <Link href="../" style={styles.link}>
              Cancel
            </Link>
            <Pressable style={styles.tweetbtn} onPress={onTweetPress}>
              <Text style={styles.tweettext}>Tweet</Text>
            </Pressable>
          </View>
          <View style={styles.content}>
            <Image source={{ uri: user.image }} style={styles.image} />

            <TextInput
              placeholder="What's happening?"
              multiline={true}
              autoFocus
              selectionColor={"#55acee"}
              numberOfLines={Platform.OS === "ios" ? 4 : 5}
              maxLength={280} //limit upto 280 characters same for twitter.
              placeholderTextColor="grey"
              value={text}
              onChangeText={setText}
              style={styles.textInput}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 4,
    marginRight: 4,
    flex: 1,
  },
  content: {
    flexDirection: "row",
    marginTop: 20,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  textInput: {
    color: "white",
    fontSize: 18,
    flex: 1,
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    marginTop: 30,
  },
  tweetbtn: {
    backgroundColor: "#55acee",
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 10,
    width: 80,
    alignItems: "center",
  },
  link: {
    fontSize: 18,
    color: "white",
  },
  tweettext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
