import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { 
    Button,
    Container,
    Text,
} from './styles';

const Switcher = ({text, onPress}) => {
    const [active, setActive] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(0);

    const handleClick = (value = text[0], buttonActive) => {
        if (onPress) onPress(value);
        if (buttonActive === buttonClicked) return;
        setActive(!active);
        setButtonClicked(buttonActive);
    }

    const checkActiveButton = () => active;

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

Switcher.propTypes = {
    text: PropTypes.array.isRequired,
    onPress: PropTypes.func.isRequired,
}

export default Switcher;
