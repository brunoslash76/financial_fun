import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native'

export const Text = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 32px;
    color: ${props => props.theme.colors.grey};
    text-align: left;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    margin-bottom: 32px;
    color: ${ props => props.disabled ? props.theme.colors.greyDark : props.theme.colors.brandPrimary};
    text-align: left;
`;

export const Button = styled(RectButton)`
  background-color: transparent;
  border: none;
  
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-self: flex-end;
`;

export const InnerContainer = styled.View`
    display: flex;
    flex: 1;
    height: ${Dimensions.get('screen').height - 200};
    min-height: 100%;
    justify-content: space-between;
`

export const ScrollView = styled.ScrollView`
    max-height: 320px;
`;