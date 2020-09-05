import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme, Text } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  iconRatio?: number;
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({
  name,
  size,
  color,
  iconRatio = 0.7,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;

  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text {...{ color }} style={{ width: iconSize, height: iconSize }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
