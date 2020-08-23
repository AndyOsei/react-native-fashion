import React, { ReactNode } from "react";
import { Image, Dimensions, StyleSheet, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

import { Box, useTheme } from "./Theme";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0;
}

export const assets = [require("../../assets/patterns/1.png")] as const;

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 3200 / 2400;
const height = width * aspectRatio;

const Container = ({ children, pattern, footer }: ContainerProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const asset = assets[pattern];
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary"
      >
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.3}
          >
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
              top: -height * 0.3,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}
          >
            {children}
          </Box>
        </Box>
        <Box
          backgroundColor="secondary"
          paddingTop="m"
          style={{ paddingBottom: insets.bottom }}
        >
          {footer}
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
