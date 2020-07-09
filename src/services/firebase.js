import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
        this.database = firebase.database();

        this.userCardsUrl = '';
    }

    setUserCardsUrl = (uid) => {
        this.userCardsUrl = `/cards/${uid}/`;
    }

    userCards = () => this.database.ref(this.userCardsUrl);

    userCurrentCard = (id) => this.database.ref(this.userCardsUrl+id); 

    signWithEmail = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();

    createUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
}

export default Firebase;