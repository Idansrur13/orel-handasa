// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCdTBGWAyza5vYr6rm-YdS-fuz12KQ0xxE',
  authDomain: 'orel-handasa.firebaseapp.com',
  projectId: 'orel-handasa',
  storageBucket: 'orel-handasa.firebasestorage.app',
  messagingSenderId: '619375746178',
  appId: '1:619375746178:web:faf039c261df5143d4689b',
  measurementId: 'G-BGZSG2S6XX',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
