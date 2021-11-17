import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const QuestionsHeader = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
`;

export const StageText = styled.Text`
  color: #47a79c;
  font-weight: bold;
`;

export const ButtonBack = styled(Button)`
  margin-left: -10px;
`;
