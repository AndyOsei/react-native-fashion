import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, theme } from "../../../components";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  placeholder: string;
  validator?: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
const VALID = true;
const INVALID = false;
const PRISTINE = null;

type InputState = typeof VALID | typeof INVALID | typeof PRISTINE;

const TextInput = ({
  icon,
  placeholder,
  validator,
  ...props
}: TextInputProps) => {
  const [state, setState] = useState<InputState>(PRISTINE);
  const [input, setInput] = useState("");
  const reColor: keyof typeof theme.colors =
    state === PRISTINE ? "text" : state ? "primary" : "danger";
  const color = theme.colors[reColor];

  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== PRISTINE) {
      validate();
    }
  };

  const validate = () => {
    const valid = validator?.(input);
    setState(!!valid);
  };
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      height={48}
      padding="s"
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          value={input}
          onBlur={validate}
          {...{ placeholder, onChangeText }}
          {...props}
        />
      </Box>
      {state !== PRISTINE && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={state ? "primary" : "danger"}
        >
          <Icon name={state ? "check" : "x"} color="white" />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
