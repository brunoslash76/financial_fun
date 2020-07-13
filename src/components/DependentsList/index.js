import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import PropTypes from 'prop-types';
import DependentsItem from '../DependentsItem';
import useRegister from '../../customHooks/registerHook'


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
	const {deleteDependent} = useRegister();
	useEffect(() => {}, [count, dependentsArray]);

	function deleteItem(rowData, rowMap) {
		const deletedDependent = dependentsArray.splice(rowData.index, 1);
		deleteDependent(deletedDependent[0]);
		rowMap[rowData.item.index].closeRow();
		setCount(count - 1)
	}

	function renderHiddenItem(rowData, rowMap) {

		return (
			<View style={styles.container}>
				<TouchableOpacity 
					style={styles.touchableOpacity} 
					onPress={_ => deleteItem(rowData, rowMap)}
				>
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
			useAnimatedList
			data={dependentsArray}
			renderItem={(data) => renderItem(data)}
			renderHiddenItem={(rowData, rowMap) => renderHiddenItem(rowData, rowMap)}
			rightOpenValue={-75}
		/>
	) : null;
};

DependentsList.propTypes = {
	dependentsArray: PropTypes.array.isRequired,
};

export default DependentsList;
