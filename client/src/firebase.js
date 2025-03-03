// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//  authDomain: 'mern-blog-b327f.firebaseapp.com',
//  projectId: 'mern-blog-b327f',
//  storageBucket: 'mern-blog-b327f.appspot.com',
//  messagingSenderId: '699397991367',
//  appId: '1:699397991367:web:88ff565ef72a182d6b87e2',
// }

const firebaseConfig = {
 apiKey: 'AIzaSyAtQMTboWSxINc7gYks5ftYRSwKKTLJbRE',
 authDomain: 'mern-blog-8030f.firebaseapp.com',
 projectId: 'mern-blog-8030f',
 storageBucket: 'mern-blog-8030f.firebasestorage.app',
 messagingSenderId: '113901509648',
 appId: '1:113901509648:web:8220e34840518bdb49be95',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
