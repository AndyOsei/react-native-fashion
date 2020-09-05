import React from "react";

import { AuthNavigationProps } from "../components/Navigation";
import {
  Container,
  Text,
  Box,
  Button,
  RoundedIconButton,
  RoundedIcon,
} from "../components";

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<"PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            name="x"
            size={60}
            backgroundColor="white"
            color="secondary"
            onPress={() => navigation.pop()}
          />
        </Box>
      }
    >
      <Box alignSelf="center">
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />
      </Box>
      <Text variant="title1" textAlign="center" marginVertical="l">
        Your password was successfully changed
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        close this window and login again
      </Text>
      <Box alignItems="center" marginTop="m">
        <Button
          variant="primary"
          label="Reset password"
          onPress={() => navigation.navigate("Login")}
        />
      </Box>
    </Container>
  );
};

export default PasswordChanged;
