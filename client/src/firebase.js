
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-4fb2a.firebaseapp.com",
  projectId: "blog-app-4fb2a",
  storageBucket: "blog-app-4fb2a.appspot.com",
  messagingSenderId: "822555085947",
  appId: "1:822555085947:web:025b5f61e5745c5e4866de"
};


 export const app = initializeApp(firebaseConfig);