import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDnG9iqIH-ARVtynLAQzpp9msjDebXUD3Y',
  authDomain: 'house-marketplace-51ad2.firebaseapp.com',
  projectId: 'house-marketplace-51ad2',
  storageBucket: 'house-marketplace-51ad2.appspot.com',
  messagingSenderId: '1026190511802',
  appId: '1:1026190511802:web:e20f4cec6a3388f08dbc83',
}

// Initialize Firebase
export const db = getFirestore()
