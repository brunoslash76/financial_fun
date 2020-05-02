import { firebaseDatabase, firebaseAuth } from '../utils/firebaseUtils';

export default class FirebaseService {
    static getUsers = (nodePath, callback, size = 10) => {
        let query = firebaseDatabase.ref(nodePath).limitToLast(size);
        console.tron.log(query);
        query.on('value', dataSnapshot => {
            
            
            let items = [];
            
            // console.tron.log('dataSnapshot => ', dataSnapshot);
            dataSnapshot.forEach(childSnapshot => {

                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);

            });

            callback(items);

        });

        return query;
    };

    static auth = async(email, password) => {
        const credentials = await  firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .catch(error => { 
                return {
                    hasError: true,
                    error,
                }
            });
        
            return credentials;
    }
}