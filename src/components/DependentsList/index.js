import React, { useEffect } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import PropTypes from 'prop-types';
import DependentsItem from '../DependentsItem';

const DependentsList = ({ dependentsArray }) => {
	let swipeoutBtns = [
		{
			text: 'Delete',
			backgroundColor: '#fff',
			onPress: deleteChild(),
		},
	];
	useEffect(() => {}, [dependentsArray]);

	function mapDependents() {
		return dependentsArray.map((dependent, index) => {
			if (!dependent.name && !dependent.age) return;
			return (
				<DependentsItem
					key={index}
					title={dependent.name}
					image={dependent.image}
				/>
			);
		});
	}

	function deleteChild() {
		console.log('delete');
	}

	// render
	return dependentsArray.length > 0 ? mapDependents() : null;
};

DependentsList.propTypes = {
	dependentsArray: PropTypes.array.isRequired,
};

export default DependentsList;
