import React from "react";
import { View } from "react-native";
import { ButtonBack, QuestionsHeader, StageText } from "./styles";

export const QuestionaryHeader = ({ backButton, number }) => {
  return (
    <QuestionsHeader>
      {backButton ? (
        <ButtonBack
          color="#47A79C"
          icon="arrow-left"
          mode="text"
          onPress={() => navigation.navigate("Meu Aprendizado")}
        >
          Voltar
        </ButtonBack>
      ) : (
        <View />
      )}
      <StageText>Etapa {number}/4</StageText>
    </QuestionsHeader>
  );
};
