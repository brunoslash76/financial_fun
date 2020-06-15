import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from '../Placeholder';

import { Container, Image, Text } from './styles';

const DependentsItem = ({image, title}) => {
	return (
        <Container>
            {image ? <Image src={image}/> : <Placeholder />}
            <Text >{title}</Text>
        </Container>
    );
};

DependentsItem.propTypes = {
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
}

export default DependentsItem;
