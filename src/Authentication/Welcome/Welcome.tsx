import React from "react";
import { Image, StyleSheet } from "react-native";

import { Box, Text, Button } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const picture = {
  src: require("../../../assets/5.png"),
};

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="gray"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Image source={picture.src} />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box backgroundColor="gray" {...StyleSheet.absoluteFillObject} />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's Get Started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience.
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button label="Join us, it's Free" />
          <Button variant="transparent" label="Forgot password?" />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
