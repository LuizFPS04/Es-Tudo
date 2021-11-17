import * as React from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import SettingsScreen from "./src/views/Settings";
import NewQuizScreen from "./src/views/NewQuiz";
import MyLearnScreen from "./src/views/MyLearn";
import LoginScreen from "./src/views/Login";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  "Meu Aprendizado": "book-outline",
  "Novo Questionário": "person-add-outline",
  Configurações: "settings-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color }) => (
      <Ionicons name={iconName} size={25} color={color} />
    ),
  };
};

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState([]);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      {isLogged ? (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "#47A79C",
              inactiveTintColor: "#BBBBBB",
            }}
          >
            <Tab.Screen
              name="Novo Questionário"
              component={NewQuizScreen}
              setData={setData}
            />
            <Tab.Screen name="Meu Aprendizado" component={MyLearnScreen} />
            <Tab.Screen name="Configurações" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <LoginScreen setIsLogged={setIsLogged} />
      )}
    </>
  );
}

export default App;
