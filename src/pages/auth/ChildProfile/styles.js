import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
export const Section = styled.View`
    display: flex;
    margin-bottom: 24px;
`;


export const InnerContainer = styled.View`
    display: flex;
    flex: 1;
    height: ${Dimensions.get('screen').height - 200};
    justify-content: space-between;
`
