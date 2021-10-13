import React, { useState } from "react";
import {
  Container,
  InputContainer,
  Title,
  ButtonContainer,
  AuthButton,
  LoginInput,
  FooterText
} from "./styles";

export default function LoginScreen({ setIsLogged }) {
  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const createNewLogin = () => {
    const login = {
      cpf,
      password,
    };

    return login;
  };

  return (
    <Container>
      <InputContainer>
        <Title>Es-Tudo</Title>
        <LoginInput
          label="CPF"
          mode="outlined"
          keyboardType="number-pad"
          onChangeText={(cpf) => setCPF(cpf)}
        />

        <LoginInput
          label="Senha"
          mode="outlined"
          secureTextEntry={secure}
          right={
            <LoginInput.Icon name="eye" onPress={() => setSecure(!secure)} />
          }
          onChangeText={(password) => setPassword(password)}
        />
      </InputContainer>
      <ButtonContainer>
        <AuthButton mode="outlined" onPress={() => setIsLogged(true)}>
          Fazer Login
        </AuthButton>
      </ButtonContainer>
      <FooterText>Ainda não possui uma conta? Registar-se!</FooterText>
    </Container>
  );
}
