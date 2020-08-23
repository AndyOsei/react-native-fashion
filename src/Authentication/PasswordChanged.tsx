import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { StackNavigationProps, Routes } from "../components/Navigation";
import { Container, Text, Box, Button, CloseButton } from "../components";

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="primaryLight"
          width={SIZE}
          height={SIZE}
          justifyContent="center"
          alignItems="center"
          marginBottom="xl"
          style={{ borderRadius: SIZE / 2 }}
        >
          <Text color="primary" textAlign="center">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Reset password"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;