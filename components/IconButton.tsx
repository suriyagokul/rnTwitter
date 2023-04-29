import { View, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
  size: number;
};

export default function Footer({ icon, text, size }: IconButtonProps) {
  return (
    <View style={styles.container}>
      <EvilIcons name={icon} size={size} color="grey" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "grey",
    alignSelf: "center",
    marginLeft: 3,
  },
});
