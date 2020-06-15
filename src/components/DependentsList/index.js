import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import PropTypes from 'prop-types';
import DependentsItem from '../DependentsItem';

const DependentsList = ({ dependentsArray }) => {

	const [dependentsArr, setArr] = useState([]);

	useEffect(() => {
		setArr(dependentsArray);
		console.tron.log('quantas vezes');
	}, [dependentsArr]);

	function deleteChild() {
		console.log('delete');
	}

	// render
	return dependentsArr.length > 0 ? (
		<SwipeListView
			useFlatList
			data={dependentsArr}
			renderItem={(data, rowMap) => {
				const { name, image } = data.item;
				const { index } = data;
				return (
					<DependentsItem key={index} title={name} image={image} />
				);
			}}
			renderHiddenItem={(rowData, rowMap) => {
				return (
					<View 
						style={{
							alignItems: 'center',
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between ',
						}}
					>
						<TouchableOpacity
							onPress={(_) => {
								dependentsArr.splice(rowData.index, 1)
								setArr(dependentsArr)
								console.tron.log(dependentsArr);
								rowMap[rowData.item.index].closeRow()
								
							}}
							style={{
								alignItems: 'center',
								bottom: 0,
								justifyContent: 'center',
								position: 'absolute',
								top: 0,
								width: 75,
								right: 0,
								backgroundColor: 'red',
								
							}}
						>
							<Text
								style={{
									color: 'white',
									fontWeight: 'bold'
								}}
							>Delete</Text>
						</TouchableOpacity>
					</View>
				);
			}}
			rightOpenValue={-75}
		/>
	) : null;
};

DependentsList.propTypes = {
	dependentsArray: PropTypes.array.isRequired,
};

export default DependentsList;
