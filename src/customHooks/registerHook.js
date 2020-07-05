import firebase from '../utils/firebaseUtils';
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

function saveUserData(id, data) {

    try {
        return firebase.database().ref(`users/${id}`)
        .set({
            id,
            ...data            
        })
    } catch (error) {
        return {error}
    }
}

function updateUserData(id, data) {
    const userRef = firebase.database().ref(`users/${id}`);
    return userRef.update({
        ...data
    })
}

function saveUserEmail(id, email) {
    try {
        return firebase.database().ref(`users/${id}`)
        .set({
            id,
            email,            
        });
    } catch (error) {
        return {error}
    }
}

async function addUserDependent(userId, dependentData) {
    try {

        const userDependentsRef = firebase.database().ref(`users/${userId}/dependents`)
        const newDependent = userDependentsRef.push()
        newDependent.set({
            parentId: userId,
            id: newDependent.key,
            ...dependentData,
        })
    } catch (error) {
        return error
    }
}

async function getUSersDependents(id, setState) {
    const userRef = firebase.database().ref(`users/${id}/dependents`);
    const response  = await userRef.on(
        'value',
        snapshot => {
            console.tron.log('======= SNAPSHOT =======',snapshot)
            if (snapshot){
                setState((snapshot))
            }
        },
        error => {
            console.tron.log('======= ERROR =======',error)
            return error
        }
    )
}

async function deleteDependent(dependent) {
    const {id, parentId} = dependent;
    try {
        let dependentRef = firebase.database().ref(`users/${dependent.parentId}/dependents/${dependent.id}`)
        console.tron.log('DEPENDENT REF => ',dependentRef)
        await dependentRef.remove();
    } catch (error) {
        return error;
    }

}

export default function useRegister() {
    return {
        createUserWithEmailAndPassword,
        saveUserData,
        saveUserEmail,
        updateUserData,
        addUserDependent,
        getUSersDependents,
        deleteDependent,
    };
}