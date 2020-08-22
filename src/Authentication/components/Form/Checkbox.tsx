import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../../../components";

interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <RectButton
      onPress={() => setChecked((c) => !c)}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row">
        <Box
          width={20}
          height={20}
          borderRadius="s"
          marginRight="m"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? "primary" : "white"}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
