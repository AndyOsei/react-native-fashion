import * as React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Text, Theme } from "./Theme";

interface ButtonProps {
  variant: "primary" | "default" | "transparent";
  label: string;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.gray;
  const color = variant === "primary" ? "white" : "button";

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" color={color}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
