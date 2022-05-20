//JavaScript
// src/firebace.js
import { initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALwV4hOFaq7Rv4DeM-XRF3HuhqoyirqGw",
    authDomain: "kids-13b19.firebaseapp.com",
    projectId: "kids-13b19",
    storageBucket: "kids-13b19.appspot.com",
    messagingSenderId: "1092974188481",
    appId: "1:1092974188481:web:117c4d3b8c263304204140"
  }

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
