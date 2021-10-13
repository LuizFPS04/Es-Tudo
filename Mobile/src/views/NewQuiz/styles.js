import styled from "styled-components/native";
import { Button, ActivityIndicator } from "react-native-paper";
import { StyleSheet, Text, View } from 'react-native';


export const QuestionsHeader = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px;
    height: 10%;
`;

export const QuestionsMain = styled.View`
    margin-top: 50px;
    padding: 20px;
    height: 55%;
`;

export const QuestionsButton = styled.View`
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 20%;
`;

export const QuestionOptionView = styled.View`
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 10px;
`;

export const StageText = styled.Text`
    color: #47A79C;
    font-weight: bold;
`;

export const ButtonBack = styled(Button)`
    margin-left: -10px;
`;

export const ButtonNext = styled(Button)`
    width: 100%;
    height: 40px;
    justify-content: center;
`;

export const Loading = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;