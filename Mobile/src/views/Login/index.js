import React, { useState } from "react";
import LottieView from "lottie-react-native";

import {
  Container,
  InputContainer,
  Title,
  ButtonContainer,
  AuthButton,
  LoginInput,
  FooterText,
  AnimationWrapper,
} from "./styles";

export default function LoginScreen({ setIsLogged }) {
  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const createNewLogin = () => {
    const login = {
      cpf,
      password,
    };

    return login;
  };

  return (
    <Container>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../assets/book.json")}
        />
      </AnimationWrapper>
      <InputContainer>
        <Title>Es-Tudo</Title>
        <LoginInput
          label="CPF"
          mode="outlined"
          value={cpf}
          maxLength={14}
          keyboardType="number-pad"
          right={
            cpf.length > 0 ? (
              <LoginInput.Icon name="close" onPress={() => setCPF("")} />
            ) : (
              ""
            )
          }
          onChangeText={(cpf) => setCPF(cpfMask(cpf))}
        />

        <LoginInput
          label="Senha"
          mode="outlined"
          secureTextEntry={secure}
          right={
            password.length > 0 ? (
              <LoginInput.Icon name="eye" onPress={() => setSecure(!secure)} />
            ) : (
              ""
            )
          }
          onChangeText={(password) => setPassword(password)}
        />
      </InputContainer>
      <ButtonContainer>
        <AuthButton mode="outlined" onPress={() => setIsLogged(true)}>
          Fazer Login
        </AuthButton>
      </ButtonContainer>
      <FooterText>Ainda não possui uma conta? Registrar-se!</FooterText>
    </Container>
  );
}
