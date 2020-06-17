import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import PropTypes from 'prop-types';
import DependentsItem from '../DependentsItem';

const styles = {
	container: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between ',
	},
	touchableOpacity: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 75,
		right: 0,
		backgroundColor: 'red',
	},
	text: {
		color: 'white',
    	fontWeight: 'bold',
	},
};

const DependentsList = ({ dependentsArray }) => {

	const [count, setCount] = useState(0)

	useEffect(() => {}, [count, dependentsArray]);

	function deleteItem(index, rowMap) {
		dependentsArray.splice(index, 1);
		rowMap[index].closeRow();
		setCount(count + 1)
	}

	function renderHiddenItem(rowData, rowMap) {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.touchableOpacity} onPress={_ => deleteItem(rowData.item.index, rowMap)}>
					<Text style={styles.text}>Delete</Text>
				</TouchableOpacity>
			</View>
		);
	}

	function renderItem(data) {
		const { name, image } = data.item;
		const { index } = data;
		return (
			<DependentsItem key={index} title={name} image={image} />
		);
	}
	// render
	return dependentsArray.length > 0 ? (
		<SwipeListView
			useFlatList
			data={dependentsArray}
			renderItem={(data, rowMap) => renderItem(data, rowMap)}
			renderHiddenItem={(rowData, rowMap) => renderHiddenItem(rowData, rowMap)}
			rightOpenValue={-75}
		/>
	) : null;
};

DependentsList.propTypes = {
	dependentsArray: PropTypes.array.isRequired,
};

export default DependentsList;
