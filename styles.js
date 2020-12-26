import styled from 'styled-components/native';

export const ContainerSafe = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content : flex-start;
  align-items: center;
  background-color:#1F1D1E;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content : flex-start;
  align-items: center;
  background-color:#282625;

  width: 100%;
  height: 100%;
  
  
`;

export const Header = styled.View`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1F1D1E;

  border-width: 0px;
  border-bottom-width: 0.5px;
  border-bottom-color: #73726F;

  margin-bottom: 20px;
`;


export const Text = styled.Text`
  color: #FAF8F7;
  font-weight: 700;
`;

export const TextHeader = styled(Text)`
  font-size: 25px;
`;

export const Input  = styled.TextInput`
  border-radius: 4px;
  height: 45px;
  padding: 5px;
  margin: 10px;
  width: 90%;
  font-size: 18px;
  color: #FAF8F7;
  border-width: 0.5px;
  border-color: #73726F;
  background-color: #2F2B29;

`;

export const Button = styled.TouchableOpacity `
  height: 45px;
  background-color: #F1990F;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 50%;
  border-radius: 4px;
`;

export const ContainerQrCode = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;

  background: #282625;
  padding: 15px;
  
  width : 100%;
`;