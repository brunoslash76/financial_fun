import styled from 'styled-components/native';
import {Paragraph} from  '../../components';

export const CustomView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SmallText = styled.Text`
    font-size: ${props => props.theme.font.size.caption};
    color: ${props => props.theme.colors.grey};
`;

export const Icon = styled(Paragraph)`
    position: absolute;
    right: 16px;
    top: 12px;
`; 

export const CView = styled.View`
    position: relative;
`;
