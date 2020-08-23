import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "./Theme";

interface CloseButtonProps {
  onPress: () => void;
}
const SIZE = 60;
const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <Box
        width={SIZE}
        height={SIZE}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        style={{ borderRadius: SIZE / 2 }}
      >
        <Text color="secondary" textAlign="center">
          <Icon name="x" size={45} />
        </Text>
      </Box>
    </RectButton>
  );
};

export default CloseButton;
