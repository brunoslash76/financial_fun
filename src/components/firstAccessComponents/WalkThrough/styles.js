import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.white};
    width: 100%;
    height: 280px;
    padding-top: 8px;
    padding-bottom: 56px;
    border-radius: 26px;
    padding: 32px;
`;


export const Indicator = styled.View`
    background-color:  ${props => props.theme.colors.greyDark};
    width: 33px;
    height: 5px;
    border-radius: 10px;
    align-self: center;
`;

export const Step = styled.View`
    background-color: ${props => props.isActive ? props.theme.colors.brandPrimary : props.theme.colors.greyDark};
    width: 12px;
    height: 12px;
    border-radius: 6px;
`;

export const Text = styled.Text`
    font-family: ${props => props.theme.font.family.ubuntuRegular};
    font-size: 20px;
    color: ${props => props.theme.colors.grey};
`;