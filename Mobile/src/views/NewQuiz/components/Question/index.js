import React, { useState } from "react";
import { Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { QuestionsMain, QuestionOptionView, Title } from "./styles";

export const Question = ({ item, setAnswers, answers }) => {
  const [checked, setChecked] = useState();

  const handleSetOneAnswer = (id, choice) => {
    console.log(answers);
    setChecked(choice);
    const newArray = answers;
    newArray[id - 1] = choice;
    setAnswers(newArray);
  };

  return (
    <QuestionsMain>
      <Title>
        {item.id}) {item.question}
      </Title>
      <QuestionOptionView>
        <RadioButton
          color="#47A79C"
          value="a"
          onPress={() => handleSetOneAnswer(item.id, "a")}
          status={checked === "a" ? "checked" : "unchecked"}
        />
        <Text onPress={() => setChecked("a")}>a) {item.answers[0]}</Text>
      </QuestionOptionView>
      <QuestionOptionView>
        <RadioButton
          color="#47A79C"
          value="b"
          status={checked === "b" ? "checked" : "unchecked"}
          onPress={() => handleSetOneAnswer(item.id, "b")}
        />
        <Text onPress={() => setChecked("b")}>b) {item.answers[1]}</Text>
      </QuestionOptionView>
    </QuestionsMain>
  );
};
