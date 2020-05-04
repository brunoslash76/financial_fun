import React, { useState } from 'react';

import { 
    Button,
    Container,
    Text,
} from './styles';

const Switcher = ({text, onPress}) => {
    const [active, setActive] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(0);

    const handleClick = (value, buttonActive) => {
        if (buttonActive === buttonClicked) return;
        if (onPress) onPress(value);
        console.tron.log(value)
        setActive(!active);
        setButtonClicked(buttonActive);
    }

    const checkActiveButton = () => {
        return active;
    }

	return (
        <Container>
            <Button active={checkActiveButton()} onPress={() => handleClick(text[0], 0)}>
                <Text active={checkActiveButton()}>{text[0] || 'Text1'}</Text>
            </Button>
            <Button active={!checkActiveButton()} onPress={() => handleClick(text[1], 1)}>
                <Text active={!checkActiveButton()}>{text[1] || 'Text2'}</Text>
            </Button>
        </Container>
    )
};

export default Switcher;
