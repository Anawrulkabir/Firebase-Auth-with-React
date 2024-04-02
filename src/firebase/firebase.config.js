// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9vIsu7AkVNhFOVebH-RgQ6Evdn8-cIZk',
  authDomain: 'fir-email-login-signup.firebaseapp.com',
  projectId: 'fir-email-login-signup',
  storageBucket: 'fir-email-login-signup.appspot.com',
  messagingSenderId: '146532847323',
  appId: '1:146532847323:web:93f913697a8a85a05106fe',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
