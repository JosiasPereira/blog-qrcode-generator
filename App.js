import { StatusBar } from 'expo-status-bar';
import QRCode from 'react-native-qrcode-svg';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native'

import {Container, Text, Input, Button, ContainerQrCode, ContainerSafe, Header, TextHeader} from './styles';

export default function App() {
  const [url, setUrl] = useState('');
  

  const [visible, setVisible] = useState(false);

  function handleChangeInput (text) {
    if (text =='' || visible){
      setVisible(false);
    }

    setUrl(text);
  }

  function handleBtnGenerator () {
    if (url == '')
      setVisible(false)
    else
      setVisible(true);
    Keyboard.dismiss();

    
  }
  return (
    <ContainerSafe >
      <Container>
        <Header>
          <TextHeader>
            Gerador de QRCode
          </TextHeader>
        </Header>
         <KeyboardAvoidingView>
          <Text  >Insira uma URL</Text>
          <Input keyboardType='url'  onChangeText ={handleChangeInput} autoCapitalize="none"/>
          <Button onPress={handleBtnGenerator}>
            <Text>Gerar</Text>
          </Button>
          <ContainerQrCode >
            {visible ? (
              <QRCode          
              value={url}
              size={150}          
              color="#F1990F"
              backgroundColor="#282625"
              
            />
            ): <></>}
          </ContainerQrCode>
          </KeyboardAvoidingView>
        <StatusBar style="light" />
      </Container>
    </ContainerSafe>
  );
}
