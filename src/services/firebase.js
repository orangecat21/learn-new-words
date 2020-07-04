import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

export const fire = firebase;

fire.initializeApp(firebaseConfig);
const database = fire.database();

export default database;