import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: ${({theme:{colors}, disabled}) => disabled ? colors.offWhite  : colors.brandPrimary};
  border-radius: 25px;
  height: 55px;
  width: 100%;
`;

export const Text = styled.Text`
  font-family: ${({theme: {font}}) => font.family};
  color: ${({theme: {colors}, disabled }) => disabled ? colors.greyLight : colors.white};
  font-weight: ${({ theme }) => theme.font.weigth.bold};
  font-size: ${({theme}) => theme.font.size.title};

`;