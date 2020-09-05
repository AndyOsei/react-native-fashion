import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Theme, Text, Box, RoundedIcon, useTheme } from "../../components";

export interface DrawerItemProps {
  icon: string;
  screen: string;
  label: string;
  color: keyof Theme["colors"];
}

const DrawerItem = ({ icon, color, label }: DrawerItemProps) => {
  const theme = useTheme();
  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color="white"
        />
        <Text variant="button" fontSize={16} color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
