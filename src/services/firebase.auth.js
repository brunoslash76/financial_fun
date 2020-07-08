import firebase from '../utils/firebaseUtils';

async function signIn (email, password) {
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

async function authenticateCurrentUser() {
    try {
        const user = await firebase.auth().currentUser
        console.tron.log('authenticateCurrentUser', user);
        return user;
    } catch (error) {
        console.tron.log('ERROR', error)
        throw new Error(error)
    }
}

export {
    signIn,
    authenticateCurrentUser,
};