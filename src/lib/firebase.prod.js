import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBM3HZc-dyNdZbO-cV54S0x5H4I5GQ5Ckc',
  authDomain: 'netflix-1174c.firebaseapp.com',
  projectId: 'netflix-1174c',
  storageBucket: 'netflix-1174c.appspot.com',
  messagingSenderId: '915436786573',
  appId: '1:915436786573:web:5f767e335e615275fea3c4',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
