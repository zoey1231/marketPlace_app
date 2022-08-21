import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
          textContentType="username"
        />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          icon="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default RegisterScreen;
