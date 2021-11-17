import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { useFetch } from "../../services/components/useFetch";

import { Loading } from "./styles";
import { questionary } from "../../services/mocks/questionary-mock";
import { Question } from "./components/Question";
import { QuestionaryHeader } from "./components/Header";

export default function NewQuiz({ navigation, setData }) {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [answers, setAnswers] = useState([]);

  function getQuestionaryData() {
    // const { isLoading, value, error } = useFetch();
    setValue(questionary);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  const handleSendAnswers = () => {
    navigation.navigate("Meu Aprendizado");
  };

  useEffect(() => {
    getQuestionaryData();
  }, []);

  const renderItem = ({ item }) => (
    <Question item={item} setAnswers={setAnswers} answers={answers} />
  );

  return (
    <>
      {isLoading ? (
        <Loading>
          <ActivityIndicator animating={true} color="#47A79C" />
        </Loading>
      ) : (
        <>
          <QuestionaryHeader backButton number={2} />
          <FlatList
            data={value}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.id)}
          />
          <Button
            mode="contained"
            color="#47A79C"
            icon="send"
            style={{
              width: "90%",
              alignSelf: "center",
              marginVertical: 10,
            }}
            contentStyle={{
              width: "100%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => handleSendAnswers()}
            disabled={false}
          >
            Enviar
          </Button>
        </>
      )}
    </>
  );
}
