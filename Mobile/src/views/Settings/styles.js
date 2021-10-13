import styled from "styled-components/native";
import { TextInput, Switch, Button } from "react-native-paper";
import { StyleSheet, Text, View } from 'react-native';


export const Input = styled(TextInput)`
    width: 100%;
    margin-bottom: 5px;
`;

export const DividedInput = styled(TextInput)`
    width: 50%;
    margin-bottom: 5px;
`;

export const Info = styled.View`
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const InfoSwitch = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextSwitch = styled.View`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;

export const AlertText = styled.Text`
    color: #47A79C;
    font-weight: bold;
    margin-left: -10px;
`;