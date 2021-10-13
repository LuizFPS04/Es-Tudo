import React, { useState } from 'react';
import { Switch } from 'react-native-paper';

import {
    Input,
    Info,
    DividedInput,
    InfoSwitch,
    TextSwitch,
    AlertText
} from './styles'

export default function Settings() {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <Info>
            <Input
                label="Nome"
                mode="outlined"
                outlineColor="#47A79C"
                placeholder={'Digite seu nome'}
                onChangeText={text => setText(text)}
            />
            <Input
                label="Email"
                mode="outlined"
                outlineColor="#47A79C"
                placeholder={'Digite seu email'}
                onChangeText={text => setText(text)}
            />
            <Input
                label="RA"
                mode="outlined"
                outlineColor="#47A79C"
                placeholder={'Digite seu RA'}
                onChangeText={text => setText(text)}
            />
            <InfoSwitch>
                <DividedInput
                    label="Data de Nascimento"
                    mode="outlined"
                    outlineColor="#47A79C"
                    placeholder={'Selecione sua data de nascimento'}
                    onChangeText={text => setText(text)}
                />
                <TextSwitch>
                    <AlertText>Alerta</AlertText>
                    <Switch
                        value={isSwitchOn}
                        onValueChange={onToggleSwitch}
                        color="#47A79C"
                    />
                </TextSwitch>

            </InfoSwitch>

        </Info>
    );
}
