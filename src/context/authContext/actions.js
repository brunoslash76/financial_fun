import { AsyncStorage} from 'react-native';
import FirebaseService from '../../services/FirebaseService';

const login = ({email, password}) => {
    const credentials = FirebaseService.login(email, password);
    if (credentials.hasError) { return }
    AsyncStorage.setItem('user_is_authenticate', '');
};
