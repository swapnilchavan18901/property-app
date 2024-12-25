import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-8">
          <Text className="text-base text-center font-rubik uppercase text-black-200">
            Welcome to Re State
          </Text>
          <Text className="text-3xl text-center font-rubik-bold mt-2 text-black-300">
            Let's Get You Closer to{"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-black-200 text-center mt-12 font-rubik">
            Login To ReState With Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-mg shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex-row justify-center items-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="font-rubik-medium text-black-300 m-2 text-lg">
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
