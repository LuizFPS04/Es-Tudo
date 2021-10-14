import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { RadioButton, Button } from "react-native-paper";

import {
  QuestionsHeader,
  QuestionsMain,
  QuestionsButton,
  QuestionOptionView,
  ButtonBack,
  ButtonNext,
  Loading,
  StageText,
} from "./styles";

export default function NewQuiz() {
  const [checked, setChecked] = useState();
  const [count, setCount] = useState(1);

  function backQuestion() {
    if (count == 1) {
      setCount(1);
    } else {
      setCount(count - 1);
      setChecked("unchecked");
    }
  }

  function nextQuestion() {
    if (count == 20) {
      setCount(20);
    } else {
      setCount(count + 1);
      setChecked("unchecked");
    }
  }

  function useFetch(url, options = {}) {
    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url, options)
        .then(async (response) => {
          const json = await response.json();
          setValue(json);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [url]);

    return { isLoading, value, error };
  }

  const { isLoading, value, error } = useFetch(
    "http://localhost:8888/questions"
  );

  return (
    <>
      {isLoading ? (
        <Loading>
          <ActivityIndicator animating={true} color="#47A79C" />
        </Loading>
      ) : (
        <>
          {value.questions.map((item) => (
            <>
              {item.id == count ? (
                <>
                  <QuestionsHeader>
                    <ButtonBack
                      color="#47A79C"
                      icon="arrow-left"
                      mode="text"
                      onPress={() => {
                        backQuestion();
                      }}
                    >
                      Voltar
                    </ButtonBack>
                    <StageText>Etapa 2/4</StageText>
                  </QuestionsHeader>

                  <QuestionsMain>
                    <Text>{item.name}</Text>

                    <QuestionOptionView>
                      <RadioButton
                        color="#47A79C"
                        value="first"
                        status={checked === "first" ? "checked" : "unchecked"}
                        onPress={() => setChecked("first")}
                      />
                      <Text>
                        {item.options.map((item) => (
                          <>
                            {item.n == 1 ? (
                              <Text>{item.text}</Text>
                            ) : (
                              <Text></Text>
                            )}
                          </>
                        ))}
                      </Text>
                    </QuestionOptionView>
                    <QuestionOptionView>
                      <RadioButton
                        color="#47A79C"
                        value="second"
                        status={checked === "second" ? "checked" : "unchecked"}
                        onPress={() => setChecked("second")}
                      />
                      <Text>
                        {item.options.map((item) => (
                          <>
                            {item.n == 2 ? (
                              <Text>{item.text}</Text>
                            ) : (
                              <Text></Text>
                            )}
                          </>
                        ))}
                      </Text>
                    </QuestionOptionView>
                  </QuestionsMain>

                  <QuestionsButton>
                    <ButtonNext
                      color="#47A79C"
                      mode="contained"
                      onPress={() => {
                        nextQuestion();
                      }}
                    >
                      Proxima Questão
                    </ButtonNext>
                  </QuestionsButton>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </>
      )}
    </>
  );
}
