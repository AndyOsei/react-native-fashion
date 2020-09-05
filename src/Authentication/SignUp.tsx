import React, { useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Container, Box, Button, Text } from "../components";
import { AuthNavigationProps } from "../components/Navigation";
import TextInput from "../components/Form/TextInput";

import Footer from "./components/Footer";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required(),
  password: Yup.string().min(6).required(),
  passwordConfirmation: Yup.string().equals(
    [Yup.ref("password")],
    "Passwords don't match"
  ),
});

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: { email: "", password: "", remember: false },
      onSubmit: () => navigation.navigate("Home"),
    }
  );
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Create Account
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Let us know what your name, email and your password
      </Text>
      <Box>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
            autoCompleteType="email"
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter your Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => passwordConfirmation.current?.focus()}
            secureTextEntry
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            ref={passwordConfirmation}
            icon="lock"
            placeholder="Confirm your Password"
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            error={errors.password}
            touched={touched.password}
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Create your account"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
