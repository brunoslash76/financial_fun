import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: ${({theme:{colors}, disabled}) => disabled ? colors.offWhite  : colors.brandSecondary};
  border-radius: 25px;
  height: 55px;
  width: 100%;
`;

export const Text = styled.Text`
  font-family: ${({theme: {font: { family }}}) => family};
  color: ${({theme: { colors: {white, greyLight}}, disabled }) => disabled ? greyLight : white };
  font-weight: ${({ theme: { font: { weight: { bold }}}}) => bold};
  font-size: ${({ theme: { font: { size: { title}}} }) => title};
`;