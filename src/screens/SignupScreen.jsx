import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { colors } from "../global/Colors";
import { useSignUpMutation } from "../services/authServices";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { isValidEmail, isAtLeastSixCharacters } from "../validations/auth";
/* import { useSignUpMutation } from "../services/authService";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/singupSchema"; */

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [triggerSignUp, result] = useSignUpMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId,
          profileImage: "",
        })
      );
    }
  }, [result]);

  const onSubmit = () => {
    try {
      const isValidateEmail = isValidEmail(email);
      const isCorrectPassword = isAtLeastSixCharacters(password);
      const isRepeatPassword = password === confirmPassword;
      if (isValidateEmail && isCorrectPassword && isRepeatPassword) {
        const payload = {
          email,
          password,
          returnSecureToken: true,
        };
        triggerSignUp(payload);
      }
      if (!isValidateEmail) {
        setErrorMail("Email is not correct");
      } else {
        setErrorMail("");
      }
      if (!isCorrectPassword) {
        setErrorPassword("Password is not correct");
      } else {
        setErrorPassword("");
      }
      if (!isRepeatPassword) {
        setErrorConfirmPassword("Password is not repeat");
      } else {
        setErrorConfirmPassword("");
      }
    } catch (err) {
      console.log("Catch error");
      console.log(err.message);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <InputForm label={"email"} onChange={setEmail} error={errorMail} />
        <InputForm
          label={"password"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <InputForm
          label={"confirm password"}
          onChange={setconfirmPassword}
          error={errorConfirmPassword}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Send" />
        <Text style={styles.sub}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightBlue,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Josefin",
  },
  sub: {
    fontSize: 14,
    fontFamily: "Josefin",
    color: "black",
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Josefin",
    color: "blue",
  },
});
