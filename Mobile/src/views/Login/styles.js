import styled from "styled-components";
import { TextInput, Button } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 40px;
  align-self: center;
  color: #47a79c;
  margin-bottom: 10px;
`;

export const LoginInput = styled(TextInput).attrs({
  outlineColor: "#47A79C",
})`
  margin-bottom: 4px;
`;

export const AuthButton = styled(Button).attrs({
  contentStyle: {
    padding: 4,
  },

  color: "#47A79C",
})`
  border: 1px solid #47a79c;
`;

export const FooterText = styled.Text`
  position: absolute;
  bottom: 8px;
  font-size: 15px;
  align-self: center;
  color: #47a79c;
`;

export const AnimationWrapper = styled.View`
  width: 75%;
  height: 35%;
`;
