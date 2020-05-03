import styled from 'styled-components';

// TODO: Refactor this banana styled component
const Banana = styled.View`
    background-color: ${({theme: {colors}}) => {
        return colors.brandPrimary
    }};
    flex: 1;
`;

export {
    Banana,
};