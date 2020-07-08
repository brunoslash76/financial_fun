import firebase from '../utils/firebaseUtils';

async function signIn (email, password) {
    console.tron.log('entrou no firebase auth')
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        return user;
    } catch (error) {
        console.tron.log('FUCKING ERROR', error)
        throw new Error(error);
    }
}

export {
    signIn,
};