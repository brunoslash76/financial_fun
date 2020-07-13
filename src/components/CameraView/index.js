import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Camera } from 'expo-camera';
import { FontAwesome5 } from '@expo/vector-icons';

import { CameraButton, CameraButtonRing } from './styles';

const CameraView = ({ route, navigation }) => {
	const cameraRef = useRef()
	// CAMERA SETTINGS
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.front);

	useEffect(() => {
		console.tron.log('rolou')
		async function handleCameraPermission() {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		}
		handleCameraPermission();
	}, []);

	const handleTakePictureButton = async () => {
		if (!cameraRef) {
			console.tron.log('Não tem cam ref')
			return
		};
		let photo = await cameraRef.takePictureAsync();
		console.tron.log(photo)
		handlePicture(photo)
	}

	return (
		<View style={{ flex: 1 }}>
			<Camera
				style={{ flex: 1 }}
				type={type}
				ref={(ref) => console.tron.log(ref)}
			>
				<View
					style={{
						flex: 1,
						backgroundColor: 'transparent',
						flexDirection: 'row',
						border: '1px solid red '
					}}
				>
					<TouchableOpacity
						style={{
							// flex: ,
							// alignSelf: 'flex-end',
							// alignItems: 'center',
							position: 'absolute',
							bottom: 40,
							right: 32,
						}}
						onPress={() => {
							setType(
								type === Camera.Constants.Type.back
									? Camera.Constants.Type.front
									: Camera.Constants.Type.back
							);
						}}
					>
						<FontAwesome5 name='sync-alt' size={32} color='#fff' />
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							// flex: 0.1,
							alignSelf: 'flex-end',
							height: 56,
							width: 56,
							backgroundColor: 'transparent',
							marginLeft: 'auto',
							marginRight: 'auto',
							marginBottom: 24,
							border: '1px solid red'
						}}
						onPress={handleTakePictureButton}
					>
						<View style={{position: 'relative'}}>
							<CameraButton />
							<CameraButtonRing />
						</View>
					</TouchableOpacity>
				</View>
			</Camera>
		</View>
	);
};


export default CameraView;
