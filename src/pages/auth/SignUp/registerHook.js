import firebase from '../../../utils/firebaseUtils';
import 'firebase/firestore';
async function createUserWithEmailAndPassword(email, password) {
    
    try {
        const response = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
        return response;
    } catch (error) {
        return {
            error,
        }
    }
    
}

async function saveUserToRealtimeWith(id, email) {
    return saveDataToRealtimeDatabase(id, {email})
}

function saveDataToRealtimeDatabase(id, data) {

    try {
        return firebase.database().ref(`users/${id}`)
        .set({
            id,
            ...data,
        })
    } catch (error) {
        return {error}
    }
    
}

export default function useRegister() {
    return {
        createUserWithEmailAndPassword,
        saveUserToRealtimeWith,
    };
}