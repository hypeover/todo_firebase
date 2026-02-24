import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDjTxQy33KETFPgfNXOvXCXOCtT3HODQ_4",
  authDomain: "todofirebase-fda90.firebaseapp.com",
  projectId: "todofirebase-fda90",
  storageBucket: "todofirebase-fda90.firebasestorage.app",
  messagingSenderId: "701377224221",
  appId: "1:701377224221:web:1f89825b0e953e8ce470f4",
  databaseURL: "https://todofirebase-fda90-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)

export default app