import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB7j_xdINgV9dThOLxkjZHkhGVSVo8XJ6s',
  authDomain: 'netflix-clone-2-d4b41.firebaseapp.com',
  projectId: 'netflix-clone-2-d4b41',
  storageBucket: 'netflix-clone-2-d4b41.appspot.com',
  messagingSenderId: '737072260992',
  appId: '1:737072260992:web:864be504d4195d39060365',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
