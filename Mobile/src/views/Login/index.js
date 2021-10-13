import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const express = require("express");
// const app = express();
// app.use(express.json());

import { TextInput, Button } from 'react-native-paper';

export default function LoginScreen({ setLogged }) {
    const [cpf, setCPF] = useState('')
    const [password, setPassword] = useState('')

    const createNewLogin = () => {
        const login = {
            cpf,
            password
        }
    }


    return (
        <>
            <TextInput
                    label="CPF"
                    mode="outlined"
                    onChangeText={(cpf) => setCPF(cpf)}
            />

            <TextInput
                    label="Senha"
                    mode="outlined"
                    onChangeText={(password) => setPassword(password)}
            />
            <Button mode="contained" onPress={() => console.log(createNewLogin)} >Criar conta</Button>
        </>
    );
}
