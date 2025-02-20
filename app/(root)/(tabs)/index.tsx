import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-rubik m-5 text-[20px]">Welcome to Re state</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      {/* <Link href="/profile">profile</Link> */}
      <Link href="/properties/1">property</Link>
    </View>
  );
}
