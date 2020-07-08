import firebase from '../utils/firebaseUtils';

async function signIn (email, password) {
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

export {
    signIn,
};